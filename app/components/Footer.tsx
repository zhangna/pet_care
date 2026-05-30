import { footerLinks } from '@/app/data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <h3>🐾 爪爪洗护</h3>
          <p>专注宠物精致洗护，让每一只毛孩子都被温柔以待。纯天然进口洗护用品，经验丰富的洗护师团队。</p>
        </div>
        <div>
          <h4>快速导航</h4>
          <ul>
            {footerLinks.navigate.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>服务支持</h4>
          <ul>
            {footerLinks.support.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>关注我们</h4>
          <ul>
            {footerLinks.social.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; 2026 爪爪洗护 PawPaw Pet Care · 用心服务每一只毛孩子 🐾
      </div>
    </footer>
  );
}
