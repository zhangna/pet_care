import styles from './Testimonials.module.css';

const testimonials = [
  {
    stars: '⭐⭐⭐⭐⭐',
    quote: '我家布偶每次洗完都跟新猫一样！毛又顺又亮，香喷喷的能保持一周多。美容师超级温柔，猫咪一点都不抗拒。',
    avatar: '😺',
    avatarBg: '#EDE9FE',
    name: '布偶妈',
    pet: '布偶猫 · 团子',
  },
  {
    stars: '⭐⭐⭐⭐⭐',
    quote: '柴犬掉毛太严重了，来这做了深层清洁和除毛处理后，在家明显少掉毛！环境也很干净，以后定点来。',
    avatar: '🐕',
    avatarBg: '#FEF3C7',
    name: '柴爸阿强',
    pet: '柴犬 · 豆豆',
  },
  {
    stars: '⭐⭐⭐⭐⭐',
    quote: '上门接送太方便了！周末睡个懒觉的功夫，比熊就洗完送回来了，还扎了个小蝴蝶结，可爱到爆！',
    avatar: '🐶',
    avatarBg: '#DBEAFE',
    name: '比熊姐姐',
    pet: '比熊 · 棉花糖',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-label">TESTIMONIALS</div>
        <h2 className="section-title">铲屎官们的真实评价</h2>
        <p className="section-subtitle">口碑是最好的广告，感谢每一位信任我们的铲屎官。</p>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>{t.stars}</div>
              <p>"{t.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: t.avatarBg }}>{t.avatar}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorPet}>{t.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
