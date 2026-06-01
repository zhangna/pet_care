# 🐾 PawPaw Pet Care（爪爪洗护）项目文档

> 本文档供 AI agent 协作使用，记录项目的技术栈、架构、约定和关键信息。

---

## 开发者信息

- **名字**：技术小张
- **擅长**：Python、Java、TypeScript、Vue、React

---

## 项目概述

宠物洗护服务品牌「爪爪洗护」官网，基于 Next.js 构建的响应式单页应用（SPA）。

- **品牌名**：爪爪洗护 / PawPaw Pet Care
- **定位**：宠物精致洗护中心
- **门店地址**：上海市静安区毛孩子路 88 号
- **营业时间**：周一至周日 9:00 - 20:00
- **联系电话**：400-888-PAWS
- **特点**：纯天然进口洗护用品、进口设备、免费接送（3公里内）、已服务 10,000+ 毛孩子

---

## 技术栈

| 分类 | 技术 | 版本 |
|------|------|------|
| 框架 | Next.js (App Router) | ^14.2.0 |
| UI | React | ^18.3.0 |
| 语言 | TypeScript | ^5.4.0 |
| 样式 | CSS Modules | — |
| 包管理 | npm | — |
| Registry | https://registry.npmjs.org/ | — |

- 使用 Next.js **App Router**（非 Pages Router）
- TypeScript 开启 **strict** 模式
- 路径别名：`@/*` 映射到项目根目录
- JSX 模式：`preserve`（由 Next.js 编译）
- 模块解析：`bundler`

---

## 目录结构

```
pet_care/
├── app/                          # Next.js App Router 应用目录
│   ├── layout.tsx                # 根布局（Metadata、html、body）
│   ├── page.tsx                  # 首页（组装所有 section 组件）
│   ├── globals.css               # 全局样式 + CSS 变量 + 通用类
│   ├── components/               # 页面组件（每个组件 .tsx + .module.css）
│   │   ├── Navbar.tsx            # 固定导航栏（滚动变色、移动端汉堡菜单）
│   │   ├── Hero.tsx              # 首屏（品牌标语 + CTA 按钮）
│   │   ├── Services.tsx          # 服务项目（6 个服务卡片）
│   │   ├── Pricing.tsx           # 价格方案（3 档定价对比）
│   │   ├── Gallery.tsx           # 环境展示（图片轮播）
│   │   ├── Testimonials.tsx      # 用户评价（3 条好评卡片）
│   │   ├── Booking.tsx           # 在线预约表单
│   │   ├── Toast.tsx             # Toast 提示组件（3秒自动消失）
│   │   └── Footer.tsx            # 页面底部（品牌信息 + 链接）
│   └── data/
│       └── content.ts            # 所有内容数据配置
├── public/img/                   # 静态图片（Next.js 通过 /img/ 访问）
│   ├── store-reception.png       # 前台接待区（约 1.9MB）
│   ├── store-grooming.png        # 洗护工作区（约 2.2MB）
│   └── store-lounge.png          # 宠物休息美容区（约 2.3MB）
├── img/                          # 图片副本（非 public 目录，不对外暴露）
│   ├── store-reception.png
│   ├── store-grooming.png
│   └── store-lounge.png
├── next.config.js                # Next.js 配置（当前为空）
├── tsconfig.json                 # TypeScript 配置
├── package.json                  # 项目依赖与脚本
├── .gitignore                    # 忽略 node_modules/、.next/、output/
├── .npmrc                        # npm registry 配置
├── index.html                    # 原始入口（可能是初始模板残留）
└── README.md                     # 项目说明
```

---

## 组件架构 & 数据流

### 页面结构（从上到下）

```
Navbar（固定顶部，无 id）
Hero（无 id，首屏 CTA）
Services（id="services"）
Pricing（id="pricing"）
Gallery（id="gallery"，自动轮播 5 秒）
Testimonials（id="testimonials"）
Booking（id="booking"，含表单 + Toast）
Footer（含导航、支持、社交媒体链接）
```

### 组件分类

- **服务端组件**（默认，无 `'use client'`）：
  - `page.tsx`、`layout.tsx`、`Services.tsx`、`Testimonials.tsx`、`Footer.tsx`

- **客户端组件**（标记 `'use client'`）：
  - `Navbar.tsx` — 滚动监听 + 移动端菜单状态
  - `Hero.tsx` — 按钮点击滚动
  - `Pricing.tsx` — 按钮点击滚动
  - `Gallery.tsx` — 轮播状态 + 定时器
  - `Booking.tsx` — 表单状态 + Toast 控制
  - `Toast.tsx` — 显示/隐藏动画

### 状态管理

项目没有使用全局状态管理库。所有状态都是组件本地状态（useState）：

| 组件 | 状态 |
|------|------|
| Navbar | `scrolled`（滚动超过 50px）、`menuOpen`（移动端菜单） |
| Gallery | `current`（当前轮播索引） |
| Booking | `name`、`phone`、`breed`、`service`、`date`、`time`、`toastShow` |
| Toast | `show`（通过 props 控制，3 秒后自动关闭） |

### 导航方式

- Navbar 链接使用 `<a href="#id">` 锚点跳转
- CTA 按钮使用 `document.getElementById('id')?.scrollIntoView({ behavior: 'smooth' })`
- HTML 根元素已设置 `scroll-behavior: smooth`

### 内容数据

所有业务内容集中在 `app/data/content.ts`，包括：
- `navLinks` — 导航链接
- `services` — 6 个服务项
- `pricingPlans` — 3 个定价方案
- `galleryImages` — 3 张门店图片
- `bookingServices` — 预约可选服务
- `footerLinks` — 页脚链接（导航、支持、社交）

---

## CSS 设计系统

### CSS 变量（定义在 `globals.css` :root）

| 变量 | 值 | 用途 |
|------|-----|------|
| `--primary` | `#7C3AED` | 主色（紫色） |
| `--primary-light` | `#A78BFA` | 浅紫色 |
| `--primary-dark` | `#5B21B6` | 深紫色（hover） |
| `--accent` | `#F59E0B` | 强调色（金色/琥珀） |
| `--accent-light` | `#FCD34D` | 浅金色 |
| `--bg` | `#FAF9FE` | 页面背景 |
| `--card-bg` | `#FFFFFF` | 卡片背景 |
| `--text` | `#1E1B4B` | 主文字色 |
| `--text-muted` | `#6B7280` | 次要文字色 |
| `--border` | `#E5E7EB` | 边框色 |
| `--radius` | `16px` | 大圆角 |
| `--radius-sm` | `10px` | 小圆角 |
| `--shadow` | `0 4px 24px rgba(124, 58, 237, 0.08)` | 默认阴影 |
| `--shadow-lg` | `0 12px 48px rgba(124, 58, 237, 0.12)` | 大阴影 |
| `--transition` | `0.3s cubic-bezier(0.4, 0, 0.2, 1)` | 过渡动画 |

### 全局工具类

| 类名 | 作用 |
|------|------|
| `.container` | 最大宽度 1200px，水平居中 |
| `.section-label` | 章节标签（紫色大写小字） |
| `.section-title` | 章节标题（38px，800 字重） |
| `.section-subtitle` | 章节副标题（灰色文字） |
| `.btn-primary` | 主按钮（紫色填充，圆形） |
| `.btn-outline` | 次按钮（紫色边框，透明背景） |

### 字体

`-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif`

### 响应式断点

- `@media (max-width: 1024px)` — Booking 组件左右布局变上下
- `@media (max-width: 768px)` — 通用：grid 变单列、字体缩小、汉堡菜单出现
- `@media (max-width: 480px)` — Footer grid 变单列

---

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器（http://localhost:3000）
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint
```

---

## 关键约定

1. **每个组件一个目录**：`app/components/` 下每个组件有 `.tsx` + `.module.css` 两个文件
2. **CSS Modules** 命名：`组件名.module.css`
3. **所有内容数据放** `app/data/content.ts`，通过 `@/app/data/content` 导入
4. **动画用 CSS**：关键帧动画（如 Hero 的 float）+ CSS transition
5. **图片路径**：轮播图使用 `/img/xxx.png`（从 `public/img/` 提供）
6. **表单验证**：仅前端基础校验（称呼和手机号非空），无后端接口
7. **品牌文案**：统一使用「毛孩子」称呼宠物、「铲屎官」称呼主人
8. **HTML lang**：设置为 `zh-CN`
