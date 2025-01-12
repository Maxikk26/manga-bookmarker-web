'use client'

import React, {useState} from 'react'
import {Pagination, Table, Tag} from 'antd'

const columns = [
    {
        title: 'Título',
        dataIndex: 'name',
        key: 'name',
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

const tableProps = {
    showHeader:false
}

const CustomTable = (props) => {
    const ellipsis = props.ellipsis ?? true;
    const pageSizeOptions = props.pageSizeOptions ?? ['10', '20', '30', '40'];

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(props.pageSize ?? 10);

    const tableColumns = columns.map((item) => ({
        ...item,
        ellipsis,
    }));

    const handlePaginationChange = (page, pageSize) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    const currentData = props.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const pagination = (
        <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={props.data.length} // Use the actual data length
            showSizeChanger
            onChange={handlePaginationChange}
            pageSizeOptions={pageSizeOptions}
        />
    );

    return (
        <>
            <div style={{padding: '1%', display: 'flex', justifyContent: 'right', alignItems: 'center'}}>
                {pagination}
            </div>
            <Table {...tableProps} columns={tableColumns} dataSource={currentData} pagination={false}/>
        </>
    )
}


export default CustomTable

