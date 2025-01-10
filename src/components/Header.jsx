'use client'

import React from 'react'
import { Layout, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

const { Header } = Layout

const DashboardHeader = ({ collapsed, toggle }) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	return (
		<Header style={{ padding: 0, background: colorBgContainer }}>
			{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
				className: 'trigger',
				onClick: toggle,
				style: {
					padding: '0 24px',
					fontSize: '18px',
					lineHeight: '64px',
					cursor: 'pointer',
					transition: 'color 0.3s',
				},
			})}
		</Header>
	)
}

export default DashboardHeader

