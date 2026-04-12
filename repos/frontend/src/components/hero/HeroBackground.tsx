"use client";

import { useEffect, useRef } from "react";

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus metus urna, finibus at auctor quis, aliquam eu leo. Fusce sagittis rhoncus lectus, ac aliquet nunc laoreet sit amet. Sed porttitor quis augue maximus pharetra. Quisque sollicitudin, est a congue ultrices, nunc neque vulputate mi, id malesuada risus massa quis sem. Donec id pulvinar ligula. Mauris venenatis ut elit id bibendum. Aliquam nec ipsum ut nibh dignissim efficitur eget sit amet justo. Phasellus eget ornare augue. Mauris sollicitudin nec tellus vel maximus. Vivamus eleifend in justo egestas gravida. Donec ac metus vitae ipsum sodales elementum. Quisque sollicitudin condimentum hendrerit. Donec quis turpis turpis. Fusce eu ex sollicitudin, porta elit et, venenatis ex. Nulla at scelerisque urna. Etiam tincidunt urna non vulputate interdum.`;

const FONT_SIZE = 16;
const LINE_HEIGHT = 24;
const FONT = `${FONT_SIZE}px monospace`;
const MIN_ALPHA = 0.05;
const MAX_ALPHA = 0.25;
const RADIUS = 120;

type Char = { ch: string; x: number; y: number };

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;

    // Measure char width
    ctx.font = FONT;
    const charW = ctx.measureText("a").width;

    let chars: Char[] = [];

    const build = () => {
      const dpr = window.devicePixelRatio || 1;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;

      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;

      ctx.scale(dpr, dpr);

      const cols = Math.floor(W / charW);
      const rows = Math.floor(H / LINE_HEIGHT);

      chars = [];

      let idx = 0;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          chars.push({
            ch: text[idx++ % text.length],
            x: c * charW,
            y: r * LINE_HEIGHT + FONT_SIZE,
          });
        }
      }
    };

    const draw = () => {
      const { x: mx, y: my } = mouseRef.current;
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);
      ctx.font = FONT;

      for (const char of chars) {
        const dx = char.x - mx;
        const dy = char.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const alpha = Math.max(MIN_ALPHA, MAX_ALPHA / (1 + dist / RADIUS));

        // catppuccin mocha green
        ctx.fillStyle = `rgba(166, 227, 161, ${alpha})`;
        ctx.fillText(char.ch, char.x, char.y);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const onResize = () => {
      build();
    };

    build();

    rafRef.current = requestAnimationFrame(draw);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);

      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="w-full h-full absolute top-0 left-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute top-0 left-0 z-5"
        style={{ display: "block" }}
      />
      <div className="w-full h-full absolute top-0 left-0 z-10 bg-ctp-mantle/5 backdrop-blur-[0.5px]"></div>
    </div>
  );
}
