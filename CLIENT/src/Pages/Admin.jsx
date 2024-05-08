import { DataGrid } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
} from "@mui/icons-material";
import Header from "../Components/Header";

const Admin = () => {
  const theme = useTheme();
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
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "80px",
              alignItems: "center",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",

              backgroundColor:
                access === "Admin" ? theme.palette.primary.dark : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}

            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
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
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Admin;
