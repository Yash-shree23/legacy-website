import { useEffect, useState } from "react";
import "../pages/Dashboard.css";
import { AssignDropdown, statusClass } from "../pages/Dashboard";


function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [toast, setToast] = useState("");
  const [filter, setFilter] = useState("All");
  const [teamMembers, setTeamMembers] = useState([]);

  const flash = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  useEffect(() => {
  fetchEnquiries();
  fetchTeamMembers();
}, []);
const fetchEnquiries = async () => {
  try {
    const res = await fetch(
      // "http://localhost:8080/api/dashboard/all-service-enquiries"
      "https://hpclsparesportal.in/legacy-backend/public/api/dashboard/all-service-enquiries"
    );

    const data = await res.json();

    setEnquiries(data);
  } catch (err) {
    console.error(err);
  }
};
  const fetchTeamMembers = async () => {
  try {
    const res = await fetch(
      // "http://localhost:8080/api/team"
      "https://hpclsparesportal.in/legacy-backend/public/api/team"
    );

    const data = await res.json();

    setTeamMembers(data);
  } catch (err) {
    console.log(err);
  }
};
  const handleAssign = async (uniqueId, member) => {
    try {
      await fetch(
        // "http://localhost:8080/api/enquiry/assign",
        "https://hpclsparesportal.in/legacy-backend/public/api/enquiry/assign",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            enquiry_unique_id: uniqueId,
            enquiry_type: "Service",
            team_member_id: member.id,
          }),
        }
      );

      flash(`Assigned to ${member.name}`);

      fetchEnquiries();
    } catch (err) {
      console.error(err);
    }
  };

  const markDone = async (uniqueId) => {
    try {
      await fetch(
        // "http://localhost:8080/api/enquiry/status",
        "https://hpclsparesportal.in/legacy-backend/public/api/enquiry/status",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            enquiry_unique_id: uniqueId,
            status: "Done",
          }),
        }
      );

      flash("Enquiry marked as done");

      fetchEnquiries();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredEnquiries =
    filter === "All"
      ? enquiries
      : enquiries.filter(
          (e) => e.status === filter
        );

  return (
    <div className="dashboard-content">

      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}

      <div className="table-card">

        <div className="table-header">
          <h3>All Service Enquiries</h3>

          <div style={{
            display: "flex",
            gap: "10px",
            alignItems: "center"
          }}>
            <span className="muted">
              {filteredEnquiries.length} total
            </span>

            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Assigned">Assigned</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredEnquiries.map((e) => (
                <tr key={e.unique_id}>

                  <td>
                    {e.service_name}
                  </td>

                  <td>
                    <div className="name-cell">
                      <div className="avatar-sm">
                        {e.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      {e.name}
                    </div>
                  </td>

                  <td className="muted">
                    {e.phone}
                  </td>

                  <td className="muted truncate">
                    {e.message}
                  </td>

                  <td>
                    <span
                      className={`status-pill ${
                        statusClass[e.status]
                      }`}
                    >
                      {e.status}
                    </span>
                  </td>

                  <td className="muted">
                    {e.assignedTo || "—"}
                  </td>

                  <td>

                    {e.status === "Pending" && (
                      <AssignDropdown
  enquiryId={e.unique_id}
  onAssign={handleAssign}
  teamMembers={teamMembers}
/>
                    )}

                    {e.status === "Assigned" && (
                      <button
                        className="btn-done"
                        onClick={() =>
                          markDone(e.unique_id)
                        }
                      >
                        Mark Done
                      </button>
                    )}

                    {e.status === "Done" && (
                      <span className="done-label">
                        ✔ Done
                      </span>
                    )}

                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default EnquiriesPage;