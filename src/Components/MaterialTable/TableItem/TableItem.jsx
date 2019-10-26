import React from 'react'
import MaterialTable from 'material-table'

const TableItem = ({ columns, data, title }) => {
    return (
        <MaterialTable
            columns={columns}
            data={data}
            title={title}
            options={{ search: false, pageSize: 5, pageSizeOptions: [5] }}
        />
    );
}

export default TableItem
