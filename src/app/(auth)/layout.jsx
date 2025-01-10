'use client'

import React, { useState } from 'react'
import { Layout, theme } from 'antd'
import Sidebar from '@/components/Sidebar'
import DashboardHeader from '@/components/Header'

const { Content } = Layout

export default function DashboardLayout({ children }) {
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	const toggleSidebar = () => {
		setCollapsed(!collapsed)
	}

	return (
		/*<Layout style={{ minHeight: '100vh'}}>
			<Sidebar collapsed={collapsed} />
			<Layout>
				<DashboardHeader collapsed={collapsed} toggle={toggleSidebar} />
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>*/
		<Layout style={{ minHeight: '100vh'}}>
			<DashboardHeader collapsed={collapsed} toggle={toggleSidebar} />
			<Layout style={{minHeight: '100vh',}}>
				<Sidebar collapsed={collapsed} />
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
					}}
				>
					{children}
				</Content>
			</Layout>

		</Layout>
	)
}

