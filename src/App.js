import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Academics from "./pages/Academics/Academics";
import About from "./pages/About/About";
import SingleDepartment from "./pages/SingleDepartment/SingleDepartment";
import NewsPage from "./pages/News/NewsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import EventPage from "./pages/EventPage/EventPage";
import SchoolsAndColleges from "./pages/SchoolsAndColleges/SchoolsAndColleges";
import CalenderPage from "./pages/CalenderPage/CalenderPage";
import Resources from "./pages/Resources/Resources";

import SingleCourse from "./pages/SingleCourse/SingleCourse";

import PublicInfo from "./pages/PublicInfo/PublicInfo";
import Contact from "./pages/Contact/Contact";

import Admission from "./pages/Admission/Admission";
import PublicInformation from "./pages/PublicInformation/PublicInformation";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import SingleNews from "./pages/SingleNews/SingleNews";
import SingleEvents from "./pages/SingleEvents/SingleEvents";

// import Admission from "./components/Admission";
// import StudentLife from "./components/StudentLife";
// import Updates from "./components/Updates";
// import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/gallery" element={<GalleryPage />} />
        <Route path="/home/news" element={<NewsPage />} />
        <Route path="/home/news/:newsId" element={<SingleNews />} />
        <Route path="/home/events" element={<EventPage />} />
        <Route path="/home/events/:eventId" element={<SingleEvents />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/public information" element={<PublicInfo />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/diploma" element={<Academics />} />
        <Route path="/diploma/courses" element={<SchoolsAndColleges />} />
        <Route path="/diploma/calender" element={<CalenderPage />} />

        <Route path="/diploma/courses/:course" element={<SingleCourse />} />
        <Route
          path="/Diploma/courses/course/departments/:department"
          element={<SingleDepartment />}
        />

        <Route path="/resources" element={<Resources />} />

        {/* <Route path="/student life" element={<StudentLife />} /> */}

        <Route path="/admission" element={<Admission />} />

        <Route path="/public information" element={<PublicInformation />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
