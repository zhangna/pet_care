import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '爪爪洗护 - 宠物精致洗护中心',
  description: '专注宠物精致洗护，让每一只毛孩子都被温柔以待。纯天然进口洗护用品，经验丰富的洗护师团队。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
