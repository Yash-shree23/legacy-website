

import { useState, useRef, useEffect } from "react";
import "./Dashboard.css";


const stats = [
  { label: "Total Enquiries", value: 142, change: "+12 this week",  color: "purple" },
  { label: "Team Members",    value: 8,   change: "Active members", color: "green"  },
  { label: "Total Partners",  value: 24,  change: "+2 this month",  color: "blue"   },
];

export const teamMembers = [
  { id: 1, name: "Amit Sharma",    role: "Senior Advisor",   email: "amit@legacy.com"  },
  { id: 2, name: "Priya Nair",     role: "Legal Consultant", email: "priya@legacy.com" },
  { id: 3, name: "Rohit Desai",    role: "Estate Planner",   email: "rohit@legacy.com" },
  { id: 4, name: "Sneha Kulkarni", role: "Tax Advisor",      email: "sneha@legacy.com" },
];

export const statusClass = { Pending: "s-pend", Assigned: "s-assigned", Done: "s-done" };

// Combined recent items for dashboard (mix of both types)
const recentCombined = [
  { id: 1,  type: "Enquiry",      name: "Rahul Patil",    phone: "+91 98765 43210", message: "Need help with will drafting",      status: "Pending",  assignedTo: null               },
  { id: 2,  type: "Consultation", name: "Priya Desai",    phone: "+91 95432 10987", message: "Very helpful session",              status: "Done",     assignedTo: null               },
  { id: 3,  type: "Enquiry",      name: "Sneha Kulkarni", phone: "+91 87654 32109", message: "Estate transfer query",             status: "Done",     assignedTo: { name: "Amit Sharma" } },
  { id: 4,  type: "Consultation", name: "Vijay Joshi",    phone: "+91 84321 09876", message: "Awaiting document submission",      status: "Pending",  assignedTo: null               },
  { id: 5,  type: "Enquiry",      name: "Amit Mahajan",   phone: "+91 76543 21098", message: "Property succession advice",        status: "Assigned", assignedTo: { name: "Priya Nair" } },
  { id: 6,  type: "Consultation", name: "Neha Sharma",    phone: "+91 73210 98765", message: "Rescheduled for next week",         status: "Pending",  assignedTo: null               },
];

// ── Assign Dropdown ──
export function AssignDropdown({ enquiryId, onAssign }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="assign-wrapper" ref={ref}>
      <button className="btn-assign" onClick={() => setOpen((o) => !o)}>
        Assign ▾
      </button>
      {open && (
        <div className="assign-dropdown">
          <p className="dropdown-label">Choose team member</p>
          {teamMembers.map((m) => (
            <div
              key={m.id}
              className="dropdown-item"
              onClick={() => { onAssign(enquiryId, m); setOpen(false); }}
            >
              <div className="drop-avatar">{m.name.split(" ").map((w) => w[0]).join("")}</div>
              <div>
                <p className="drop-name">{m.name}</p>
                <p className="drop-role">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DashboardPage() {
  const [combined, setCombined] = useState(recentCombined);
  const [toast, setToast]       = useState("");

  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(""), 3000); };

  const handleAssign = (id, member) => {
    setCombined((prev) =>
      prev.map((e) => e.id === id ? { ...e, status: "Assigned", assignedTo: member } : e)
    );
    flash(`Assigned to ${member.name} successfully!`);
  };

  const markDone = (id) => {
    setCombined((prev) =>
      prev.map((e) => e.id === id ? { ...e, status: "Done" } : e)
    );
    flash("Marked as done!");
  };

  return (
    <div className="dashboard-content">
      {toast && <div className="toast">{toast}</div>}

      {/* Stat Cards */}
      <div className="stat-cards">
        {stats.map((s) => (
          <div key={s.label} className={`stat-card stat-${s.color}`}>
            <p className="stat-label">{s.label}</p>
            <p className="stat-value">{s.value}</p>
            <p className="stat-change">{s.change}</p>
          </div>
        ))}
      </div>

      {/* Combined Recent Table */}
      <div className="table-card">
        <div className="table-header">
          <h3>Recent Enquiries &amp; Consultations</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Type</th>
              <th>Message</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {combined.map((e) => (
              <tr key={e.id}>
                <td>
                  <div className="name-cell">
                    <div className={`avatar-sm ${e.type === "Consultation" ? "av-alt" : ""}`}>
                      {e.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    {e.name}
                  </div>
                </td>
                <td className="muted">{e.phone}</td>
                <td>
                  <span className={`status-pill ${e.type === "Enquiry" ? "s-assigned" : "s-pend"}`}>
                    {e.type}
                  </span>
                </td>
                <td className="muted truncate">{e.message}</td>
                <td><span className={`status-pill ${statusClass[e.status]}`}>{e.status}</span></td>
                <td className="muted">{e.assignedTo ? e.assignedTo.name : "—"}</td>
                <td>
                  {e.status === "Pending" && (
                    <AssignDropdown enquiryId={e.id} onAssign={handleAssign} />
                  )}
                  {e.status === "Assigned" && (
                    <button className="btn-done" onClick={() => markDone(e.id)}>Mark Done</button>
                  )}
                  {e.status === "Done" && (
                    <span className="done-label">✔ Done</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardPage;
