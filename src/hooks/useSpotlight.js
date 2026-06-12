import { useRef, useEffect } from 'react';

export default function useSpotlight() {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      elementRef.current.style.setProperty('--mouse-x', `${x}px`);
      elementRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const element = elementRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return elementRef;
}
