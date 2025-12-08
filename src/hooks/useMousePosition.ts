import { useState, useEffect, RefObject } from 'react';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
  isInside: boolean;
}

export const useMousePosition = (ref?: RefObject<HTMLElement>): MousePosition => {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0.5,
    normalizedY: 0.5,
    isInside: false,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const isInside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

        setPosition({
          x,
          y,
          normalizedX: x / rect.width,
          normalizedY: y / rect.height,
          isInside,
        });
      } else {
        setPosition({
          x: e.clientX,
          y: e.clientY,
          normalizedX: e.clientX / window.innerWidth,
          normalizedY: e.clientY / window.innerHeight,
          isInside: true,
        });
      }
    };

    const handleMouseLeave = () => {
      setPosition((prev) => ({
        ...prev,
        normalizedX: 0.5,
        normalizedY: 0.5,
        isInside: false,
      }));
    };

    const element = ref?.current || window;
    element.addEventListener('mousemove', handleMouseMove as EventListener);
    
    if (ref?.current) {
      ref.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      element.removeEventListener('mousemove', handleMouseMove as EventListener);
      if (ref?.current) {
        ref.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [ref]);

  return position;
};

export default useMousePosition;
