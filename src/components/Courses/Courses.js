import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Title from "../general/Title";
import { courses } from "../../utils/data";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <Box
      id="Colleges and Schools"
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="" subtitle="Our Offerings" />

        <Box>
          <Grid container spacing={2}>
            {courses.map((course, index) => (
              <Grid item sm={12} md={4} key={index}>
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    component="img"
                    alt="Faculties"
                    height="140"
                    image={course.imageUrl}
                    style={{ filter: "brightness(0.7) contrast(1.2)" }} // Adjust the values as needed
                  />

                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "15px" }}>
                      {course.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/Diploma/courses/${course.name}`}>
                      <Button
                        variant="outlined"
                        disableElevation
                        size="medium"
                        sx={{
                          bgcolor: "#babae6",
                          color: "#fff",
                          size: "small",
                          border: "none",
                          fontSize: "12px",

                          bgcolor: "#000066",
                          fontSize: "11px",
                          fontWeight: "bold",

                          textTransform: "capitalize",
                          fontWeight: "bold",
                          "&:hover": {
                            bgcolor: "#d6babb",
                            color: "#fff",
                            border: "none",
                          },
                        }}>
                        View Courses
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
