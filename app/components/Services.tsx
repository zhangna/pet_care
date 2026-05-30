import styles from './Services.module.css';

const services = [
  { icon: '🛁', title: '基础清洁', desc: '温和沐浴、耳道清洁、眼部护理、指甲修剪、肛门腺清理，全面基础护理。' },
  { icon: '✨', title: '精致SPA', desc: '深层清洁+护毛素滋养、精油按摩放松、毛发蓬松造型，给毛孩子奢享体验。' },
  { icon: '✂️', title: '美容造型', desc: '专业宠物造型师设计、根据品种标准修剪，让毛孩子靓丽出街回头率满分。' },
  { icon: '🦷', title: '口腔护理', desc: '超声波洁牙、口腔检查、去除牙结石，守护毛孩子口腔健康清新口气。' },
  { icon: '🧴', title: '皮肤护理', desc: '针对敏感肌、皮屑、瘙痒问题，使用药用级洗护产品进行专项调理。' },
  { icon: '🚗', title: '上门接送', desc: '3公里内免费接送，让毛孩子足不出户享受专业洗护，铲屎官更省心。' },
];

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
