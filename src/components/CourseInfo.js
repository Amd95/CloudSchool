import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import studentData from "../data/studentData.json";

function CourseInfo() {
  const currentStudent = sessionStorage.getItem("currentStudent");
  const student = studentData.filter((item) => item.name === currentStudent);
  console.log(student);

  const cardFlex = {
    display: "flex",
    alignItems: "center",
    marginLeft: "5em",
    marginBottom: ".5em",
  };
  return (
    <div style={{ backgroundColor: "red", margin: "0 auto" }}>
      <Card
        sx={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%,-60%)",
          margin: "2em 0",

          fontSize: "1.5rem",
          boxShadow: "-3px 0px 18px 4px rgba(0,0,0,0.75)",
          width: "500px",
          borderRadius: "50px ",
        }}
      >
        <CardContent sx={{ marginTop: "1em" }}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            gutterBottom
            variant="h4"
            component="div"
          >
            <AccountBoxIcon /> {student[0].name}
          </Typography>
          <Box sx={cardFlex}>
            <Typography variant="body2" color="text.secondary">
              Course ID:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              4878
            </Typography>
          </Box>

          <Box sx={cardFlex}>
            <Typography variant="body2" color="text.secondary">
              Contact Name :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Basic
            </Typography>
          </Box>
          <Box sx={cardFlex}>
            <Typography variant="body2" color="text.secondary">
              Contact Fees. :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rs. 3000{" "}
              {student[0].name === "Rajat" || "Ayush" ? (
                <span style={{ color: "green", fontWeight: "900" }}>Paid</span>
              ) : (
                <span style={{ color: "red", fontWeight: "900" }}>Pending</span>
              )}
            </Typography>
          </Box>
          <Box sx={cardFlex}>
            <Typography variant="body2" color="text.secondary">
              Subjects :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {student[0].courseList + ""}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default CourseInfo;
