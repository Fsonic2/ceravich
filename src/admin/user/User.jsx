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
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <span
                          className={`badge ${
                            user.mstatus === "active"
                              ? "bg-success"
                              : "bg-secondary"
                          }`}
                        >
                          {user.mstatus}
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