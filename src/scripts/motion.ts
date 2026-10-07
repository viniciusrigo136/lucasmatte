import { animate } from 'motion/mini';
import { inView, scroll } from 'motion';

/**
 * Sistema de movimento do site. Tudo é declarado por atributos no HTML:
 *   [data-reveal]        bloco sobe e aparece
 *   [data-reveal-lines]  linhas (.line > .line__inner) sobem de dentro da máscara
 *   [data-reveal-line]   linha fina se desenha da esquerda (scaleX 0 → 1)
 *   [data-reveal-img]    máscara abre de baixo para cima e a foto assenta (1.08 → 1)
 *   [data-words]         frase acende palavra por palavra com a rolagem
 *   [data-drift="n"]     leve parallax vertical (n% do próprio tamanho)
 *   [data-marquee]       texto gigante atravessa o fundo
 * Tempos: rápido 0.3s, normal 0.6s, lento 1s+ — sempre com a mesma curva.
 */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function initMotion() {
  (window as unknown as { __lmMotion: boolean }).__lmMotion = true;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  const small = window.matchMedia('(max-width: 63.99rem)').matches;

  inView(
    '[data-reveal]',
    (el) => {
      const delay = Number((el as HTMLElement).dataset.delay ?? 0);
      animate(el, { opacity: [0, 1], transform: ['translateY(24px)', 'translateY(0px)'] }, { duration: 1, delay, ease: EASE });
    },
    { amount: 0.2 },
  );

  inView(
    '[data-reveal-lines]',
    (el) => {
      const lines = el.querySelectorAll('.line__inner');
      const delay = Number((el as HTMLElement).dataset.delay ?? 0);
      lines.forEach((line, i) => {
        animate(line, { transform: ['translateY(110%)', 'translateY(0%)'] }, { duration: 1.1, delay: delay + i * 0.08, ease: EASE });
      });
    },
    { amount: 0.35 },
  );

  inView(
    '[data-reveal-line]',
    (el) => {
      const delay = Number((el as HTMLElement).dataset.delay ?? 0);
      animate(el, { transform: ['scaleX(0)', 'scaleX(1)'] }, { duration: 1.3, delay, ease: EASE });
    },
    { amount: 0.5 },
  );

  inView(
    '[data-reveal-img]',
    (el) => {
      const inner = el.firstElementChild;
      animate(el, { clipPath: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'] }, { duration: small ? 1.1 : 1.35, ease: EASE });
      if (inner) animate(inner, { transform: ['scale(1.08)', 'scale(1)'] }, { duration: small ? 1.4 : 1.8, ease: EASE });
    },
    { amount: 0.12 },
  );

  // Hero: foto desce até 8vh e amplia 4%; o texto sobe 3vh; a cena escurece enquanto
  // a próxima seção cobre a hero. No celular, metade da intensidade.
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (hero) {
    const img = hero.querySelector<HTMLElement>('[data-parallax="img"]');
    const text = hero.querySelector<HTMLElement>('[data-parallax="text"]');
    const k = small ? 0.5 : 1;
    scroll(
      (p: number) => {
        if (img) img.style.transform = `translate3d(0, ${p * 8 * k}vh, 0) scale(${1 + p * 0.04 * k})`;
        if (text) {
          text.style.transform = `translate3d(0, ${p * -3 * k}vh, 0)`;
          text.style.opacity = String(1 - Math.min(1, p * 1.6));
        }
        hero.style.setProperty('--dim', String(Math.min(1, p * 1.2)));
      },
      { target: hero, offset: ['start start', 'end start'] },
    );
  }

  document.querySelectorAll<HTMLElement>('[data-marquee]').forEach((el) => {
    const track = el.querySelector<HTMLElement>('[data-marquee-track]');
    if (!track) return;
    scroll(
      (p: number) => {
        track.style.transform = `translate3d(${(0.12 - p * 0.42) * 100}%, 0, 0)`;
      },
      { target: el, offset: ['start end', 'end start'] },
    );
  });

  document.querySelectorAll<HTMLElement>('[data-words]').forEach((el) => {
    const words = Array.from(el.querySelectorAll<HTMLElement>('.word'));
    scroll(
      (p: number) => {
        const lit = p * (words.length + 2);
        words.forEach((w, i) => {
          const v = Math.max(0, Math.min(1, lit - i));
          w.style.opacity = String(0.15 + v * 0.85);
          w.style.transform = `translateY(${(1 - v) * 12}px)`;
        });
      },
      { target: el, offset: ['start 88%', 'end 50%'] },
    );
  });

  document.querySelectorAll<HTMLElement>('[data-drift]').forEach((el) => {
    const amount = Number(el.dataset.drift || 6) * (small ? 0.5 : 1);
    scroll(
      (p: number) => {
        el.style.transform = `translate3d(0, ${(0.5 - p) * amount}%, 0)`;
      },
      { target: el, offset: ['start end', 'end start'] },
    );
  });
}

/** Cursor contextual que segue o mouse com atraso suave (apenas mouse). */
export function initCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cursor = document.createElement('div');
  cursor.className = 'view-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cursor);

  let tx = 0;
  let ty = 0;
  let x = 0;
  let y = 0;
  let running = false;
  const tick = () => {
    const f = reduce ? 1 : 0.18;
    x += (tx - x) * f;
    y += (ty - y) * f;
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    if (Math.abs(tx - x) > 0.1 || Math.abs(ty - y) > 0.1) requestAnimationFrame(tick);
    else running = false;
  };
  document.addEventListener('pointermove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    if (!cursor.classList.contains('is-on')) {
      x = tx;
      y = ty;
    }
    if (!running) {
      running = true;
      requestAnimationFrame(tick);
    }
  });

  document.addEventListener('pointerover', (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor]');
    if (el) {
      cursor.textContent = el.dataset.cursor || 'Ver projeto';
      cursor.classList.add('is-on');
    }
  });
  document.addEventListener('pointerout', (e) => {
    const from = (e.target as HTMLElement).closest('[data-cursor]');
    const to = (e.relatedTarget as HTMLElement | null)?.closest?.('[data-cursor]');
    if (from && from !== to) cursor.classList.remove('is-on');
  });
}
