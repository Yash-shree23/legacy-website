// import { NavLink, useNavigate } from "react-router-dom";
// import "./Sidebar.css";

// const navItems = [
//   { to: "/dashboard", icon: "⊞", label: "Dashboard" },
//   { to: "/enquiries", icon: "✉", label: "All Enquiries" },
//   { to: "/consultations", icon: "📋", label: "Consultations" },
//   { to: "/team", icon: "👥", label: "Team" },
//   { to: "/partners", icon: "🤝", label: "Partners" },
// ];

// function Sidebar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("legacy_admin_auth");
//     navigate("/login");
//   };

//   return (
//     <aside className="sidebar">
//       <div className="sidebar-logo">
//         <span className="logo-icon">⚖</span>
//         <span className="logo-text">Legacy</span>
//       </div>

//       <nav className="sidebar-nav">
//         {navItems.map((item) => (
//           <NavLink
//             key={item.to}
//             to={item.to}
//             className={({ isActive }) =>
//               "nav-item" + (isActive ? " active" : "")
//             }
//           >
//             <span className="nav-icon">{item.icon}</span>
//             <span className="nav-label">{item.label}</span>
//           </NavLink>
//         ))}
//       </nav>

//       <button className="logout-btn" onClick={handleLogout}>
//         ⎋ Logout
//       </button>
//     </aside>
//   );
// }

// export default Sidebar;
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const navItems = [
  { to: "/admin/dashboard",     icon: "⊞", label: "Dashboard" },
  { to: "/admin/enquiries",     icon: "✉", label: "All Enquiries" },
  { to: "/admin/consultations", icon: "📋", label: "Consultations" },
  { to: "/admin/team",          icon: "👥", label: "Team" },
  { to: "/admin/partners",      icon: "🤝", label: "Partners" },
];
function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("legacy_admin_auth");
    navigate("/admin");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">⚖</span>
        <span className="logo-text">Legacy</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              "nav-item" + (isActive ? " active" : "")
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button className="logout-btn" onClick={handleLogout}>
        ⎋ Logout
      </button>
    </aside>
  );
}

export default Sidebar;