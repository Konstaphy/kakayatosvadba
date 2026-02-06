import { useEffect, useRef, useState, type RefObject } from "react";

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

interface UseIntersectionObserverReturn<T extends HTMLElement> {
  ref: RefObject<T | null>;
  isIntersecting: boolean;
  entry?: IntersectionObserverEntry;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionObserverOptions = {},
): UseIntersectionObserverReturn<T> {
  const {
    root = null,
    rootMargin = "0px",
    threshold = 0,
    triggerOnce = true,
  } = options;

  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);

        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(element);
        }
      },
      { root, rootMargin, threshold },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return { ref, isIntersecting, entry };
}
