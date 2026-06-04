import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

// ── Dummy data (replace with real API/Firebase fetches) ──
const stats = [
  { label: "Total Enquiries", value: 142, change: "+12 this week", color: "purple" },
  { label: "Team Members",    value: 8,   change: "Active members", color: "green"  },
  { label: "Total Partners",  value: 24,  change: "+2 this month",  color: "blue"   },
];

const recentEnquiries = [
  { id: 1, name: "Rahul Patil",      phone: "+91 98765 43210", message: "Need help with will drafting",    status: "New"     },
  { id: 2, name: "Sneha Kulkarni",   phone: "+91 87654 32109", message: "Estate transfer query",           status: "Done"    },
  { id: 3, name: "Amit Mahajan",     phone: "+91 76543 21098", message: "Property succession advice",      status: "Pending" },
  { id: 4, name: "Divya Rao",        phone: "+91 65432 10987", message: "Trust fund setup enquiry",        status: "New"     },
];

const recentConsultations = [
  { id: 1, name: "Priya Desai",   phone: "+91 95432 10987", feedback: "Very helpful session",           status: "Done"    },
  { id: 2, name: "Vijay Joshi",   phone: "+91 84321 09876", feedback: "Awaiting document submission",   status: "Pending" },
  { id: 3, name: "Neha Sharma",   phone: "+91 73210 98765", feedback: "Rescheduled for next week",      status: "New"     },
  { id: 4, name: "Kiran Mehta",   phone: "+91 62109 87654", feedback: "All formalities completed",      status: "Done"    },
];

const statusClass = { New: "s-new", Done: "s-done", Pending: "s-pend" };

function Dashboard() {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
        <Navbar title="Dashboard" />

        <div className="dashboard-content">

          {/* ── Stat Cards ── */}
          <div className="stat-cards">
            {stats.map((s) => (
              <div key={s.label} className={`stat-card stat-${s.color}`}>
                <p className="stat-label">{s.label}</p>
                <p className="stat-value">{s.value}</p>
                <p className="stat-change">{s.change}</p>
              </div>
            ))}
          </div>

          {/* ── Two Tables ── */}
          <div className="tables-grid">

            {/* Recent Enquiries */}
            <div className="table-card">
              <div className="table-header">
                <h3>Recent Enquiries</h3>
                <button className="view-all-btn">View All →</button>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentEnquiries.map((e) => (
                    <tr key={e.id}>
                      <td>
                        <div className="name-cell">
                          <div className="avatar-sm">{e.name.split(" ").map(n => n[0]).join("")}</div>
                          {e.name}
                        </div>
                      </td>
                      <td className="muted">{e.phone}</td>
                      <td className="muted truncate">{e.message}</td>
                      <td><span className={`status-pill ${statusClass[e.status]}`}>{e.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Recent Consultations */}
            <div className="table-card">
              <div className="table-header">
                <h3>Recent Consultations</h3>
                <button className="view-all-btn">View All →</button>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Feedback</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentConsultations.map((c) => (
                    <tr key={c.id}>
                      <td>
                        <div className="name-cell">
                          <div className="avatar-sm av-alt">{c.name.split(" ").map(n => n[0]).join("")}</div>
                          {c.name}
                        </div>
                      </td>
                      <td className="muted">{c.phone}</td>
                      <td className="muted truncate">{c.feedback}</td>
                      <td><span className={`status-pill ${statusClass[c.status]}`}>{c.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
