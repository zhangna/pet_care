'use client';
import styles from './Pricing.module.css';

const plans = [
  {
    icon: '🛁',
    title: '基础洗护',
    subtitle: '日常清洁首选',
    price: '128',
    features: ['基础沐浴清洁', '耳道 & 眼部护理', '指甲修剪', '肛门腺清理', '毛发吹干梳理'],
    featured: false,
  },
  {
    icon: '✨',
    title: '精致SPA',
    subtitle: '深度护理热门',
    price: '228',
    features: ['包含基础洗护全部', '深层护毛素滋养', '精油按摩放松', '造型修剪', '专属香氛喷雾'],
    featured: true,
  },
  {
    icon: '👑',
    title: '尊享全套',
    subtitle: '一劳永逸之选',
    price: '388',
    features: ['包含精致SPA全部', '口腔洁牙护理', '皮肤专项检测', '一次免费接送', '下次消费9折券'],
    featured: false,
  },
];

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
          {plans.map((plan) => (
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
