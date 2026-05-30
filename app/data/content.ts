export const navLinks = [
  { href: '#services', label: '服务项目' },
  { href: '#pricing', label: '价格方案' },
  { href: '#gallery', label: '环境展示' },
  { href: '#booking', label: '在线预约' },
];

export const services = [
  {
    icon: '🛁',
    title: '基础洗护',
    price: '¥128',
    desc: '进口洗发水 + 护毛素、耳道清洁、指甲修剪、肛门腺清理、全身按摩',
    features: ['天然进口洗护品', '45分钟精致服务', '毛发状态评估报告'],
    highlight: false,
  },
  {
    icon: '✨',
    title: '精致洗护',
    price: '¥228',
    desc: '含基础洗护全部项目 + 深层SPA水疗、足部护理、腹部清洁、口腔喷雾',
    features: ['深层SPA碳酸水疗', '日本进口营养油', '专属洗护档案'],
    highlight: true,
  },
  {
    icon: '👑',
    title: '尊享 SPA',
    price: '¥388',
    desc: '含精致洗护全部项目 + 毛发修复、精油按摩、造型修剪、专属接送',
    features: ['意大利天然精油SPA', '血统级毛发修复', '市区免费上门接送'],
    highlight: false,
  },
];

export const pricingPlans = [
  {
    name: '基础洗护',
    price: '128',
    per: '/次',
    features: [
      '进口洗护用品',
      '基础清洁套餐',
      '耳道 / 指甲 / 肛门腺',
      '45分钟精致服务',
    ],
    recommended: false,
  },
  {
    name: '精致洗护',
    price: '228',
    per: '/次',
    features: [
      '全部基础项目',
      '碳酸SPA水疗',
      '日本进口营养油护理',
      '宠物洗护档案建立',
    ],
    recommended: true,
  },
  {
    name: '尊享SPA',
    price: '388',
    per: '/次',
    features: [
      '全部精致项目',
      '意大利天然精油SPA',
      '毛发深层修复',
      '市区免费上门接送',
    ],
    recommended: false,
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

export const footerLinks = {
  navigate: [
    { href: '#services', label: '服务项目' },
    { href: '#pricing', label: '价格方案' },
    { href: '#gallery', label: '作品展示' },
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
