import { redirect } from 'next/navigation';

// 默认首页重定向到/views/home页面
export default function RootPage() {
  // 使用Next.js的redirect函数进行服务器端重定向
  redirect('/views/home');
}