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
          <Grid container spacing={2} className="space-y-16">
            {courses.map((course, index) => (
              <Grid
                item
                sm={12}
                md={12}
                key={index}
                className="bg-white rounded-md shadow-md p-3">
                <Grid container spacing={2}>
                  <Grid item sm={12} md={6}>
                    <Box>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          marginBottom: 3,
                          marginTop: 2,
                        }}>
                        {course.name}
                      </Typography>
                      {course.name.includes("EXECUTIVE") && (
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{ fontSize: "14px" }}>
                          Elevate your expertise with our Executive Courses,
                          designed for seasoned professionals. <br /> Acquire
                          advanced skills, strategic insights, and a mindset
                          tailored for leadership roles. <br />
                          <br />
                          Acquire advanced skills and strategic insights
                          essential for success in today's dynamic business
                          environment. Stay ahead of industry trends and refine
                          your leadership skills. <br />
                          <br /> Our Executive Courses empower professionals
                          with the knowledge and tools needed to excel in the
                          ever-evolving business landscape. <br />
                          <br />
                          Engage tech teams like a pro by becoming tech-inclined
                          through our specialized Executive Courses. <br />
                        </Typography>
                      )}
                      {course.name.includes("CERTIFICATE") && (
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{ fontSize: "14px" }}>
                          Enhance your skills in the most sought-after position
                          in the market space. <br />
                          <br /> Gain the expertise and knowledge required to
                          stand out in today's competitive job market. <br />
                          Come and seize the skills, opportunities, mindset, and
                          experiences that will significantly enhance your
                          employability. <br />
                          <br /> Our programs are crafted to provide you with
                          the tools needed to excel in the job market and secure
                          the position you aspire to.
                        </Typography>
                      )}
                      {course.name.includes("DIPLOMA") && (
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{ fontSize: "14px" }}>
                          Our industry-led courses prepare you for a successful
                          tech career. Gain practical skills and knowledge for
                          the ever-evolving technology industry. <br />
                          <br />
                          Experience hands-on learning that goes beyond theory.
                          Develop tangible, applicable skills for real-world
                          tech challenges and opportunities. <br />
                          <br /> Earn a university-affiliated diploma to enhance
                          your qualifications. Our programs provide a recognized
                          certification with significant value in the job
                          market. <br />
                          <br />
                          Embark on a journey of innovation and skill
                          development with us. Your future in tech starts here,
                          where training, experiences, and accreditation come
                          together for a fulfilling career.
                        </Typography>
                      )}
                      <Box className="mt-8">
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
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Card sx={{ width: "100%" }}>
                      <CardMedia
                        component="img"
                        alt="Faculties"
                        height="140"
                        image={course.imageUrl}
                        style={{ filter: "brightness(0.7) contrast(1.2)" }} // Adjust the values as needed
                      />
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
