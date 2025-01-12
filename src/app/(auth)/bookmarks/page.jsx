'use client'

import React, {useEffect, useState} from 'react'
import Table from "@/components/Table";


const data = [
	{ key: '1', name: 'Absolute Regression', status: 1, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '2', name: 'One Piece', status: 2, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '3', name: 'Naruto', status: 3, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '4', name: 'Bleach', status: 1, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '5', name: 'One Piece', status: 1, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '6', name: 'Naruto', status: 1, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '7', name: 'Bleach', status: 3, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '8', name: 'One Piece', status: 2, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '9', name: 'Naruto', status: 2, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '10', name: 'Bleach', status: 2, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '11', name: 'One Piece', status: 1, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '12', name: 'Naruto', status: 1, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '13', name: 'Bleach', status: 1, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '14', name: 'One Piece', status: 3, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '15', name: 'Naruto', status: 3, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '16', name: 'Bleach', status: 1, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '17', name: 'One Piece', status: 2, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '18', name: 'Naruto', status: 1, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '19', name: 'Bleach', status: 2, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '20', name: 'One Piece', status: 1, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '21', name: 'Naruto', status: 3, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] },
	{ key: '22', name: 'Bleach', status: 3, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
	{ key: '23', name: 'One Piece', status: 1, address: 'London No. 1 Sidney Pl', tags: ['loser'] },
	{ key: '24', name: 'Naruto', status: 2, address: 'Sydney No. 1 York Street', tags: ['cool', 'teacher'] }
];


export default function BookmarksPage() {

	useEffect(() => {
		//TODO API calls
	}, []);

	return (
		<div >
			{/*<div style={{background:'white', marginBottom:'3%'}}>
				filters
			</div>*/}

			<div style={{background:'white',borderRadius:'20px', padding:'2%'}}>
				<Table data={data} pageSizeOptions={['10','50']} />
			</div>
		</div>
	)
}

