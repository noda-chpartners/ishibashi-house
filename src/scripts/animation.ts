import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// モバイルのアドレスバー伸縮による再計算でレイアウトが揺れるのを防ぐ
ScrollTrigger.config({ ignoreMobileResize: true });

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

const isNarrowViewport = window.matchMedia('(max-width: 768px)').matches;

// スクロールで下から現れる共通の表示アニメーション
function revealOnScroll(
  targets: gsap.TweenTarget,
  options: { trigger?: Element | string; stagger?: number; y?: number; duration?: number } = {},
) {
  const { trigger, stagger = 0, y = 28, duration = 0.7 } = options;
  const elements = gsap.utils.toArray<HTMLElement>(targets);
  if (!elements.length) return;

  gsap.from(elements, {
    autoAlpha: 0,
    y,
    duration,
    ease: 'power2.out',
    stagger,
    scrollTrigger: {
      trigger: trigger ?? elements[0],
      start: 'top 85%',
      once: true,
    },
  });
}

function initAnimations() {
  // アニメーションを好まないユーザーには一切動きを付けない（初期状態も触らないので全要素は通常表示のまま）
  if (prefersReducedMotion) return;

  // ヒーローのキャッチコピー：読み込み時に下から順番に表示
  const heroLines = gsap.utils.toArray<HTMLElement>('.hero-copy-line');
  if (heroLines.length) {
    gsap.from(heroLines, {
      autoAlpha: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
      delay: 0.2,
    });
  }

  // 各セクションの縦書きタイトル
  gsap.utils.toArray<HTMLElement>('.section-title').forEach((title) => {
    gsap.from(title, {
      autoAlpha: 0,
      y: 30,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // 当店について：本文を順番に表示
  revealOnScroll('#about .text', { trigger: '#about .content', stagger: 0.12, y: 24 });

  // 人気メニュー：PCは左右から、スマホ・タブレットは下から（横スライドによる横スクロールを防ぐ）
  gsap.utils.toArray<HTMLElement>('.menu-item').forEach((item) => {
    const rank = Number(item.dataset.rank ?? 0);
    const fromLeft = rank % 2 === 1;
    gsap.from(item, {
      autoAlpha: 0,
      ...(isNarrowViewport
        ? { y: 40 }
        : { x: fromLeft ? -60 : 60 }),
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 82%',
        once: true,
      },
    });
  });

  // 店舗情報：各行を順番に表示
  revealOnScroll('#info .info-row', { trigger: '#info .content', stagger: 0.08, y: 20, duration: 0.6 });

  // アクセス：地図
  revealOnScroll('.map-wrap', { y: 30, duration: 0.8 });

  // お問い合わせ：リード文と電話ボタン
  revealOnScroll('#contact .lead, #contact .tel-button', {
    trigger: '#contact .content',
    stagger: 0.15,
    y: 24,
  });
}

initAnimations();

// 画像・フォントの読み込み完了後にトリガー位置を再計算してズレを防ぐ
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});
