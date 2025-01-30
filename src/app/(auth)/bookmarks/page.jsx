'use client'

import React, {useEffect, useState} from 'react'
import Table from "@/components/Table";
import {Badge, Button, Dropdown, Space, Tag} from "antd";
import {DownOutlined, SearchOutlined, SettingOutlined} from "@ant-design/icons";
import {getUserBookmarks} from "@/services/bookmarkService";

const data = [
	{ key: '1', name: 'Absolute Regression', status: 1, lastRead: '01/01/2025', chapter:5, mangaInfo:{totalChapters:500} },
	{ key: '2', name: 'One Piece', status: 2, lastRead: '12/12/2024',chapter:5 },
	{ key: '3', name: 'Naruto', status: 3, lastRead: '01/01/2025', chapter:200 },
	{ key: '4', name: 'Bleach', status: 1, lastRead:  '12/12/2024', chapter:5 },
	{ key: '5', name: 'One Piece', status: 1, lastRead: '01/01/2025', chapter:50},
	{ key: '6', name: 'Naruto', status: 1, lastRead: '01/01/2025', chapter:5 },
	{ key: '7', name: 'Bleach', status: 3, lastRead: '01/01/2025', chapter:12 },
	{ key: '8', name: 'One Piece', status: 2, lastRead:  '12/12/2024', chapter:5 },
	{ key: '9', name: 'Naruto', status: 2, lastRead: '01/01/2025', chapter:5 },
	{ key: '10', name: 'Bleach', status: 2, lastRead: '01/01/2025', chapter:601 },
	{ key: '11', name: 'One Piece', status: 1, lastRead: '12/12/2024', chapter:5 },
	{ key: '12', name: 'Naruto', status: 1, lastRead: '01/01/2025', chapter:5 },
	{ key: '13', name: 'Bleach', status: 1, lastRead: '01/01/2025', chapter:5 },
	{ key: '14', name: 'One Piece', status: 3, lastRead: '12/12/2024', chapter:5 },
	{ key: '15', name: 'Naruto', status: 3, lastRead: '01/01/2025', chapter:5 },
	{ key: '16', name: 'Bleach', status: 1, lastRead: '12/12/2024', chapter:80 },
	{ key: '17', name: 'One Piece', status: 2, lastRead: '01/01/2025', chapter:5 },
	{ key: '18', name: 'Naruto', status: 1, lastRead: '12/12/2024', chapter:5 },
	{ key: '19', name: 'Bleach', status: 2, lastRead: '01/01/2025', chapter:5 },
	{ key: '20', name: 'One Piece', status: 1, lastRead: '01/01/2025', chapter:500 },
	{ key: '21', name: 'Naruto', status: 3, lastRead: '12/12/2024', chapter:5 },
	{ key: '22', name: 'Bleach', status: 3, lastRead: '01/01/2025', chapter:102 },
	{ key: '23', name: 'One Piece', status: 1, lastRead: '12/12/2024', chapter:5 },
	{ key: '24', name: 'Naruto', status: 2, lastRead: '01/01/2025', chapter:220 }
];

const items = [
	{
		key: '2',
		label: 'Actualizar',
	},
	/*{
		key: '3',
		label: 'Billing',
		extra: '⌘B',
	},
	{
		key: '4',
		label: 'Settings',
		extra: '⌘S',
	},*/
];

const columns = [
	{
		title: 'Título',
		dataIndex: 'name',
		key: 'name',
		width: "30%",
		render: (_,{mangaInfo}) =>{
			console.log("mangaInfo",mangaInfo)
			return (
				<div>
					{mangaInfo.name}
				</div>
			)
		},
	},
	{
		title: 'Estatus',
		dataIndex: 'status',
		key: 'status',
		render: (status) => {
			let color = 'green'
			let name = 'Reading'
			switch (status) {
				case 2:
					color = 'yellow'
					name = 'On Hold'
					break
				case 3:
					color = 'red'
					name = 'Dropped'
					break
			}
			return (
				<Tag color={color} key={status}>
					{name.toUpperCase()}
				</Tag>
			)
		}
	},
	{
		title: 'Última lectura',
		key: 'lastRead',
		dataIndex: 'lastRead',
		render: (_,{lastRead,chapter,mangaInfo}) =>{
			const chapterTag = "Capítulo " + chapter
			const date = new Date(lastRead);
			const formatter = new Intl.DateTimeFormat("es-VE", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric"
			});
			const formattedDate = formatter.format(date);

			return (
				<div>
					<Space>
						{
							mangaInfo?.totalChapters > chapter ?
								<a>
									<Badge count={'+'}  color="green" onClick={() => {
										//TODO aumentar de 1 en 1 o hacer display de un formulario con un input del ultimo cap
										console.log("test")
									}}/>
								</a> : null
						}
						<Badge count={chapterTag} color={mangaInfo?.totalChapters > chapter ? "blue" : "gray"}/>
					</Space>
					<div>Última lectura: {formattedDate}</div>
				</div>
			)
		},
	},
	{
		title: 'Acciones',
		dataIndex: 'actions',
		key:'actions',
		width: "10%",
		render: () => {
			return (
				<a onClick={()=>{
					//TODO formulario para actualizar los datos del bookmark
					console.log('here')
				}}>
					Actualizar
				</a>
			)
		}
	},
	/*{
		title: 'Acciones',
		dataIndex: 'actions',
		key:'actions',
		render: () => {
			return (
				<Dropdown
					menu={{
						items,
					}}
				>
					<a onClick={(e) => e.preventDefault()}>
						<Space>
							Acciones
							<DownOutlined />
						</Space>
					</a>
				</Dropdown>
			)
		}
	}*/
]

export default function BookmarksPage() {

	const [bookmarkData, setBookmarkData] = useState([])

	useEffect(() => {
		obtainUserBookmarks()
	}, []);

	const obtainUserBookmarks = async () => {
		try{
			const response = await getUserBookmarks({pageSize:'10'});
			if(response.ok){
				setBookmarkData(response.result)
			}
			console.log("response",response);
		}catch (error){
			// console.error("Login error:", error);
		}
	}

	return (
		<div style={{background:'white',borderRadius:'20px', padding:'2%'}}>
			<Table data={bookmarkData} columns={columns} pageSizeOptions={['5','10']} pageSize={5} />
		</div>
	)
}

