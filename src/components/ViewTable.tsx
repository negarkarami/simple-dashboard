import { Box, Stack } from "@mui/material"
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const ViewTable = () => {

    const columns: GridColDef<(typeof rows)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'firstName',
          headerName: 'نام',
          width: 150,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'نام خانوادگی',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'ایمیل',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
      ];
      
      const rows = [
        { id: 1,firstName: 'نگار', lastName: 'کرمی', email: 'inegarkarami@gmail.com', fullName: "نگار کرمی" },
        { id: 2,firstName: 'سارا', lastName: 'رضایی', email: 'sararezaie@gmail.com', fullName: " سارا رضایی" },
        { id: 3,firstName: 'سارا', lastName: 'رضایی', email: 'sararezaie@gmail.com', fullName: " سارا رضایی" },
        { id: 3,firstName: 'سارا', lastName: 'رضایی', email: 'sararezaie@gmail.com', fullName: " سارا رضایی" },
        { id: 4,firstName: 'سارا', lastName: 'رضایی', email: 'sararezaie@gmail.com', fullName: " سارا رضایی" },
        { id: 5,firstName: 'سارا', lastName: 'رضایی', email: 'sararezaie@gmail.com', fullName: " سارا رضایی" },
        { id: 6,firstName: 'سارا', lastName: 'رضایی', email: 'sararezaie@gmail.com', fullName: " سارا رضایی" },
        { id: 7,firstName: 'سارا', lastName: 'رضایی', email: 'sararezaie@gmail.com', fullName: " سارا رضایی" },
        { id: 8,firstName: 'سارا', lastName: 'رضایی', email: 'sararezaie@gmail.com', fullName: " سارا رضایی" },
        { id: 9,firstName: 'سارا', lastName: 'رضایی', email: 'sararezaie@gmail.com', fullName: " سارا رضایی" },
        { id: 10,firstName: 'سارا', lastName: 'رضایی', email: 'sararezaie@gmail.com', fullName: " سارا رضایی" },



      ]

    return(
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
        //   disableRowSelectionOnClick
        />
      </Box>
    )
}

export default ViewTable