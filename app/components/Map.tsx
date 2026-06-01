import { storeInfo } from '@/app/data/content';
import styles from './Map.module.css';

export default function Map() {
  return (
    <section id="store-map" className={styles.mapSection}>
      <div className="container">
        <div className="section-label">LOCATION</div>
        <h2 className="section-title">📍 门店地图 · 轻松找到我们</h2>
        <p className="section-subtitle">
          位于静安寺商圈核心地段，交通便利，地铁2号线/7号线直达。
        </p>

        <div className={styles.mapGrid}>
          <div className={styles.infoCard}>
            <h3>🐾 爪爪洗护 · 静安旗舰店</h3>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <p>
                  <span className={styles.infoLabel}>门店地址</span>
                  {storeInfo.address}
                </p>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📞</span>
                <p>
                  <span className={styles.infoLabel}>联系电话</span>
                  {storeInfo.phone}
                </p>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🕐</span>
                <p>
                  <span className={styles.infoLabel}>营业时间</span>
                  {storeInfo.hours}
                </p>
              </div>
            </div>
            <div className={styles.note}>
              🚗 本店提供市区免费接送服务，提前预约即可。
            </div>
          </div>

          <div>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://uri.amap.com/marker?position=121.4547,31.2304&name=%E7%88%AA%E7%88%AA%E6%B4%97%E6%8A%A4"
                title="门店地图"
                loading="lazy"
              />
            </div>
            <a
              href={storeInfo.mapUrl}
              className={styles.openMapBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              在手机地图中打开 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
