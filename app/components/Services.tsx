import { services } from '@/app/data/content';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-label">OUR SERVICES</div>
        <h2 className="section-title">精致洗护 · 由内到外</h2>
        <p className="section-subtitle">根据毛孩子的品种、毛发特性定制专属洗护方案，让每一次洗澡都成为享受。</p>
        <div className={styles.grid}>
          {services.map((svc) => (
            <div key={svc.title} className={styles.card}>
              <span className={styles.icon}>{svc.icon}</span>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
