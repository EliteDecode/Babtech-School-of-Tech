import React from "react";
import { Carousel } from "antd";
import { Box, Button, Typography } from "@mui/material";
import { heroContents } from "../../utils/data";
import ButtonCustome from "../general/ButtonCustome";

const Hero = () => (
  <Carousel autoplay autoplaySpeed={3000}>
    {heroContents.map((content, index) => (
      <Box className={`${content.class}`}>
        <Box className="container">
          <Box className="sm:w-[58%] w-[100%] hero-text">
            <Box>
              <Typography
                data-aos="fade-down"
                data-aos-duration="1400"
                variant="subtitle2"
                sx={{
                  color: "#f7f7f7",
                  fontSize: "18px",
                  "@media (max-width: 567px)": {
                    fontSize: "14px",
                  },
                  opacity: "0.9",
                  fontWeight: "bold",
                }}>
                {content.subtitle}
              </Typography>
              <Typography
                data-aos="fade-down"
                data-aos-duration="1200"
                variant="h1"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "55px",
                  lineHeight: "3.4rem",
                  marginTop: "1%",

                  "@media (max-width: 567px)": {
                    fontSize: "44px",
                    lineHeight: "3.5rem",
                  },
                }}>
                {content.title}
              </Typography>
              <Typography
                variant="subtitle1"
                data-aos="fade-down"
                data-aos-duration="1000"
                sx={{
                  fontSize: "14px",
                  color: "#d1d5db",
                  marginTop: "1%",
                  lineHeight: "1.4rem",

                  "@media (max-width: 567px)": {
                    fontSize: "15px",
                    lineHeight: "1.2rem",
                  },
                }}>
                {content.subtitle2}
              </Typography>

              <Box
                className="mt-8 space-x-4"
                data-aos="fade-down"
                data-aos-duration="800">
                <ButtonCustome
                  size="small"
                  color="#000066"
                  text={content.btn1}
                  type="fill"
                  capitalzie={false}
                />

                <Button
                  size="small"
                  variant="outlined"
                  disableElevation
                  sx={{
                    bgcolor: "#fff",
                    color: "#000066",
                    fontSize: "12px",
                    fontWeight: "bold",
                    border: "1px solid #fff",
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "#fff",
                      border: "1px solid #fff",
                    },
                  }}>
                  {content.btn2}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    ))}
  </Carousel>
);
export default Hero;