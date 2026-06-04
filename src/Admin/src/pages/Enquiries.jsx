import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

const enquiries = [
  {
    id: 1,
    type: "Enquiry",
    name: "Rahul Patil",
    phone: "+91 98765 43210",
    details: "Need help with will drafting",
    status: "New",
  },
  {
    id: 2,
    type: "Enquiry",
    name: "Sneha Kulkarni",
    phone: "+91 87654 32109",
    details: "Estate transfer query",
    status: "Done",
  },
];

const consultations = [
  {
    id: 101,
    type: "Consultation",
    name: "Priya Desai",
    phone: "+91 95432 10987",
    details: "Very helpful session",
    status: "Done",
  },
  {
    id: 102,
    type: "Consultation",
    name: "Vijay Joshi",
    phone: "+91 84321 09876",
    details: "Awaiting document submission",
    status: "Pending",
  },
];

const allRecords = [...enquiries, ...consultations];

const statusClass = {
  New: "s-new",
  Done: "s-done",
  Pending: "s-pend",
};

function Enquiries () {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
        <Navbar title="All Enquiries" />

        <div className="dashboard-content">
          <div className="table-card">
            <div className="table-header">
              <h3>All Enquiries & Consultations</h3>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Type</th>
                  <th>Details</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {allRecords.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="name-cell">
                        <div className="avatar-sm">
                          {item.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>

                        {item.name}
                      </div>
                    </td>

                    <td>{item.phone}</td>

                    <td>{item.type}</td>

                    <td className="truncate">
                      {item.details}
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

export default Enquiries ;