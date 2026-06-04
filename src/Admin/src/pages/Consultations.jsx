import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

const consultations = [
  {
    id: 1,
    name: "Priya Desai",
    phone: "+91 95432 10987",
    feedback: "Very helpful session",
    status: "Done",
  },
  {
    id: 2,
    name: "Vijay Joshi",
    phone: "+91 84321 09876",
    feedback: "Awaiting document submission",
    status: "Pending",
  },
  {
    id: 3,
    name: "Neha Sharma",
    phone: "+91 73210 98765",
    feedback: "Rescheduled for next week",
    status: "New",
  },
  {
    id: 4,
    name: "Kiran Mehta",
    phone: "+91 62109 87654",
    feedback: "All formalities completed",
    status: "Done",
  },
];

const statusClass = {
  New: "s-new",
  Done: "s-done",
  Pending: "s-pend",
};

function Consultations() {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
        <Navbar title="Consultations" />

        <div className="dashboard-content">
          <div className="table-card">
            <div className="table-header">
              <h3>All Consultations</h3>
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
                {consultations.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="name-cell">
                        <div className="avatar-sm av-alt">
                          {item.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>

                        {item.name}
                      </div>
                    </td>

                    <td className="muted">{item.phone}</td>

                    <td className="muted truncate">
                      {item.feedback}
                    </td>

                    <td>
                      <span
                        className={`status-pill ${statusClass[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultations;