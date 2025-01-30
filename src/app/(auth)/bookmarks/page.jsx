'use client'

import React, {useEffect, useState} from 'react'
import Table from "@/components/Table";
import {Badge, Button, Dropdown, Space, Tag} from "antd";
import {DownOutlined, SearchOutlined, SettingOutlined} from "@ant-design/icons";
import {getUserBookmarks} from "@/services/bookmarkService";

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

