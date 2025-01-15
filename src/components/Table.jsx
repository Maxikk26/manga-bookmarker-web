'use client'

import React, {useState} from 'react'
import {Pagination, Table, Tag} from 'antd'

const tableProps = {
    showHeader:false
}

const CustomTable = (props) => {
    const ellipsis = props.ellipsis ?? true;
    const pageSizeOptions = props.pageSizeOptions ?? ['10', '20', '30', '40'];

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(props.pageSize ?? 10);

    const currentData = props.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const columns = props.columns ?? [];

    const tableColumns = columns.map((item) => ({
        ...item,
        ellipsis,
    }));

    const handlePaginationChange = (page, pageSize) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };


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

