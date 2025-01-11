'use client'

import React, { useState } from 'react'
import { Layout, theme } from 'antd'
import Header from "@/components/Header";

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
		<Layout style={{ minHeight: '100vh'}}>
			<Header collapsed={collapsed} toggle={toggleSidebar} />
			<Layout>
				<Content
					style={{
						margin: '24px 15%',
						padding: 24,
						paddingTop: 8,
						background: 'transparent',
					}}
				>
					{children}
				</Content>
			</Layout>

		</Layout>
	)
}

