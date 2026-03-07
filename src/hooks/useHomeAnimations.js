import { useEffect } from 'react';
import { animate, inView, scroll } from 'motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useHomeAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cards = document.querySelectorAll('.link-card');
    const cleanupCallbacks = [];

    cards.forEach((card, index) => {
      const stopInView = inView(
        card,
        () => {
          animate(
            card,
            { opacity: [0.45, 1], y: [18, 0], filter: ['blur(5px)', 'blur(0px)'] },
            { duration: 0.55, delay: index * 0.03, easing: 'ease-out' }
          );
        },
        { margin: '-6%' }
      );

      const heading = card.querySelector('h3');

      const handleHoverStart = () => {
        if (!heading || prefersReducedMotion) {
          return;
        }

        animate(heading, { y: [0, -1.5, 0] }, { duration: 0.35 });
      };

      const handleHoverEnd = () => {
        if (!heading || prefersReducedMotion) {
          return;
        }

        animate(heading, { y: 0 }, { duration: 0.2 });
      };

      const handleMove = (event) => {
        if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) {
          return;
        }

        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;

        card.style.setProperty('--spotlight-x', `${(x + 0.5) * 100}%`);
        card.style.setProperty('--spotlight-y', `${(y + 0.5) * 100}%`);

        animate(card, { rotateX: y * -8, rotateY: x * 10 }, { duration: 0.3, easing: 'ease-out' });
      };

      const handleLeave = () => {
        animate(card, { rotateX: 0, rotateY: 0 }, { duration: 0.45, easing: 'ease-out' });
      };

      card.addEventListener('pointermove', handleMove);
      card.addEventListener('pointerleave', handleLeave);
      card.addEventListener('pointerenter', handleHoverStart);
      card.addEventListener('pointerleave', handleHoverEnd);

      cleanupCallbacks.push(() => {
        stopInView();
        card.removeEventListener('pointermove', handleMove);
        card.removeEventListener('pointerleave', handleLeave);
        card.removeEventListener('pointerenter', handleHoverStart);
        card.removeEventListener('pointerleave', handleHoverEnd);
      });
    });

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline();

      heroTimeline
        .fromTo('.hero', { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out' })
        .fromTo('.profile', { y: -16, scale: 0.92 }, { y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.7)' }, '-=0.4')
        .fromTo('.hero-title', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out' }, '-=0.45')
        .fromTo('.hero-tag', { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out' }, '-=0.4')
        .fromTo('.hero-role', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out' }, '-=0.45')
        .fromTo('.hero-cv-buttons', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.4');

      if (!prefersReducedMotion) {
        gsap.to('.profile', {
          y: '+=8',
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });

        gsap.to('.hero-scratt', {
          yPercent: -2,
          xPercent: 2,
          rotate: -5,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      gsap.utils.toArray('.links-group').forEach((section) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top 78%'
            }
          })
          .fromTo(section.querySelector('.section-title'), { x: -24, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, ease: 'power2.out' })
          .fromTo(
            section.querySelector('.section-description'),
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' },
            '-=0.2'
          )
          .fromTo(
            section.querySelectorAll('.link-card'),
            { y: 34, opacity: 0, scale: 0.96 },
            { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.08, ease: 'power2.out' },
            '-=0.1'
          );
      });

      gsap.fromTo(
        '.support',
        { opacity: 0, y: 30, scale: 0.96 },
        {
          scrollTrigger: {
            trigger: '.support',
            start: 'top 82%'
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: 'power2.out'
        }
      );

      gsap.to('.scene-glow', {
        backgroundPosition: '120% 10%, -20% 90%',
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.scene-grid', {
        backgroundPosition: '0 180px, 180px 0',
        duration: 14,
        repeat: -1,
        ease: 'none'
      });

      gsap.to('.hero-title', {
        textShadow: '0 0 18px rgba(154, 114, 255, 0.45)',
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.hero-tag', {
        backgroundPosition: '200% center',
        duration: 3.8,
        repeat: -1,
        ease: 'none'
      });

      if (!prefersReducedMotion) {
        gsap.to('.hero', {
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          },
          yPercent: -8,
          scale: 0.98,
          opacity: 0.75
        });
      }
    });

    const scrollAnimation = scroll(
      ({ y }) => {
        const progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) {
          return;
        }

        progressBar.style.setProperty('--scroll-progress', `${Math.min(Math.max(y.progress, 0), 1)}`);
      },
      { target: document.documentElement }
    );

    return () => {
      cleanupCallbacks.forEach((callback) => callback());
      context.revert();
      scrollAnimation();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
