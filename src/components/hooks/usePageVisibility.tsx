import { useRef, useEffect } from 'react';

export type Callback = (isVisible: boolean) => void;

function usePageVisibility(callback: Callback): React.RefObject<HTMLDivElement> {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        callback(entry.isIntersecting);
      });
    if(observer){ /* build complains observer is not used... */ }
    };

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (pageRef.current) observer.unobserve(pageRef.current);
    };
  }, [callback]);

  return pageRef;
}
export default usePageVisibility;
