import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../Components/Header";
import { useState } from "react";


const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  {
    value: "TCS1",
    label: "TCS1",
  },
  {
    value: "TCS2",
    label: "TCS2",
  },
  {
    value: "TCS3",
    label: "TCS3",
  },
  {
    value: "TCL1",
    label: "TCL1",
  },
];

const Student = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    handleClick();
  };

  return (
    <Box>
      <Header title="CREATE Student" subTitle="Create a New Student " />

      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            error={Boolean(errors.firstName)}
            // helperText={
            //   Boolean(errors.firstName)
            //     ? "This field is required & min 3 character"
            //     : null
            // }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />

          <TextField
            error={Boolean(errors.lastName)}
            // helperText={
            //   Boolean(errors.lastName)
            //     ? "This field is required & min 3 character"
            //     : null
            // }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>

        

        <TextField
          error={Boolean(errors.ContactNumber)}
          // helperText={
          //   Boolean(errors.ContactNumber)
          //     ? "Please provide a valid Phone number"
          //     : null
          // }
          {...register("ContactNumber", {
            required: true,
            pattern: phoneRegExp,
          })}
          label="Contact Number"
          variant="filled"
        />
        <TextField label="Adress 1" variant="filled" />
        

        <TextField
          variant="filled"
          id="outlined-select-currency"
          select
          label="Classe"
          defaultValue="TCS1"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Create New Student
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Account created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default Student;
