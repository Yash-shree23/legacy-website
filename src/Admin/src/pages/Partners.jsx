
// import { useState, useRef } from "react";
// import "./Partners.css";

// const initialPartners = [
//   { id: 1, name: "Mehta & Associates", logo: null, industry: "Legal",   contact: "Rajesh Mehta",  phone: "+91 98765 43210", email: "rajesh@mehta.com",         website: "www.mehta.com"          },
//   { id: 2, name: "Kapoor Legal LLP",   logo: null, industry: "Legal",   contact: "Sunita Kapoor", phone: "+91 87654 32109", email: "sunita@kapoorlegal.com",   website: "www.kapoorlegal.com"    },
//   { id: 3, name: "Patil Financial",    logo: null, industry: "Finance", contact: "Vivek Patil",   phone: "+91 76543 21098", email: "vivek@patilfinancial.com", website: "www.patilfinancial.com" },
//   { id: 4, name: "Desai Consultants",  logo: null, industry: "Tax",     contact: "Anjali Desai",  phone: "+91 65432 10987", email: "anjali@desaiconsult.com",  website: "www.desaiconsult.com"   },
// ];

// const avatarColors = ["av-purple", "av-green", "av-blue", "av-orange", "av-teal"];
// const getInitials  = (name) => name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
// const getColor     = (i)    => avatarColors[i % avatarColors.length];

// const empty = { name: "", industry: "", contact: "", phone: "", email: "", website: "", logo: null, logoPreview: null };

// function Partners() {
//   const [partners, setPartners] = useState(initialPartners);
//   const [form, setForm]         = useState(empty);
//   const [errors, setErrors]     = useState({});
//   const [search, setSearch]     = useState("");
//   const [editId, setEditId]     = useState(null);
//   const [toast, setToast]       = useState("");
//   const fileRef                 = useRef();

//   const flash = (msg) => { setToast(msg); setTimeout(() => setToast(""), 3000); };

//   const validate = () => {
//     const e = {};
//     if (!form.name.trim())    e.name    = "Company name is required";
//     if (!form.contact.trim()) e.contact = "Contact person is required";
//     if (!form.phone.trim())   e.phone   = "Phone is required";
//     if (!form.email.trim())   e.email   = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
//     return e;
//   };

//   const handleLogo = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = (ev) =>
//       setForm((f) => ({ ...f, logo: file, logoPreview: ev.target.result }));
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errs = validate();
//     if (Object.keys(errs).length) { setErrors(errs); return; }
//     setErrors({});
//     if (editId !== null) {
//       setPartners((prev) => prev.map((p) => (p.id === editId ? { ...form, id: editId } : p)));
//       flash("Partner updated!");
//       setEditId(null);
//     } else {
//       setPartners((prev) => [{ ...form, id: Date.now() }, ...prev]);
//       flash("Partner added!");
//     }
//     setForm(empty);
//     if (fileRef.current) fileRef.current.value = "";
//   };

//   const handleEdit = (p) => {
//     setForm({
//       name: p.name, industry: p.industry, contact: p.contact,
//       phone: p.phone, email: p.email, website: p.website,
//       logo: p.logo, logoPreview: p.logoPreview || null,
//     });
//     setEditId(p.id);
//     setErrors({});
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Remove this partner?")) {
//       setPartners((prev) => prev.filter((p) => p.id !== id));
//       flash("Partner removed.");
//     }
//   };

//   const handleCancel = () => { setForm(empty); setEditId(null); setErrors({}); };

//   const filtered = partners.filter((p) =>
//     [p.name, p.industry, p.contact, p.phone, p.email, p.website]
//       .some((f) => f && f.toLowerCase().includes(search.toLowerCase()))
//   );

//   return (
//     <div className="partners-content">

//       {toast && <div className="toast">{toast}</div>}

//       {/* ── Form ── */}
//       <p className="section-label">{editId ? "Edit partner" : "Add new partner"}</p>
//       <div className="form-card">
//         <form onSubmit={handleSubmit} noValidate>

//           {/* Logo upload */}
//           <div className="logo-row">
//             <div className="logo-preview" onClick={() => fileRef.current.click()}>
//               {form.logoPreview
//                 ? <img src={form.logoPreview} alt="logo preview" />
//                 : <span className="logo-placeholder">+ Logo</span>}
//             </div>
//             <input
//               ref={fileRef}
//               type="file"
//               accept="image/*"
//               style={{ display: "none" }}
//               onChange={handleLogo}
//             />
//             <div className="logo-hint">
//               <p className="logo-hint-title">Company logo</p>
//               <p className="logo-hint-sub">Click the box to upload. PNG, JPG accepted.</p>
//             </div>
//           </div>

//           {/* Row 1 */}
//           <div className="form-row">
//             <div className="form-group">
//               <label>Company name *</label>
//               <input
//                 type="text"
//                 placeholder="e.g. Mehta & Associates"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//               />
//               {errors.name && <span className="err">{errors.name}</span>}
//             </div>
//             <div className="form-group">
//               <label>Industry / Type</label>
//               <input
//                 type="text"
//                 placeholder="e.g. Legal, Finance, Real Estate"
//                 value={form.industry}
//                 onChange={(e) => setForm({ ...form, industry: e.target.value })}
//               />
//             </div>
//           </div>

//           {/* Row 2 */}
//           <div className="form-row">
//             <div className="form-group">
//               <label>Contact person *</label>
//               <input
//                 type="text"
//                 placeholder="e.g. Rajesh Mehta"
//                 value={form.contact}
//                 onChange={(e) => setForm({ ...form, contact: e.target.value })}
//               />
//               {errors.contact && <span className="err">{errors.contact}</span>}
//             </div>
//             <div className="form-group">
//               <label>Phone number *</label>
//               <input
//                 type="tel"
//                 placeholder="+91 XXXXX XXXXX"
//                 value={form.phone}
//                 onChange={(e) => setForm({ ...form, phone: e.target.value })}
//               />
//               {errors.phone && <span className="err">{errors.phone}</span>}
//             </div>
//             <div className="form-group">
//               <label>Email address *</label>
//               <input
//                 type="email"
//                 placeholder="e.g. contact@company.com"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//               />
//               {errors.email && <span className="err">{errors.email}</span>}
//             </div>
//           </div>

//           <div className="form-actions">
//             <button type="submit" className="btn-primary">
//               {editId ? "✔ Update Partner" : "+ Add Partner"}
//             </button>
//             {editId && (
//               <button type="button" className="btn-cancel" onClick={handleCancel}>
//                 Cancel
//               </button>
//             )}
//           </div>

//         </form>
//       </div>

//       {/* ── List ── */}
//       <p className="section-label">All partners ({filtered.length})</p>
//       <div className="list-card">
//         <div className="list-header">
//           <span className="list-title">Partners list</span>
//           <div className="search-box">
//             <span>🔍</span>
//             <input
//               type="text"
//               placeholder="Search by name, contact, industry…"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         </div>

//         {filtered.length === 0 ? (
//           <div className="empty-state">No partners found.</div>
//         ) : (
//           <div className="table-wrapper">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Company</th>
//                   <th>Industry</th>
//                   <th>Contact person</th>
//                   <th>Phone</th>
//                   <th>Email</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filtered.map((p, i) => (
//                   <tr key={p.id}>
//                     <td>
//                       <div className="company-cell">
//                         <div className={`logo-thumb ${getColor(i)}`}>
//                           {p.logoPreview
//                             ? <img src={p.logoPreview} alt={p.name} />
//                             : getInitials(p.name)}
//                         </div>
//                         <span className="company-name">{p.name}</span>
//                       </div>
//                     </td>
//                     <td><span className="industry-tag">{p.industry || "—"}</span></td>
//                     <td className="muted">{p.contact}</td>
//                     <td className="muted">{p.phone}</td>
//                     <td className="muted">{p.email}</td>
//                     <td>
//                       <div className="actions">
//                         <button className="act-edit"   onClick={() => handleEdit(p)}      title="Edit">✏</button>
//                         <button className="act-delete" onClick={() => handleDelete(p.id)} title="Delete">🗑</button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//     </div>
//   );
// }

// export default Partners;

// Partners.jsx
import { useState, useRef, useEffect } from "react";
import "./Partners.css";

const avatarColors = [
  "av-purple",
  "av-green",
  "av-blue",
  "av-orange",
  "av-teal",
];

const getInitials = (name = "") =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const getColor = (i) => avatarColors[i % avatarColors.length];

const empty = {
  name: "",
  industry: "",
  contact: "",
  phone: "",
  email: "",
  logo: null,
  logoPreview: null,
};

function Partners() {
  const [partners, setPartners] = useState([]);
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const fileRef = useRef();

  const flash = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const response = await fetch(
        // "http://localhost:8080/api/partners"
        "https://hpclsparesportal.in/legacy-backend/public/api/partners"
      );

      const data = await response.json();

      setPartners(data);
    } catch (error) {
      console.error(error);
    }
  };

  const validate = () => {
    const e = {};

    if (!form.name.trim())
      e.name = "Company name is required";

    if (!form.contact.trim())
      e.contact = "Contact person is required";

    if (!form.phone.trim())
      e.phone = "Phone number is required";

    if (!form.email.trim())
      e.email = "Email is required";

    return e;
  };

  const handleLogo = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (ev) => {
      setForm((prev) => ({
        ...prev,
        logo: file,
        logoPreview: ev.target.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    try {
      const formData = new FormData();

      formData.append("company_name", form.name);
      formData.append("industry_type", form.industry);
      formData.append("contact_person", form.contact);
      formData.append("phone_number", form.phone);
      formData.append("email_address", form.email);

      if (form.logo) {
        formData.append("logo", form.logo);
      }

      const response = await fetch(
        // "http://localhost:8080/api/partners",
        "https://hpclsparesportal.in/legacy-backend/public/api/partners",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.status) {
        flash("Partner added successfully");

        setForm(empty);

        if (fileRef.current) {
          fileRef.current.value = "";
        }

        fetchPartners();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this partner?")) return;

    try {
      await fetch(
        // `http://localhost:8080/api/partners/${id}`,
        `https://hpclsparesportal.in/legacy-backend/public/api/partners/${id}`,
        {
          method: "DELETE",
        }
      );

      flash("Partner deleted");

      fetchPartners();
    } catch (error) {
      console.error(error);
    }
  };

  const filtered = partners.filter((p) =>
    [
      p.company_name,
      p.industry_type,
      p.contact_person,
      p.phone_number,
      p.email_address,
    ].some(
      (f) =>
        f &&
        f.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="partners-content">

      {toast && <div className="toast">{toast}</div>}

      <p className="section-label">
        Add New Partner
      </p>

      <div className="form-card">
        <form onSubmit={handleSubmit}>

          <div className="logo-row">
            <div
              className="logo-preview"
              onClick={() =>
                fileRef.current.click()
              }
            >
              {form.logoPreview ? (
                <img
                  src={form.logoPreview}
                  alt="logo"
                />
              ) : (
                <span className="logo-placeholder">
                  + Logo
                </span>
              )}
            </div>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleLogo}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Company Name</label>

              <input
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />

              {errors.name && (
                <span className="err">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Industry Type</label>

              <input
                value={form.industry}
                onChange={(e) =>
                  setForm({
                    ...form,
                    industry: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Contact Person</label>

              <input
                value={form.contact}
                onChange={(e) =>
                  setForm({
                    ...form,
                    contact: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <input
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
          >
            Add Partner
          </button>

        </form>
      </div>

      <p className="section-label">
        All Partners ({filtered.length})
      </p>

      <div className="list-card">

        <div className="list-header">
          <span className="list-title">
            Partners List
          </span>

          <div className="search-box">
            <input
              placeholder="Search..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Industry</th>
                <th>Contact</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((p, i) => (
                <tr key={p.id}>
                  <td>
                    <div className="company-cell">

                      <div
                        className={`logo-thumb ${getColor(
                          i
                        )}`}
                      >
                        {p.logo ? (
                          <img
                            // src={`http://localhost:8080/uploads/partners/${p.logo}`}
                            src={`https://hpclsparesportal.in/legacy-backend/public/uploads/partners/${p.logo}`}
                            alt={
                              p.company_name
                            }
                          />
                        ) : (
                          getInitials(
                            p.company_name
                          )
                        )}
                      </div>

                      <span className="company-name">
                        {p.company_name}
                      </span>

                    </div>
                  </td>

                  <td>{p.industry_type}</td>

                  <td>{p.contact_person}</td>

                  <td>{p.phone_number}</td>

                  <td>{p.email_address}</td>

                  <td>
                    <button
                      className="act-delete"
                      onClick={() =>
                        handleDelete(p.id)
                      }
                    >
                      🗑
                    </button>
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

export default Partners;