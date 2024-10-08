import { alpha, Box, InputBase, Stack, styled, Typography } from "@mui/material"
import { DataGrid, GridColDef, gridClasses } from '@mui/x-data-grid';
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingComponent from "./LoadingComponent";
import DetailsPreviewTable from "./DetailsPreviewTable";


const ViewTable = () => {

  const [dataTable, setDataTable] = useState([]);
  const [item, setItem] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    let updateDatatable
    if (response.data) {
    let  updateDatatable = response.data?.map((item:any, index:any) => ({
        index: index + 1,
        id: item.id,
        firstName: item?.name,
        lastName: item?.username,
        email: item?.email,
        phone: item?.phone,
        website: item?.website,
        street: item?.address?.street,
        suite: item?.address?.suite,
        zipcode: item?.address?.zipcode,
        city: item?.address?.city,
        companyName: item?.company?.name,
        catchPhrase: item?.company?.catchPhrase,
        bs: item?.company?.bs,

      }));
      setDataTable(updateDatatable);
    }
    // handle success
    console.log(response.data);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  }, [])
  
    const columns: GridColDef<(typeof rows)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'firstName',
          headerName: 'FirstName',
          align: "center",
          headerAlign: "center",
          flex: 1,
          width: 100,
          editable: true,
          sortable:true
        },
        {
          field: 'lastName',
          headerName: 'LastName',
          align: "center",
          headerAlign: "center",
          flex: 1,
          width: 100,
          editable: true,
          sortable:true
        },
        {
          field: 'fullName',
          headerName: 'FullName',
          align: "center",
          headerAlign: "center",
          flex: 1,
          width: 100,
          editable: true,
          sortable:true,
          valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        {
          field: 'email',
          headerName: 'Email',
          align: "center",
          headerAlign: "center",
          flex: 1,
          width: 100,
          editable: true,
          sortable:true
        },
        {
          field: 'phone',
          headerName: 'Phone',
          align: "center",
          headerAlign: "center",
          flex: 1,
          width: 100,
          editable: true,
          sortable:true
        },
        {
          field: 'website',
          headerName: 'Website ',
          align: "center",
          headerAlign: "center",
          flex: 1,
          width: 100,
          editable: true,
          sortable:true
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

      const handleRowClick = (params:any) => {
        setItem(params?.row);
        handleClickOpen()
      };
      console.log('fdffff', item)

      const [text, setText] = useState("");

      const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filteredRows = dataTable.filter((row:any) => {
          // console.log('CCCCy', typeof(row))
          return row.firstName.toLowerCase().includes(text.toLowerCase());
        });
        setDataTable(filteredRows)
        setText(e.target.value);
      };
    

    return(
      <>
      <Stack direction={'row'}spacing={3} width={'100%'} justifyContent={'center'} alignItems={'center'} mt={10}>
      <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        width: 300,
        height: 36,
        borderRadius: 1,
        border: '1px solid',
      }}
    >
      <InputBase
        value={text}
        autoFocus
        onChange={onSearchTextChange}
        sx={{flex: 1, backgroundColor: "transparent" }}
        placeholder={'search for firstName'}
      />
    </Stack>

      <Typography variant="h5" fontWeight={'bold'} fontFamily={'persian'} m={3}>User Information </Typography>
      </Stack>

    <Box
      m={8}
      border={'2px solid rgba(75, 217, 246, 0.8)'}
      borderRadius={1.5}
      sx={{
        height: 500,
        '& .MuiDataGrid-cell': {
          padding: '8px',
        },
        '& .MuiDataGrid-footerContainer': {
          justifyContent: 'center',
        },
        
      [`& .${gridClasses.row}`]: {
        backgroundColor: alpha('rgba(221, 245, 244, 0.8)', 0.5),
    },
    
      }}
    >
      {!dataTable ? (<LoadingComponent/>) :
       (
        <DataGrid
        rows={dataTable}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        onRowClick={handleRowClick}
        pageSizeOptions={[5]}
        // checkboxSelection
        // autosizeOnMount={true}
        // disableRowSelectionOnClick
      />
       )}
      </Box>


      <DetailsPreviewTable
        handleClose={handleClose}
        open={open}
        content={item}
      />

      </>
    
    )
}

export default ViewTable

