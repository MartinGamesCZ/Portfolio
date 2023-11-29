type Styles = Record<string, string>;

// Hook for easier use of multiple class names from a single CSS module
export default function useStyles(styles: Styles) {
  return (...className: string[]) => {
    return className.map((name) => styles[name]).join(" ");
  };
}
