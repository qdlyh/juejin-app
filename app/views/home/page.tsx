'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Header from '@/app/components/header';
import dynamic from 'next/dynamic';
// import EditorApp from '@/app/components/tinymceEditor';
import LogoSrc from '../../assets/logo/logo.png';
// ⛔ 让 TinyMCE 编辑器只在客户端加载
const EditorApp = dynamic(() => import('@/app/components/tinymceEditor'), {
  ssr: false,
});

export default function Home() {

  return (
    <div className="w-100p h-100p">
      <Header />
      <div className="app-container d-f-c  scrollbar-mini-Y">
        <div className="w-720 mt-24">
          <div className="w-100p">
            <EditorApp></EditorApp>
          </div>
          <div className="w-100p">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div className="bg-col-1 mb-14 p-20">
                <div key={item} className="d-f">
                  <Image
                    src={LogoSrc}
                    alt="Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <div className="mt-8 ml-12">
                    <div>张三</div>
                    <div className="col-3 mt-4 mb-12">20分钟前</div>
                    <div>十大十大</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
