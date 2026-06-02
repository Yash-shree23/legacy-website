// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import ServiceDetails from "./pages/Services/ServiceDetails";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />

//       <Route
//         path="/services/:slug"
//         element={<ServiceDetails />}
//       />
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ServiceDetails from "./pages/Services/ServiceDetails";
import NRI from "./pages/NRI/NRI";
import NRIServiceDetails from "./pages/NRI/NRIServiceDetails";
import AboutUS from "./pages/AboutUS/AboutUS";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Blogs from "./pages/Blogs/Blogs";
import Videos from "./pages/Videos/Videos";
import FAQs from "./pages/FAQs/FAQs";
import LegalGuides from "./pages/LegalGuides/LegalGuides";
import Resources from "./pages/Downlodable Resources/Resources";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
