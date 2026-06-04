// import { Outlet } from "react-router-dom";
// import Sidebar from "../Admin/src/Layout/Sidebar";
// import Navbar from "../Admin/src/Layout/Navbar";
// import Dashboard from "../Admin/src/pages/Dashboard.css";

// function AdminLayout() {
//   return (
//     <div className="admin-layout">
//       <Sidebar />
//       <div className="admin-main">
//         <Navbar />
//         <main>
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminLayout;
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../pages/Dashboard.css";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;