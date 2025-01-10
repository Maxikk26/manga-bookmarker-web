'use client'

import React from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons'
import Link from 'next/link'

const { Sider } = Layout

const Sidebar = ({ collapsed }) => {
	return (
		<Sider trigger={null} collapsible collapsed={collapsed}>
			<div className="demo-logo-vertical" />
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={['1']}
				items={[
					{
						key: '1',
						icon: <UserOutlined />,
						label: <Link href="/bookmarks">Bookmarks</Link>,
					},
					{
						key: '2',
						icon: <VideoCameraOutlined />,
						label: <Link href="/mangas">Mangas</Link>,
					},
				]}
			/>
		</Sider>
	)
}

export default Sidebar

