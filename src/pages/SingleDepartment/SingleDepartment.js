import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import AOS from "aos";
import CollegeHeros from "../../components/Hero/CollegeHeros";
import { Link, useParams } from "react-router-dom";
import { coursesPartitions } from "../../utils/data";
import SchoolDepartmentCard from "../../components/Courses/SchoolDepartmentCard";
import { Box, Grid } from "@mui/material";
import Title from "../../components/general/Title";
import { Breadcrumb } from "antd";

const SingleDepartment = () => {
  const { closeSubmenu } = useGlobalContext();
  const { department } = useParams();

  const departmentDetails = coursesPartitions.find(
    (depart) => depart.name.toLowerCase() === department.toLowerCase()
  );

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  console.log(departmentDetails);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <Box
          id="All News"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-easing="ease-in-sine">
          <CollegeHeros
            section={"DEPARTMENT"}
            title={departmentDetails?.name}
          />
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
                    title: (
                      <Link
                        to={`/Diploma/courses/${departmentDetails.course.toUpperCase()}`}>
                        {departmentDetails.course}
                      </Link>
                    ),
                  },

                  {
                    title: departmentDetails.name,
                  },
                ]}
              />
              <Title
                title={` ${departmentDetails.name}`}
                subtitle="About the Department"
              />

              <div className="bg-gray-100 p-4 rounded ">
                <p className="text-gray-700 mb-4">
                  {departmentDetails?.description}
                </p>
                <div className="">
                  <p className="text-gray-700">
                    <span className="font-semibold text-lg">Duration:</span>{" "}
                    {departmentDetails?.duration}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-lg">Price:</span>{" "}
                    {departmentDetails?.price}
                  </p>
                </div>
              </div>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SingleDepartment;
