'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './Gallery.module.css';

const slides = [
  {
    src: '/img/store-reception.png',
    alt: '前台接待区',
    title: '🏠 前台接待区',
    desc: '明亮宽敞的大理石大厅，温馨暖光迎接每一位毛孩子',
  },
  {
    src: '/img/store-grooming.png',
    alt: '洗护工作区',
    title: '🛁 专业洗护区',
    desc: '不锈钢洗护槽、进口设备，透明玻璃分区一目了然',
  },
  {
    src: '/img/store-lounge.png',
    alt: '宠物休息美容区',
    title: '💆 休息美容区',
    desc: '舒适软垫、暖色柔光，毛孩子放松享受的专属空间',
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="gallery">
      <div className="container">
        <div className="section-label">ENVIRONMENT</div>
        <h2 className="section-title">高端店内环境 · 安心看得见</h2>
        <p className="section-subtitle">中国高端宠物洗护标准，干净、专业、温馨，给毛孩子最好的体验。</p>
        <div className={styles.carousel}>
          <div
            className={styles.slides}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.src} className={styles.slide}>
                <img src={slide.src} alt={slide.alt} loading="lazy" />
                <div className={styles.caption}>
                  <h3>{slide.title}</h3>
                  <p>{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className={`${styles.btn} ${styles.prev}`} onClick={prev} aria-label="上一张">❮</button>
          <button className={`${styles.btn} ${styles.next}`} onClick={next} aria-label="下一张">❯</button>
          <div className={styles.dots}>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.active : ''}`}
                onClick={() => goTo(i)}
                aria-label={`第${i + 1}张`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
