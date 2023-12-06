import { Box, Button } from "@mui/material";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SchoolDepartmentCard = ({ data, triggeredFrom }) => {
  return (
    <Card
      title={data.school ? "School Of" : "Department Of"}
      className="shadow-lg w-full"
      bordered={false}
      style={{ fontWeight: "bold", fontSize: "18px", width: "100%" }}>
      {data.name}
      <Box className="mt-5">
        <Link to={`/Diploma/courses/course/departments/${data.name}`}>
          <Button
            variant="outlined"
            disableElevation
            size="small"
            sx={{
              bgcolor: "#e3caca",
              color: "#0000666",
              border: "none",
              fontSize: "12px",
              textTransform: "capitalize",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "#d6babb",
                color: "#0000666",
                border: "none",
              },
            }}>
            View Department
          </Button>
        </Link>
      </Box>
    </Card>
  );
};

export default SchoolDepartmentCard;
