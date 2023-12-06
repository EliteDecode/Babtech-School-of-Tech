import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Ict from "../../components/Ict/Ict";
import StudentAffairs from "../../components/StudentAffairs/StudentAffairs";
import WhyUs from "../../components/WhyUs/WhyUs";

const Resources = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="resources" />
        <WhyUs />
        <Ict />
        <StudentAffairs />

        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default Resources;
