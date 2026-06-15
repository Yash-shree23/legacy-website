import { useEffect, useState } from "react";
import "../pages/Dashboard.css";
import {
  AssignDropdown,
  statusClass,
} from "../pages/Dashboard";

function ConsultationsPage() {
  const [consultations, setConsultations] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [toast, setToast] = useState("");
  const [filter, setFilter] = useState("All");

  const flash = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  useEffect(() => {
    fetchConsultations();
    fetchTeamMembers();
  }, []);

  const fetchConsultations = async () => {
    try {
      const res = await fetch(
        "http://localhost:8080/api/consultations/all"
      );

      const data = await res.json();

      setConsultations(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTeamMembers = async () => {
    try {
      const res = await fetch(
        "http://localhost:8080/api/team"
      );

      const data = await res.json();

      setTeamMembers(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAssign = async (
    uniqueId,
    member
  ) => {
    try {
      await fetch(
        "http://localhost:8080/api/enquiry/assign",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            enquiry_unique_id:
              uniqueId,
            enquiry_type:
              uniqueId.startsWith(
                "contact_"
              )
                ? "Contact"
                : "Consultation",
            team_member_id:
              member.id,
          }),
        }
      );

      flash(
        `Assigned to ${member.name}`
      );

      fetchConsultations();
    } catch (err) {
      console.error(err);
    }
  };

  const markDone = async (
    uniqueId
  ) => {
    try {
      await fetch(
        "http://localhost:8080/api/enquiry/status",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            enquiry_unique_id:
              uniqueId,
            status: "Done",
          }),
        }
      );

      flash(
        "Marked as done"
      );

      fetchConsultations();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredConsultations =
    filter === "All"
      ? consultations
      : consultations.filter(
          (c) =>
            c.status === filter
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

          <h3>
            Contact &
            Consultation Requests
          </h3>

          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems:
                "center",
            }}
          >
            <span className="muted">
              {
                filteredConsultations.length
              }{" "}
              total
            </span>

            <select
              value={filter}
              onChange={(e) =>
                setFilter(
                  e.target.value
                )
              }
            >
              <option value="All">
                All
              </option>
              <option value="Pending">
                Pending
              </option>
              <option value="Assigned">
                Assigned
              </option>
              <option value="Done">
                Done
              </option>
            </select>
          </div>
        </div>

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Status</th>
                <th>
                  Assigned To
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredConsultations.map(
                (c) => (
                  <tr
                    key={
                      c.unique_id
                    }
                  >

                    <td>
                      <span
                        className={`status-pill ${
                          c.enquiry_type ===
                          "Contact"
                            ? "s-pend"
                            : "s-assigned"
                        }`}
                      >
                        {
                          c.enquiry_type
                        }
                      </span>
                    </td>

                    <td>
                      <div className="name-cell">
                        <div className="avatar-sm av-alt">
                          {c.name
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

                        {c.name}
                      </div>
                    </td>

                    <td className="muted">
                      {c.phone}
                    </td>

                    <td className="muted truncate">
                      {c.message}
                    </td>

                    <td>
                      <span
                        className={`status-pill ${
                          statusClass[
                            c.status
                          ]
                        }`}
                      >
                        {
                          c.status
                        }
                      </span>
                    </td>

                    <td className="muted">
                      {c.assignedTo ||
                        "—"}
                    </td>

                    <td>

                      {c.status ===
                        "Pending" && (
                        <AssignDropdown
                          enquiryId={
                            c.unique_id
                          }
                          onAssign={
                            handleAssign
                          }
                          teamMembers={
                            teamMembers
                          }
                        />
                      )}

                      {c.status ===
                        "Assigned" && (
                        <button
                          className="btn-done"
                          onClick={() =>
                            markDone(
                              c.unique_id
                            )
                          }
                        >
                          Mark
                          Done
                        </button>
                      )}

                      {c.status ===
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

export default ConsultationsPage;