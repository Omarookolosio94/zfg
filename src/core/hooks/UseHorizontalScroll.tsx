import { useEffect, useRef, RefObject } from "react";

export const useHorizontalScroll = (
  scrollSpeed: number = 1, // Default slower speed
): RefObject<HTMLDivElement> => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false); // Track whether scrolling is paused

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    let direction = 1; // 1 for forward, -1 for backward

    const scroll = () => {
      if (!isPaused.current) {
        scrollPosition += scrollSpeed * direction;

        // Reverse direction if reaching the edges
        if (scrollPosition >= container.scrollWidth - container.clientWidth) {
          direction = -1; // Change direction to backward
        } else if (scrollPosition <= 0) {
          direction = 1; // Change direction to forward
        }

        container.scrollLeft = scrollPosition;
      }
      requestAnimationFrame(scroll);
    };

    const scrollAnimation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(scrollAnimation);
  }, [scrollSpeed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Pause scrolling on mouse over
    const handleMouseOver = () => {
      isPaused.current = true;
    };

    // Resume scrolling on mouse out
    const handleMouseOut = () => {
      isPaused.current = false;
    };

    container.addEventListener("mouseover", handleMouseOver);
    container.addEventListener("mouseout", handleMouseOut);

    return () => {
      container.removeEventListener("mouseover", handleMouseOver);
      container.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return containerRef;
};
