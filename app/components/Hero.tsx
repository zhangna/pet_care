'use client';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroText}>
          <span className={styles.heroBadge}>🐶 已服务 10,000+ 毛孩子</span>
          <h1>给毛孩子的<br /><span className={styles.highlight}>专属SPA体验</span></h1>
          <p>专业宠物洗护，纯天然洗护用品，温柔对待每一只小可爱。让毛孩子享受被宠爱的感觉。</p>
          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary} onClick={scrollToBooking}>马上预约 ✨</button>
            <button className={styles.btnOutline} onClick={scrollToServices}>了解服务</button>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroIllustration}>🛁</div>
        </div>
      </div>
    </section>
  );
}
