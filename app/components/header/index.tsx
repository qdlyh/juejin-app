'use client';
// 声明当前组件为客户端组件，允许使用React钩子、事件处理器等客户端特性
import Image from 'next/image';
import LogoSrc from '../../assets/logo/logo.png';
import { Col, Row } from 'antd';
import { Input, Space } from 'antd';
import { Button, Flex } from 'antd';
import type { GetProps } from 'antd';
import headerStyles from './header.module.scss';
// 从Ant Design的Input.Search组件获取其Props类型定义
// GetProps是Ant Design提供的类型工具，用于提取组件的属性类型
type SearchProps = GetProps<typeof Input.Search>;
// 从Ant Design的Input组件中解构出Search子组件
const { Search } = Input;

// 定义搜索处理函数，类型从SearchProps中提取onSearch的类型
// value: 用户输入的搜索关键词
// _e: 事件对象（下划线前缀表示该参数在函数体内未被使用）
// info: 包含搜索来源信息的对象（如'click'或'enter'）
const onSearch: SearchProps['onSearch'] = (value: string, _e, info) => console.log(info?.source, value);

export default function Header() {
  return (
    <Row className={`${headerStyles.content} p-l-r-24`}>
      <Row className="w-1200">
        <Col span={8}>
          <div >
            <Image
              src={LogoSrc}
              alt="Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
        </Col>
        <Col span={8}>
          <div>
            <Space>
              <Search placeholder="搜索" onSearch={onSearch} style={{ width: 340 }} />
            </Space>
          </div>
        </Col>
        <Col span={8}>
          <div className="fr">
            <Space>
              <Button type="primary">登录</Button>
              <Button>注册</Button>
            </Space>
          </div>
        </Col>
      </Row>
    </Row>
  );
}

