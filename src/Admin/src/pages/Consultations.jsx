

import { useState } from "react";
import "../pages/Dashboard.css";
import { statusClass } from "../pages/Dashboard";


const initialConsultations = [
  { id: 1, name: "Priya Desai",  phone: "+91 95432 10987", feedback: "Very helpful session",          status: "Done"    },
  { id: 2, name: "Vijay Joshi",  phone: "+91 84321 09876", feedback: "Awaiting document submission",  status: "Pending" },
  { id: 3, name: "Neha Sharma",  phone: "+91 73210 98765", feedback: "Rescheduled for next week",     status: "Pending" },
  { id: 4, name: "Kiran Mehta",  phone: "+91 62109 87654", feedback: "All formalities completed",     status: "Done"    },
  { id: 5, name: "Arjun Patil",  phone: "+91 51098 76543", feedback: "Needs follow-up call",          status: "Pending" },
  { id: 6, name: "Meera Joshi",  phone: "+91 40987 65432", feedback: "Documents submitted successfully", status: "Done" },
];

function ConsultationsPage() {
  const [consultations, setConsultations] = useState(initialConsultations);
  const [toast, setToast]                 = useState("");

  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(""), 3000); };

  const markDone = (id) => {
    setConsultations((prev) =>
      prev.map((c) => c.id === id ? { ...c, status: "Done" } : c)
    );
    // TODO: fetch('your-php-api/update-consultation', { method:'POST', body: JSON.stringify({ id, status: 'Done' }) })
    flash("Consultation marked as done!");
  };

  return (
    <div className="dashboard-content">
      {toast && <div className="toast">{toast}</div>}

      <div className="table-card">
        <div className="table-header">
          <h3>All Consultations</h3>
          <span className="muted" style={{ fontSize: 13 }}>{consultations.length} total</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Feedback</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((c) => (
              <tr key={c.id}>
                <td>
                  <div className="name-cell">
                    <div className="avatar-sm av-alt">{c.name.split(" ").map((n) => n[0]).join("")}</div>
                    {c.name}
                  </div>
                </td>
                <td className="muted">{c.phone}</td>
                <td className="muted truncate">{c.feedback}</td>
                <td><span className={`status-pill ${statusClass[c.status]}`}>{c.status}</span></td>
                <td>
                  {c.status === "Pending" && (
                    <button className="btn-done" onClick={() => markDone(c.id)}>Mark Done</button>
                  )}
                  {c.status === "Done" && (
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

export default ConsultationsPage;