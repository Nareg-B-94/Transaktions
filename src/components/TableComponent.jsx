import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const TableComponent = (props) => {
  const { searchTerm } = props;

  // console.log(filteredDates, 'in TableComponent');

  // const [conditional, setConditional] = useState(false);

  // props.transactions.items.map((prop) => {
  //   const { id, shopName, date, price, cashOutAmount, price, status } = prop;
  //   return (
  //     <li key={id}>
  //       <h4>{shopName}</h4>
  //       <ul>
  //         Datum: {date} <br /> Einkaufswert : {price} <br /> Cashback :
  //         {cashOutAmount} <br /> Status : {status}
  //       </ul>
  //     </li>
  //   );
  // });

  // const columns = [
  // { field: 'lastName', headerName: 'Last name', width: 230 },
  // { field: 'shop', headerName: 'Shop', width: 180 },
  // { field: 'date', headerName: 'Datum', width: 180 },
  // { field: 'price', headerName: 'Einkaufswert', width: 180 },
  // { field: 'cashOutAmount', headerName: 'Cashback', width: 180 },
  // { field: 'status', headerName: 'Status', width: 180 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
  // ];

  // props.transactions.items.map((prop) => {
  //   const rows = [{ id: 2, shop: 'Anow', firstName: 'Jon', age: 35 }];
  // });
  // const rows = [
  //   {
  //     id: 1,
  //     shop: 'Targaryen',
  //     date: 'Daenerys',
  //     price: 1123,
  //     cashOutAmount: 'asd',
  //     status: 'offen',
  //   },
  //   {
  //     id: 2,
  //     shop: 'Targasdasdaryen',
  //     date: 'Daen123123erys',
  //     price: 1123,
  //     cashOutAmount: 'ayxcyxcsd',
  //     status: 'closed',
  //   },
  //   { id: 2, shop: 'Anow', firstName: 'Jon', age: 35 },
  //   // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];

  // if (filteredDates.length > 0) {
  //   setConditional(true);
  // }

  // if (filteredDates.length < 0) {
  //   setConditional(false);
  // }

  // useEffect(() => {}, [conditional]);

  // if (conditional === true) {
  //   return (
  //     <div
  //       style={{
  //         height: '80vh',
  //         width: '100%',
  //         // display: 'flex',
  //         // alignItems: 'center',
  //         // justifyContent: 'center',
  //       }}
  //     >
  //       <DataGrid
  //         rows={filteredDates.transactions.items.map((filteredDate) => {
  //           return {
  //             id: filteredDate.id,
  //             shop: filteredDate.shopName,
  //             date: filteredDate.date,
  //             price: filteredDate.price.toLocaleString('de-DE', {
  //               style: 'currency',
  //               currency: 'EUR',
  //             }),
  //             cashOutAmount: filteredDate.cashOutAmount + ` EUR`,
  //             status: filteredDate.status,
  //           };
  //         })}
  //         columns={[
  //           { field: 'shop', headerName: 'Shop', width: 180 },
  //           { field: 'date', headerName: 'Datum', width: 180 },
  //           { field: 'price', headerName: 'Einkaufswert', width: 180 },
  //           { field: 'cashOutAmount', headerName: 'Cashback', width: 180 },
  //           { field: 'status', headerName: 'Status', width: 180 },
  //         ]}
  //         pageSize={12}
  //         rowsPerPageOptions={[9]}
  //       />
  //     </div>
  //   );
  // }

  // if (conditional === false) {

  return (
    <div
      style={{
        height: '50vh',
        width: '100%',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}
    >
      <DataGrid
        rows={props.transactions.items
          // .filter((value) => {
          //   if (searchTerm === '') {
          //     return value;
          //   } else if (value.shopName.includes(searchTerm)) {
          //     return value;
          //   }
          // })
          .map((prop) => {
            return {
              id: prop.id,
              shop: prop.shopName,
              date: prop.date,
              price: prop.price.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR',
              }),
              cashOutAmount: prop.cashOutAmount + ` EUR`,
              status: prop.status,
            };
          })}
        columns={[
          { field: 'shop', headerName: 'Shop', width: 180 },
          { field: 'date', headerName: 'Datum', width: 180 },
          { field: 'price', headerName: 'Einkaufswert', width: 180 },
          { field: 'cashOutAmount', headerName: 'Cashback', width: 180 },
          { field: 'status', headerName: 'Status', width: 180 },
        ]}
        pageSize={12}
        rowsPerPageOptions={[12]}
      />
    </div>
  );
};
// };

export default TableComponent;

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// 'de-DE', {
//   style: 'currency',
//   currency: 'EUR',
// }
