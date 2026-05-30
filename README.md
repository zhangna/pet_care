# 🐾 PawPaw Pet Care

宠物洗护服务品牌官网，基于 Next.js 构建的响应式单页应用。

## 功能模块

- **品牌展示** — Hero 首屏 + 导航栏
- **服务项目** — 基础洗护 / 精致洗护 / 尊享 SPA
- **价格方案** — 三档定价对比
- **环境展示** — 门店实景图片画廊
- **用户评价** — 客户好评轮播
- **在线预约** — 预约表单提交
- **Toast 提示** — 操作反馈弹窗

## 技术栈

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

## 构建部署

```bash
npm run build
npm run start
```

## 项目结构

```
├── app/
│   ├── components/     # 页面组件 + CSS Modules
│   ├── data/           # 内容数据配置
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局
│   └── page.tsx        # 首页
├── public/img/         # 静态图片资源
├── img/                # 门店实景图
└── index.html          # 入口 HTML
```
