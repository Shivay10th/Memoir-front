import { useCallback, useRef } from "react";

type CallBack = (...args: unknown[]) => void | Promise<void>;

type TimerId = ReturnType<typeof setTimeout>;

export const useDebounce = (callback: CallBack, delay: number) => {
  const timerId = useRef<TimerId | null>(null);

  const debounced = useCallback((...args: unknown[]) => {
    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, []);

  return debounced;
};
