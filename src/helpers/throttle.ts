export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => ReturnType<T> | void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let args: Parameters<T> | any[] = [];

  const later = () => {
    timeout = null;
    if (args.length) {
      func(...args);
      args = [];
    }
  };

  return (..._args: Parameters<T>) => {
    args = _args;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
  };
}
