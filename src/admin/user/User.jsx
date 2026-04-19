<<<<<<< HEAD
import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

export default function User() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Admin User",
      email: "admin@shop.com",
      role: "Admin",
      status: "active",
    },
    {
      id: 2,
      name: "Staff User",
      email: "staff@shop.com",
      role: "Staff",
      status: "active",
    },
    {
      id: 3,
      name: "Viewer User",
      email: "viewer@shop.com",
      role: "Viewer",
      status: "inactive",
    },
  ]);
=======
import { BASE_URL } from "../../config/api";
import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
       const res = await fetch(`${BASE_URL}/api/auth/users/admins`, {
          credentials: "include",
        });

        const data = await res.json();

        if (res.ok) {
          setUsers(data.users);
        } else {
          console.error(data.message);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

>>>>>>> 0270b5f (Add frontend code)

  const handleDelete = (id) => {
    if (!window.confirm("Delete this user?")) return;
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3 className="fw-bold mb-1">Users</h3>
            <p className="text-muted mb-0">Manage admin users</p>
          </div>
          <button className="btn btn-dark">Add User</button>
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
<<<<<<< HEAD
                      <td>{user.name}</td>
=======
                      <td>{user.username}</td>
>>>>>>> 0270b5f (Add frontend code)
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <span
                          className={`badge ${
<<<<<<< HEAD
                            user.status === "active"
=======
                            user.mstatus === "active"
>>>>>>> 0270b5f (Add frontend code)
                              ? "bg-success"
                              : "bg-secondary"
                          }`}
                        >
<<<<<<< HEAD
                          {user.status}
=======
                          {user.mstatus}
>>>>>>> 0270b5f (Add frontend code)
                        </span>
                      </td>
                      <td className="text-end">
                        <button className="btn btn-sm btn-outline-primary me-2">
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="btn btn-sm btn-outline-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}