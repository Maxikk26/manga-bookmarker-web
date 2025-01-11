'use client'

import React, {useState} from 'react'
import {Pagination, Table, Tag} from "antd";

const columns = [
	{
		title: 'Título',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <a>{text}</a>,
	},
	{
		title: 'Estatus',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Última lectura',
		key: 'tags',
		dataIndex: 'tags',
		render: (_, { tags }) => (
			<>
				{tags.map((tag) => {
					let color = tag.length > 5 ? 'geekblue' : 'green'
					if (tag === 'loser') {
						color = 'volcano'
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					)
				})}
			</>
		),
	},
]

const data = [
	{ key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '3', name: 'Joe Black', age: 32, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '4', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '5', name: 'Jim Green', age: 42, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '6', name: 'Joe Black', age: 32, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '7', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '8', name: 'Jim Green', age: 42, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '9', name: 'Joe Black', age: 32, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '10', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '11', name: 'Jim Green', age: 42, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '12', name: 'Joe Black', age: 32, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '13', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '14', name: 'Jim Green', age: 42, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '15', name: 'Joe Black', age: 32, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '16', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '17', name: 'Jim Green', age: 42, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '18', name: 'Joe Black', age: 32, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '19', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '20', name: 'Jim Green', age: 42, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '21', name: 'Joe Black', age: 32, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '22', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '23', name: 'Jim Green', age: 42, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '24', name: 'Joe Black', age: 32, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] }
];


const tableProps = {
	showHeader:false
}

export default function BookmarksPage() {
	const [ellipsis, setEllipsis] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	const tableColumns = columns.map((item) => ({
		...item,
		ellipsis,
	}));

	const handlePaginationChange = (page, pageSize) => {
		setCurrentPage(page);
		setPageSize(pageSize);
	};

	const currentData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	const pagination = (
		<Pagination
			current={currentPage}
			pageSize={pageSize}
			total={data.length} // Use the actual data length
			showSizeChanger
			onChange={handlePaginationChange}
			pageSizeOptions={['10', '20', '30', '40']}
		/>
	);

	return (
		<div >
			{/*<div style={{background:'white', marginBottom:'3%'}}>
				filters
			</div>*/}

			<div style={{background:'white',borderRadius:'20px', padding:'2%'}}>
				<div style={{padding: '1%', display: 'flex', justifyContent: 'right', alignItems: 'center'}}>
					{pagination}
				</div>
				<Table {...tableProps} columns={tableColumns} dataSource={currentData} pagination={false}/>
			</div>
		</div>
	)
}

