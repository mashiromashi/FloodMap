import React from 'react';
import MaterialTable from 'material-table';

const TableItem = ({ columns, data, title }) => (
  <MaterialTable
    columns={columns}
    data={data}
    title={title}
    options={{ search: false, pageSize: 10, pageSizeOptions: [10], exportButton: true, exportAllData:true }}
  />
);

export default TableItem;
