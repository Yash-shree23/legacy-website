

import { useState } from "react";
import "../pages/Dashboard.css";
import { AssignDropdown, teamMembers, statusClass } from "../pages/Dashboard";

const initialEnquiries = [
  { id: 1, name: "Rahul Patil",    phone: "+91 98765 43210", message: "Need help with will drafting",    status: "Pending",  assignedTo: null                    },
  { id: 2, name: "Sneha Kulkarni", phone: "+91 87654 32109", message: "Estate transfer query",           status: "Done",     assignedTo: { name: "Amit Sharma" } },
  { id: 3, name: "Amit Mahajan",   phone: "+91 76543 21098", message: "Property succession advice",      status: "Assigned", assignedTo: { name: "Priya Nair" }  },
  { id: 4, name: "Divya Rao",      phone: "+91 65432 10987", message: "Trust fund setup enquiry",        status: "Pending",  assignedTo: null                    },
  { id: 5, name: "Rohan Mehta",    phone: "+91 55432 10987", message: "Will registration process",       status: "Pending",  assignedTo: null                    },
  { id: 6, name: "Kavita Joshi",   phone: "+91 44321 09876", message: "NRI property transfer help",      status: "Assigned", assignedTo: { name: "Rohit Desai" } },
];

function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [toast, setToast]         = useState("");

  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(""), 3000); };

  const handleAssign = (id, member) => {
    setEnquiries((prev) =>
      prev.map((e) => e.id === id ? { ...e, status: "Assigned", assignedTo: member } : e)
    );
    // TODO: fetch('your-php-api/assign-enquiry', { method:'POST', body: JSON.stringify({ enquiryId: id, memberId: member.id }) })
    flash(`Assigned to ${member.name} successfully!`);
  };

  const markDone = (id) => {
    setEnquiries((prev) =>
      prev.map((e) => e.id === id ? { ...e, status: "Done" } : e)
    );
    // TODO: fetch('your-php-api/update-status', { method:'POST', body: JSON.stringify({ id, status: 'Done' }) })
    flash("Enquiry marked as done!");
  };

  return (
    <div className="dashboard-content">
      {toast && <div className="toast">{toast}</div>}

      <div className="table-card">
        <div className="table-header">
          <h3>All Enquiries</h3>
          <span className="muted" style={{ fontSize: 13 }}>{enquiries.length} total</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((e) => (
              <tr key={e.id}>
                <td>
                  <div className="name-cell">
                    <div className="avatar-sm">{e.name.split(" ").map((n) => n[0]).join("")}</div>
                    {e.name}
                  </div>
                </td>
                <td className="muted">{e.phone}</td>
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

export default EnquiriesPage;