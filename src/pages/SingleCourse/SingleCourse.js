import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import AOS from "aos";
import CollegeHeros from "../../components/Hero/CollegeHeros";
import { Link, useParams } from "react-router-dom";
import { courses, coursesPartitions } from "../../utils/data";
import SchoolDepartmentCard from "../../components/Courses/SchoolDepartmentCard";
import { Box, Grid } from "@mui/material";
import Title from "../../components/general/Title";
import { Breadcrumb } from "antd";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";

const SingleCourse = () => {
  const { closeSubmenu } = useGlobalContext();
  const { course } = useParams();

  const courseDetails = courses.find((col) => col.name === course);
  const departments = coursesPartitions.filter(
    (department) => department.course === course
  );

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <Box
          id="All News"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-easing="ease-in-sine">
          <CollegeHeros section={course} />
          <Box className=" py-10 bg-[#f7f7f7]">
            <Box className="container">
              <Breadcrumb
                items={[
                  {
                    title: <Link to="/Diploma">Diploma</Link>,
                  },
                  {
                    title: <Link to="/Diploma/courses">Courses</Link>,
                  },
                  {
                    title: courseDetails.name,
                  },
                ]}
              />

              <Title
                title={` ${courseDetails.name}`}
                subtitle="Our Departments Associated with"
              />
              <Grid container spacing={2}>
                {departments.map((department, index) => {
                  return (
                    <Grid item sx={12} sm={3} key={index} className="w-full">
                      <Box>
                        <SchoolDepartmentCard
                          data={department}
                          triggeredFrom="school"
                        />
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default SingleCourse;
