'use client'

import React from 'react'
import {Button, Col, Dropdown, Layout, Menu, Row, theme} from 'antd'
import {BookOutlined, SearchOutlined} from '@ant-design/icons'
import Link from "next/link";
import {CiViewList} from "react-icons/ci";
import {usePathname} from 'next/navigation'
import {FaUserCircle} from "react-icons/fa";

const { Header } = Layout

const items = [
	{
		key: '1',
		label: (
			<a href="/logout" rel="noopener noreferrer">
				Logout
			</a>
		),
	},
];

const DashboardHeader = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	const pathname = usePathname()

	return (
		<Header style={{ padding: '0% 17%', background: colorBgContainer }}>
			<Row style={{ width: '100%' }} justify="space-between" align="middle">
				<Col>
					<Menu
						mode="horizontal"
						defaultSelectedKeys={[pathname]}
						items={[
							{
								key: '/bookmarks',
								icon: <BookOutlined />,
								label: <Link href="/bookmarks">Bookmarks</Link>,
							},
							{
								key: '/mangas',
								icon: <CiViewList />,
								label: <Link href="/mangas">Mangas</Link>,
							},
						]}
						style={{ border: 'none' }}
					/>
				</Col>
				<Col>
					<Dropdown
						menu={{
							items,
						}}
						placement="bottomLeft"
						arrow
					>
						<Button shape='circle'>
							<FaUserCircle size={20} />
						</Button>
					</Dropdown>
				</Col>
			</Row>
		</Header>
	)
}

const styles = {
	link: {
		marginRight: '10px',
		textDecoration: 'none',
		color: 'black',
		transition: 'color 0.2s ease',
	},
	activeLink: {
		fontWeight: 'bold',
	},
	hover: {
		color: 'gray',
	},
};

export default DashboardHeader

