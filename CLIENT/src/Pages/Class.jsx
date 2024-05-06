import { Box } from "@mui/material";
import Header from "../Components/Header";
import { DataGrid } from "@mui/x-data-grid";


const Class = () => {
  const rows = [
    {
      id: 1,
      name: "Walid",
      email: "jonsnow@gmail.com",
      age: 13,
      phone: "(665)121-5454",
      access: "User",
    },
    {
      id: 2,
      name: "Meryem",
      email: "meryem.zioui@gmail.com",
      age: 37,
      phone: "(421)314-2288",
      access: "Admin",
    },
    {
      id: 3,
      name: "DjamelEddine",
      email: "jaim@gmail.com",
      age: 48,
      phone: "(422)982-6739",
      access: "User",
    },
    {
      id: 4,
      name: "Mohamed",
      email: "Moha@gmail.com",
      age: 6,
      phone: "(921)425-6742",
      access: "User",
    },
    {
      id: 5,
      name: "Amir",
      email: "Miroo@gmail.com",
      age: 4,
      phone: "(421)445-1189",
      access: "User",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "left",
      headerAlign: "left",
      flex: 1,
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    
  ];
    return (
        <Box>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

      <Box sx={{ height: 400, mx: "auto", paddingRight: "15px" }}>
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
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
    );
};

export default Class;