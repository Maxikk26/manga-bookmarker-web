'use client'

import React, {useState} from 'react'
import {Pagination, Table, Tag} from 'antd'
import {create} from "zustand";

const tableProps = {
    showHeader:false
}

export const useTableStore = create((set) => ({
    dataLength : 0,
    setDataLength :  (length) => {
        set(() => ({dataLength: length}))
    },
    currentPage: 1,
    setCurrentPage: (pageNumber) => {
        set(() => ({currentPage: pageNumber}))
    },
    pageSize: 5,
    setPageSize: (size) => {
        set(() => ({pageSize: size}))
    },
}))

const CustomTable = (props) => {
    const ellipsis = props.ellipsis ?? false;
    const pageSizeOptions = props.pageSizeOptions ?? ['10', '20', '30', '40'];
    // const [pageSize, setPageSize] = useState(props.pageSize ?? 10);

    const dataLength = useTableStore((state) => state.dataLength)

    const currentPage = useTableStore((state) => state.currentPage)
    const setCurrentPage = useTableStore((state) => state.setCurrentPage)

    const pageSize = useTableStore((state) => state.pageSize)
    const setPageSize = useTableStore((state) => state.setPageSize)

    const currentData = props.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const columns = props.columns ?? [];

    const tableColumns = columns.map((item) => ({
        ...item,
        ellipsis,
    }));

    const handlePaginationChange = (page, size) => {
        setCurrentPage(page);
        if(size !== pageSize)
            setPageSize(size);
    };


    const pagination = (
        <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={dataLength} // Use the actual data length
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

