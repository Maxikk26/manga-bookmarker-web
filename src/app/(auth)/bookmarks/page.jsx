'use client'

import React, {useEffect, useRef, useState} from 'react'
import Table, {useTableStore} from "@/components/Table";
import {Badge, Space, Tag} from "antd";
import {getUserBookmarks} from "@/services/bookmarkService";

const columns = [
	{
		title: 'Título',
		dataIndex: 'name',
		key: 'name',
		width: "30%",
		render: (_,{mangaInfo}) =>{
			return (
				<div>{mangaInfo.name}</div>
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

	const dataLength = useTableStore((state) => state.dataLength)
	const setDataLength = useTableStore((state) => state.setDataLength)
	const currentPage = useTableStore((state) => state.currentPage)
	const pageSize = useTableStore((state) => state.pageSize)

	const prevPageRef = useRef(currentPage)

	useEffect(() => {
		obtainUserBookmarks(true)
	}, []);

	//Detect the change in table page
	useEffect(() => {
		//We only ask for more data when incrementing (we save the highest page asked, so we don't repeat api call)
		if(currentPage > prevPageRef.current) {
			prevPageRef.current = currentPage;
			obtainUserBookmarks(false,bookmarkData[bookmarkData.length-1].id);
		}
	}, [currentPage]);

	//Detect change in table page size
	useEffect(() => {
		console.log((currentPage * pageSize)-1 )
		console.log("bookmarkData",bookmarkData[(currentPage * pageSize)-1])
	}, [pageSize]);


	const obtainUserBookmarks = async (count = false, lastId = "",pageSize = "5") => {
		try{
			const queryParams = {
				pageSize: pageSize,
				... (count && {count}),
				... (lastId && {lastId})
			}
			console.log("queryParams", queryParams)
			const response = await getUserBookmarks(queryParams);
			if(response.ok){
				setBookmarkData(prevBookmarkData => [...prevBookmarkData, ...response.result.bookmarks]);
				const length = response.result.totalBookmarks ?? dataLength;
				setDataLength(length)
			}
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

