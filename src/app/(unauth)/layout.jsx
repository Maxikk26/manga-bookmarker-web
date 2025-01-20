'use client'

import React, { useState } from 'react'
import {Col, Layout, Row, theme} from 'antd'
import Header from "@/components/Header";

const { Content } = Layout

export default function UnAuthLayout({ children }) {
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	const toggleSidebar = () => {
		setCollapsed(!collapsed)
	}

	return (
		<Layout style={{ height: "100vh",backgroundColor: '#C0C0C0C0' }}>
			<Content>
				<Row justify="center" align="middle" style={{ height: "100%" }}>
					<Col>
						<div style={styles.squareStyle}>
							{children}
						</div>
					</Col>
				</Row>
			</Content>
		</Layout>
	)
}

const styles = {
	squareStyle:{
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white", // Ant Design primary color
		borderRadius: "3%", // Optional: for rounded corners
		width: "25vw", // 20% of the viewport width
		aspectRatio: "1", // Ensures it's always a square
	}
};

