import React, { useEffect, useRef } from 'react';
import './fadein.css'; // Import your CSS

// Correct typing for children prop
interface FadeInComponentProps {
  children: React.ReactNode;  // This allows any valid React content as children
}

const FadeInComponent: React.FC<FadeInComponentProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target); // Stop observing once it's in view
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold if necessary
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="fade-in">
      {children}
    </div>
  );
};

export default FadeInComponent;
