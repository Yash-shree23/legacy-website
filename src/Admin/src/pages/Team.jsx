import React, { useState, useEffect } from "react";
import "./team.css";

const API = "http://localhost:8080/api/team";

const Team = () => {
    const [members, setMembers] = useState([]);

    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [editId, setEditId] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        role: "",
        phone: "",
        email: "",
        description: "",
        image: "",
    });

    // ── Fetch all members from database ──
   const fetchMembers = async () => {
    try {
        const res  = await fetch(API);
        const data = await res.json();

        // Make sure data is always an array
        setMembers(Array.isArray(data) ? data : []);
    } catch (err) {
        console.error("Fetch error:", err);
        setMembers([]);
    }
};

    // Load members when page opens
    useEffect(() => {
        fetchMembers();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const openAddModal = () => {
        setEditId(null);

        setFormData({
            name: "",
            role: "",
            phone: "",
            email: "",
            description: "",
            image: "",
        });

        setShowModal(true);
    };

    const openEditModal = (member) => {
        setEditId(member.id);
        setFormData(member);
        setShowModal(true);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);

            setFormData({
                ...formData,
                image: imageUrl,
            });
        }
    };

    // ── Add or Update member in database ──
   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        console.log("Status:", response.status);

        const result = await response.text();
        console.log("Response:", result);

    } catch (err) {
        console.error(err);
    }
};
    const filteredMembers = members.filter((member) =>
        member.name.toLowerCase().includes(search.toLowerCase())
    );

    // ── Delete member from database ──
    const handleDelete = async (id) => {
        if (!window.confirm("Delete this member?")) return;

        try {
            await fetch(`${API}/${id}`, {
                method: "DELETE",
            });

            // Refresh list from database
            fetchMembers();

        } catch (error) {
            console.error("Delete Error:", error);
        }
    };

    return (
        <div className="team-page">
            <div className="team-banner">
                <div>
                    <h1>Team Management</h1>
                    <p>Manage all team members from one place.</p>
                </div>

                <button
                    className="add-member-btn"
                    onClick={openAddModal}
                >
                    + Add Member
                </button>
            </div>

            <div className="search-section">
                <input
                    type="text"
                    placeholder="Search team member..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="team-grid">
                {filteredMembers.map((member) => (
                    <div className="member-card" key={member.id}>
                        <div className="card-top">
                            <img
                                src={member.image || "https://i.pravatar.cc/300?img=1"}
                                alt={member.name}
                            />
                        </div>

                        <div className="card-content">
                            <h3>{member.name}</h3>

                            <span className="role">
                                {member.role}
                            </span>

                            <div className="contact-info">
                                <div className="contact-item">
                                    📞 {member.phone}
                                </div>

                                <div className="contact-item">
                                    ✉ {member.email}
                                </div>
                            </div>

                            <div className="description-box">
                                {member.description}
                            </div>

                            <div className="action-buttons">

                                <button
                                    className="edit-btn"
                                    onClick={() => openEditModal(member)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(member.id)}
                                >
                                    Delete
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <div className="modal-header">
                            <h2>
                                {editId
                                    ? "Edit Team Member"
                                    : "Add Team Member"}
                            </h2>

                            <button
                                className="close-btn"
                                onClick={() => setShowModal(false)}
                            >
                                ×
                            </button>
                        </div>

                        <form
                            className="member-form"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="role"
                                placeholder="Role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <div className="image-upload-section">

                                <label className="upload-label">
                                    Upload Profile Image
                                </label>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />

                                {formData.image && (
                                    <img
                                        src={formData.image}
                                        alt="Preview"
                                        className="image-preview"
                                    />
                                )}

                            </div>

                            <textarea
                                rows="4"
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleChange}
                            />

                            <button
                                type="submit"
                                className="save-btn"
                            >
                                {editId
                                    ? "Update Member"
                                    : "Add Member"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Team;