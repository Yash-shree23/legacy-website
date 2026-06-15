

import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import UserLayout from "./Layout/UserLayout";
import Home from "./pages/Home/Home";
import ServiceDetails from "./pages/Services/ServiceDetails";
import NRI from "./pages/NRI/NRI";
import NRIServiceDetails from "./pages/NRI/NRIServiceDetails";
import AboutUS from "./pages/AboutUS/AboutUS";
import Blogs from "./pages/Blogs/Blogs";
import Videos from "./pages/Videos/Videos";
import FAQs from "./pages/FAQs/FAQs";
import LegalGuides from "./pages/LegalGuides/LegalGuides";
import Resources from "./pages/Downlodable Resources/Resources";
import Contact from "./pages/Contact/Contact";

import AdminLayout from "./Admin/src/Layout/AdminLayout";
import Navbar from "./Admin/src/Layout/Navbar";
import LoginPage from "./Admin/src/pages/Login";
import Dashboard from "./Admin/src/pages/Dashboard";
import Enquiries from "./Admin/src/pages/Enquiries";
import Consultations from "./Admin/src/pages/Consultations";
import Team from "./Admin/src/pages/Team";
import Partners from "./Admin/src/pages/Partners";
import ForgetPassword from "./Admin/src/pages/ForgetPassword";

function App() {
  return (
    <>
     <ScrollToTop />
    <Routes>
      {/* USER ROUTES */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/nri" element={<NRI />} />
        <Route path="/nri/:slug" element={<NRIServiceDetails />} />

        {/* Learn */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/faqs" element={<FAQs />} />

        {/* Resources */}
        <Route path="/legal-guides" element={<LegalGuides />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ADMIN ROUTES */}

      <Route path="/admin" element={<LoginPage />} />
      <Route path="/admin/forget-password" element={<ForgetPassword />} />


      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/enquiries" element={<Enquiries />} />
        <Route path="/admin/consultations" element={<Consultations />} />
        <Route path="/admin/team" element={<Team />} />
        <Route path="/admin/partners" element={<Partners />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

