'use client';
import React from 'react';
// 导入修复后的原始BraftEditor组件
import EditorApp from '../../components/braftEditor';

export default function OriginalEditorTestPage() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>修复后的原始BraftEditor组件测试</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        <EditorApp />
      </div>
      <p style={{ marginTop: '20px', color: '#666' }}>
        此页面用于测试修复后的原始BraftEditor组件。如果编辑器能正常显示且没有报错，则说明问题已解决。
      </p>
    </div>
  );
}