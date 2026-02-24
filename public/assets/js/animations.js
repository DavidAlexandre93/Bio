import { animate, hover, inView, scroll } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);
}

const hero = document.querySelector(".hero");
const profile = document.querySelector(".profile");
const heroTitle = document.querySelector(".hero-title");
const heroTag = document.querySelector(".hero-tag");
const sceneGlow = document.querySelector(".scene-glow");
const cards = document.querySelectorAll(".link-card");

animate(hero, { opacity: [0, 1] }, { duration: 1.1, easing: "ease-out" });
animate(profile, { y: [-16, 0], opacity: [0, 1] }, { duration: 0.8, delay: 0.2 });
animate(heroTitle, { y: [18, 0], opacity: [0, 1] }, { duration: 0.85, delay: 0.3 });
animate(heroTag, { y: [20, 0], opacity: [0, 1] }, { duration: 0.95, delay: 0.45 });
animate(profile, { boxShadow: ["0 0 0 rgba(146, 61, 255, 0.15)", "0 0 28px rgba(146, 61, 255, 0.65)", "0 0 0 rgba(146, 61, 255, 0.2)"] }, { duration: 3.2, repeat: Infinity, easing: "ease-in-out" });

cards.forEach((card, index) => {
  inView(card, () => {
    animate(card, { opacity: [0, 1], y: [36, 0], scale: [0.97, 1] }, { duration: 0.65, delay: index * 0.06 });
  }, { margin: "-8%" });

  hover(card, () => {
    animate(card, { scale: 1.03 }, { duration: 0.2, easing: "ease-out" });
    animate(card.querySelector("img"), { rotate: [0, -8, 8, 0], scale: [1, 1.15, 1] }, { duration: 0.6 });
    animate(card, { backgroundPosition: ["0% 50%", "100% 50%"] }, { duration: 1 });

    return () => {
      animate(card, { scale: 1 }, { duration: 0.2 });
    };
  });

  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    animate(card, { rotateX: y * -9, rotateY: x * 14 }, { duration: 0.35, easing: "ease-out" });
  });

  card.addEventListener("pointerleave", () => {
    animate(card, { rotateX: 0, rotateY: 0 }, { duration: 0.5, easing: "ease-out" });
  });
});

if (window.gsap) {
  gsap.from(".support", {
    scrollTrigger: {
      trigger: ".support",
      start: "top 82%"
    },
    opacity: 0,
    y: 26,
    duration: 1,
    ease: "power2.out"
  });

  gsap.to(".scene-glow", {
    backgroundPosition: "120% 10%, -20% 90%",
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".hero-title", {
    textShadow: "0 0 16px rgba(154, 114, 255, 0.45)",
    duration: 2.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

scroll(animate(".scene-glow", { opacity: [1, 0.65] }));
