import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

export const statusClass = {
  Pending: "s-pend",
  Assigned: "s-assigned",
  Done: "s-done",
};

// ── Assign Dropdown ──
export function AssignDropdown({
  enquiryId,
  onAssign,
  teamMembers = [],
})  {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handler
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handler
      );
  }, []);

  return (
    <div
      className="assign-wrapper"
      ref={ref}
    >
      <button
        className="btn-assign"
        onClick={() =>
          setOpen((o) => !o)
        }
      >
        Assign ▾
      </button>

      {open && (
        <div className="assign-dropdown">
          <p className="dropdown-label">
            Choose team member
          </p>

          {(teamMembers || []).map((m) =>  (
            <div
              key={m.id}
              className="dropdown-item"
              onClick={() => {
                onAssign(
                  enquiryId,
                  m
                );
                setOpen(false);
              }}
            >
              <div className="drop-avatar">
                {m.name
                  .split(" ")
                  .map(
                    (w) => w[0]
                  )
                  .join("")}
              </div>

              <div>
                <p className="drop-name">
                  {m.name}
                </p>

                <p className="drop-role">
                  {m.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DashboardPage() {
  const [combined, setCombined] =
    useState([]);

  const [teamMembers, setTeamMembers] =
    useState([]);

  const [stats, setStats] =
    useState({
      total: 0,
      contacts: 0,
      consultations: 0,
      services: 0,
      team: 0,
      partners: 0,
    });

  const [toast, setToast] =
    useState("");

  useEffect(() => {
    loadDashboard();
    loadRecentEnquiries();
    loadTeamMembers();
  }, []);

  const loadDashboard =
    async () => {
      try {
        const res =
          await axios.get(
            // "http://localhost:8080/api/dashboard/stats"
            "https://hpclsparesportal.in/legacy-backend/public/api/dashboard/stats"
          );

        setStats(res.data);
      } catch (error) {
        console.error(error);
      }
    };

 const loadRecentEnquiries = async () => {
  try {

    const res = await axios.get(
      // "http://localhost:8080/api/dashboard/recent-enquiries"
      "https://hpclsparesportal.in/legacy-backend/public/api/dashboard/recent-enquiries"
    );

    setCombined(res.data);

  } catch (error) {
    console.error(error);
  }
};
  const loadTeamMembers =
    async () => {
      try {
        const res =
          await axios.get(
            // "http://localhost:8080/api/team"
            "https://hpclsparesportal.in/legacy-backend/public/api/team"
          );

        setTeamMembers(
          res.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  const flash = (msg) => {
    setToast(msg);

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

 const handleAssign = async (uniqueId, member) => {

  try {

    await axios.post(
      // "http://localhost:8080/api/assign-enquiry",
      "https://hpclsparesportal.in/legacy-backend/public/api/assign-enquiry",
      {
        enquiry_unique_id: uniqueId,
        enquiry_type: "General",
        team_member_id: member.id
      }
    );

    await loadRecentEnquiries();

    flash(
      `Assigned to ${member.name}`
    );

  } catch (err) {

    console.log(err);

  }
};

  const markDone = async (uniqueId) => {

  try {

    await axios.post(
      // "http://localhost:8080/api/update-enquiry-status",
      "https://hpclsparesportal.in/legacy-backend/public/api/update-enquiry-status",
      {
        enquiry_unique_id: uniqueId,
        status: "Done"
      }
    );

    await loadRecentEnquiries();

    flash("Status Updated");

  } catch (err) {

    console.log(err);

  }
};

  return (
    <div className="dashboard-content">
      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}

      {/* KPI Cards */}

      <div className="stat-cards">
        <div className="stat-card stat-purple">
          <p className="stat-label">
            Total Enquiries
          </p>

          <p className="stat-value">
            {stats.total}
          </p>

          <p className="stat-change">
            Contact +
            Consultation +
            Service
          </p>
        </div>

        <div className="stat-card stat-green">
          <p className="stat-label">
            Team Members
          </p>

          <p className="stat-value">
            {stats.team}
          </p>

          <p className="stat-change">
            Active Members
          </p>
        </div>

        <div className="stat-card stat-blue">
          <p className="stat-label">
            Total Partners
          </p>

          <p className="stat-value">
            {stats.partners}
          </p>

          <p className="stat-change">
            Registered
            Partners
          </p>
        </div>
      </div>

      {/* Recent Enquiries */}

      <div className="table-card">
        <div className="table-header">
          <h3>
            Recent Enquiries &
            Consultations
          </h3>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Type</th>
                <th>Message</th>
                <th>Status</th>
                <th>
                  Assigned To
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {combined.map(
                (e) => (
                  <tr key={e.unique_id}>
                    <td>
                      <div className="name-cell">
                        <div
                          className={`avatar-sm ${
                            e.type ===
                            "Consultation"
                              ? "av-alt"
                              : ""
                          }`}
                        >
                          {e.name
                            ?.split(
                              " "
                            )
                            .map(
                              (
                                n
                              ) =>
                                n[0]
                            )
                            .join(
                              ""
                            )}
                        </div>

                        {e.name}
                      </div>
                    </td>

                    <td className="muted">
                      {e.phone}
                    </td>

                    <td>
                      <span
                        className={`status-pill ${
                          e.type ===
                          "Contact"
                            ? "s-assigned"
                            : "s-pend"
                        }`}
                      >
                        {e.type}
                      </span>
                    </td>

                    <td className="muted truncate">
                      {e.message}
                    </td>

                    <td>
                      <span
                        className={`status-pill ${
                          statusClass[
                            e.status
                          ]
                        }`}
                      >
                        {e.status}
                      </span>
                    </td>

                    <td className="muted">
  {e.assignedTo || "—"}
</td>
                    

                    <td>
                      {e.status ===
                        "Pending" && (
                        <AssignDropdown
                          enquiryId={
                            e.unique_id
                          }
                          onAssign={
                            handleAssign
                          }
                          teamMembers={
                            teamMembers
                          }
                        />
                      )}

                      {e.status ===
                        "Assigned" && (
                        <button
                          className="btn-done"
                          onClick={() => markDone(e.unique_id)}
                        >
                          Mark
                          Done
                        </button>
                      )}

                      {e.status ===
                        "Done" && (
                        <span className="done-label">
                          ✔ Done
                        </span>
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;