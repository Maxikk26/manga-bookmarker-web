'use client'

import React, {useEffect, useState} from 'react'
import {Layout, Menu, theme} from 'antd'
import {BookOutlined} from '@ant-design/icons'
import Link from "next/link";
import {CiViewList} from "react-icons/ci";
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

const { Header } = Layout


const DashboardHeader = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	const pathname = usePathname()

	return (
		<Header style={{ padding: '0% 15%', background: colorBgContainer }}>
			<Menu
				mode={'horizontal'}
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
			/>
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

