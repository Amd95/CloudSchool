import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

function Login({ loginInfo, setLoginInfo }) {
  const navigation = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");

    if (email === "teacher@gmail.com" && password === "teacherPassword") {
      setLoginInfo("student");
      navigation("/students");
    } else if (
      email === "faculty@gmail.com" &&
      password === "facultyPassword"
    ) {
      setLoginInfo("staff");
      navigation("/students");
    }
  };


  return (
    <Box
      sx={{
        marginTop: "2em",
        padding: "2em",
        borderRadius: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        boxShadow: "-1px 1px 14px -2px rgba(0,0,0,0.75)",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "red" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h6">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            sx={{ width: 300 }}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            sx={{ width: 300 }}
            autoComplete="current-password"
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: 200 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
