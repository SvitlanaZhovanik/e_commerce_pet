export function debounce<F extends (...args: unknown[]) => unknown>(
  fn: F,
  delay: number,
): (...args: Parameters<F>) => void {
  let timeoutID: number;
  return function (...args: Parameters<F>) {
    window.clearTimeout(timeoutID);
    timeoutID = window.setTimeout(() => fn(...args), delay);
  };
}
