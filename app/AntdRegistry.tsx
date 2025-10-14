"use client";

import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";

// 组件用于在 Next.js SSR 阶段收集并注入 antd 的样式
// 解决 Ant Design 组件在 Next.js 13+ App Router 中的样式闪烁问题
export default function AntdRegistry({ children }: { children: React.ReactNode }) {
  // 创建样式缓存实例，用于收集所有 Ant Design 组件的样式
  // 使用 useMemo 避免每次渲染都重新创建缓存
  const cache = React.useMemo(() => createCache(), []);

  // 在服务器端渲染时，将收集到的样式插入到 HTML 中
  // useServerInsertedHTML 是 Next.js 提供的钩子，确保样式只在服务器端插入一次
  useServerInsertedHTML(() => {
    return (
      <style
        id="antd"
        // 使用 dangerouslySetInnerHTML 将提取的样式注入到页面中
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    );
  });

  // 使用 StyleProvider 包裹子组件，使所有 Ant Design 组件共享同一个样式缓存
  // 这样可以确保组件在客户端和服务器端渲染时样式一致
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
}
