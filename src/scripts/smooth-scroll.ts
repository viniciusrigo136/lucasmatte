import Lenis from 'lenis';

/**
 * Rolagem suave com Lenis. Desligada para movimento reduzido e em telas de toque
 * (onde a rolagem nativa já é a melhor experiência).
 */
export function initSmoothScroll() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  if (reduce || coarse) return;

  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    anchors: { offset: -64 },
  });

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  // Menu e lightbox travam a rolagem enquanto abertos.
  window.addEventListener('lm:lock', () => lenis.stop());
  window.addEventListener('lm:unlock', () => lenis.start());
  document.documentElement.classList.add('lenis');
}
