import { Box } from "@mui/material";
import Header from "../Components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Class = () => {
  const [Students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/student")
      .then((res) => {
        // Format date values before setting the state
        const formattedStudents = res.data.map((student) => ({
          ...student,
          // Assuming "datedenaissance" is the date field
          datedenaissance: moment(student.datedenaissance).format("YYYY-MM-DD"), // Format the date as desired
        }));
        setStudents(formattedStudents);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    {
      id: "filiere_id",
      field: "filiere",
      headerName: "FILIERE",
      width: 33,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      id: "classe_id",
      field: "classe",
      headerName: "CLASSE",
      align: "left",
      headerAlign: "left",
    },
    {
      id: "name_id",
      field: "name",
      headerName: "NAME",
      align: "left",
      headerAlign: "left",
      flex: 1,
    },
    {
      id: "datedenaissance_id",
      field: "datedenaissance",
      headerName: "Date_De_Naissance",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      id: "moyg_id",
      field: "moyg",
      headerName: "Moyenne generale",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      id: "math_id",
      field: "math",
      headerName: "Mathematique",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      id: "phys_id",
      field: "phys",
      headerName: "Physique",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      id: "scie_id",
      field: "scie",
      headerName: "Science",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      id: "choix_id",
      field: "choix",
      headerName: "CHOIX",
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
          getRowId={(row) => row._id}
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
