

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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />
      <Route path="/nri" element={<NRI />} />
      <Route path="/nri/:slug" element={<NRIServiceDetails />} />
    </Routes>
  );
}

export default App;