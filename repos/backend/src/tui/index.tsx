import type { PseudoTtyInfo, ServerChannel } from 'ssh2';

export async function renderTui(stream: ServerChannel, info: PseudoTtyInfo) {
  const { render } = await import('ink');
  const { createElement } = await import('react');
  const { App } = await import('./App.js');

  // Patch stream with TTY info
  Object.assign(stream, {
    columns: info.cols,
    rows: info.rows,
    isTTY: true,
  });

  const { unmount } = render(
    createElement(App, {
      cols: info.cols,
      rows: info.rows,
    }),
    {
      stdout: stream as any,
      stderr: stream as any,
      stdin: stream as any,
      patchConsole: false,
      exitOnCtrlC: false,
    },
  );

  return unmount;
}
