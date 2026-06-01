'use client';
import { pricingPlans } from '@/app/data/content';
import styles from './Pricing.module.css';

export default function Pricing() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className="section-label">PRICING</div>
        <h2 className="section-title">透明定价 · 随心选择</h2>
        <p className="section-subtitle">所有方案均使用进口天然洗护产品，无刺激、无泪配方。</p>
        <div className={styles.grid}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
            >
              <h3>{plan.icon} {plan.title}</h3>
              <p className={styles.cardSubtitle}>{plan.subtitle}</p>
              <div className={styles.price}><small>¥</small>{plan.price}</div>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                className={plan.featured ? 'btn-primary' : 'btn-outline'}
                style={{ display: 'block', textAlign: 'center', width: '100%' }}
                onClick={scrollToBooking}
              >
                选这个
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
