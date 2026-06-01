export const navLinks = [
  { href: '#services', label: '服务项目' },
  { href: '#pricing', label: '价格方案' },
  { href: '#gallery', label: '环境展示' },
  { href: '#store-map', label: '门店地图' },
  { href: '#booking', label: '在线预约' },
];

export const services = [
  { icon: '🛁', title: '基础清洁', desc: '温和沐浴、耳道清洁、眼部护理、指甲修剪、肛门腺清理，全面基础护理。' },
  { icon: '✨', title: '精致SPA', desc: '深层清洁+护毛素滋养、精油按摩放松、毛发蓬松造型，给毛孩子奢享体验。' },
  { icon: '✂️', title: '美容造型', desc: '专业宠物造型师设计、根据品种标准修剪，让毛孩子靓丽出街回头率满分。' },
  { icon: '🦷', title: '口腔护理', desc: '超声波洁牙、口腔检查、去除牙结石，守护毛孩子口腔健康清新口气。' },
  { icon: '🧴', title: '皮肤护理', desc: '针对敏感肌、皮屑、瘙痒问题，使用药用级洗护产品进行专项调理。' },
  { icon: '🚗', title: '上门接送', desc: '3公里内免费接送，让毛孩子足不出户享受专业洗护，铲屎官更省心。' },
];

export const pricingPlans = [
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

export const galleryImages = [
  { src: '/img/store-reception.png', alt: '前台接待区' },
  { src: '/img/store-grooming.png', alt: '洗护工作区' },
  { src: '/img/store-lounge.png', alt: '宠物休息美容区' },
];

export const bookingServices = [
  { value: 'basic', label: '🛁 基础洗护 ¥128' },
  { value: 'spa', label: '✨ 精致SPA ¥228' },
  { value: 'premium', label: '👑 尊享全套 ¥388' },
];

export const storeInfo = {
  address: '上海市静安区南京西路1688号1楼L109',
  phone: '021-8888-6666',
  hours: '周一至周日 10:00 - 21:00',
  coords: { lng: 121.4547, lat: 31.2304 },
  mapUrl: 'https://uri.amap.com/marker?position=121.4547,31.2304&name=爪爪洗护',
};

export const footerLinks = {
  navigate: [
    { href: '#services', label: '服务项目' },
    { href: '#pricing', label: '价格方案' },
    { href: '#gallery', label: '作品展示' },
    { href: '#store-map', label: '门店地图' },
    { href: '#booking', label: '在线预约' },
  ],
  support: [
    { href: '#', label: '常见问题' },
    { href: '#', label: '会员制度' },
    { href: '#', label: '接送范围' },
    { href: '#', label: '联系客服' },
  ],
  social: [
    { href: '#', label: '📱 微信公众号' },
    { href: '#', label: '📕 小红书' },
    { href: '#', label: '🎵 抖音' },
  ],
};
