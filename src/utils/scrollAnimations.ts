/* eslint-disable no-param-reassign, consistent-return */
// Scroll-triggered animations utility
export const initScrollAnimations = () => {
  if (typeof window === 'undefined') return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Optionally unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-reveal class
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  scrollElements.forEach((el) => observer.observe(el));

  // Add staggered delays to grouped elements
  const staggerGroups = document.querySelectorAll('[class*="stagger-"]');
  staggerGroups.forEach((element, index) => {
    const delay = (index % 4) * 0.1; // Reset every 4 items
    (element as HTMLElement).style.animationDelay = `${delay}s`;
  });
};

// Parallax effect for hero elements
export const initParallaxEffects = () => {
  if (typeof window === 'undefined') return;

  const parallaxElements = document.querySelectorAll('.parallax-slow');

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    parallaxElements.forEach((element) => {
      (element as HTMLElement).style.transform = `translateY(${rate}px)`;
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Magnetic hover effect for interactive elements
export const initMagneticHover = () => {
  if (typeof window === 'undefined') return;

  const magneticElements = document.querySelectorAll('.magnetic-hover');

  magneticElements.forEach((element) => {
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (mouseEvent.clientX - centerX) * 0.1;
      const deltaY = (mouseEvent.clientY - centerY) * 0.1;

      (element as HTMLElement).style.transform =
        `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
    };

    const handleMouseLeave = () => {
      (element as HTMLElement).style.transform = 'translate(0px, 0px) scale(1)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
  });
};
