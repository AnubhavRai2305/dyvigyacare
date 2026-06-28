import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches sr-hidden / sr-visible classes to children
 * of the returned ref, triggering CSS entrance animations on scroll.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <div ref={ref}><p className="sr-hidden">...</p></div>
 */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll('.sr-hidden');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
};

export default useScrollReveal;
