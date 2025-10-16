'use client';
import React, { useState } from 'react';
import { Button, Modal, Input, Select, Space } from 'antd';
import '@/app/assets/styles/index.scss';
export default function Register() {
  const [isModalOpen, setIsModalOpen] = useState(!false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const options = [
    {
      value: '86',
      label: '中国+86',
    },
    {
      value: '853',
      label: '澳门+853',
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        注册
      </Button>
      <Modal
        className="ant-modal-unit no-padding"
        title={<div className="ant-modal-unit-title">登录掘金畅享更多权益</div>}
        closable={true}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="t-a-c p-t-b-12">
            <Button className="w-160" key="submit" type="primary" onClick={handleOk}>
              登录/注册
            </Button>
          </div>
        ]}
      >
        <div className="w-100p h-100p p-l-r-24 mt-12">
          <div className="fsz-16">验证码登录/注册</div>
          <div className="mt-12 t-a-c">
            <Space.Compact>
              <Select defaultValue={options[0].value} options={options} />
              <Input className="w-320" defaultValue="" placeholder="请输入手机号" />
            </Space.Compact>
            <Space.Compact className="mt-12">
              <Input className="w-320" defaultValue="" placeholder="请输入验证码" />
              <Button type="primary">获取验证码</Button>
            </Space.Compact>
          </div>
        </div>
      </Modal>
    </>
  );
}