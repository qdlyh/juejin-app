'use client';
import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button, message, Space } from 'antd';

const TinyMceEditor: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const editorRef = useRef<any>(null);

  const handleEditorChange = (newContent: string | null) => {
    if (newContent) {
      setContent(newContent);
    }
  };

  const handleSave = () => {
    // 模拟保存操作
    message.success('内容已保存');
    console.log('保存的内容:', content);
  };

  const handleClear = () => {
    // 在TinyMCE React中，正确的清空内容方式是直接更新state
    setContent('');
  };

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>TinyMCE 富文本编辑器 Demo</h2>

      <div style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '14px' }}>
        <Editor
          ref={editorRef}
          apiKey="lu6o1jx50wbe1f2uoczdgnnehwarm8ri4bh3tfopb6uzugof"
          value={content}
          onEditorChange={handleEditorChange}
          init={{
            height: 160,
            menubar: false,
            plugins: [],
            toolbar: false,
            statusbar: false,
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; padding: 10px; }',
            placeholder: '在此输入内容...'
          }}
        />
        <div className="d-f-e mt-12">
          <Space>
            <Button type="primary" onClick={handleSave}>
              发布
            </Button>
            <Button onClick={handleClear}>
              清空
            </Button>
          </Space>
        </div>
      </div>


      {/* {content && (
        <div style={{
          marginTop: '20px',
          backgroundColor: '#fff',
          padding: '14px',
        }}>
          <h3>编辑器内容预览:</h3>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )} */}
    </div>
  );
};

export default TinyMceEditor;