import { Box } from "@mui/material";
import Header from "../Components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";


const Class = () => {

  const [Students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/student")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);


  

  const columns = [
    
    {
      field: "_id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "classe",
      headerName: "CLASS",
      align: "left",
      headerAlign: "left",
      flex: 1,
    },
    {
      field: "name",
      headerName: "NAME",
      align: "left",
      headerAlign: "left",
      flex: 1,
    },
    {
      field: "datedenaissance",
      headerName: "Date_De_Naissance",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "note",
      headerName: "NOTE",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    
  ];
    return (
        <Box>
      <Header title={"STUDENTS"} subTitle={"Managing the Classe"} />

      <Box sx={{ height: 400, mx: "auto", paddingRight: "15px" }}>
        <DataGrid
          rows={Students}
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