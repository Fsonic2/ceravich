import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { BASE_URL } from "../../config/api";

export default function Customer() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(`${BASE_URL}/api/auth/users/customers`, {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      console.log("Customers data:", data);

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch customers");
      }

      if (data.success) {
        setCustomers(data.users || []);
      }
    } catch (error) {
      console.error("Fetch customers error:", error);
      setMessage(error.message || "Error fetching customers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const filteredCustomers = useMemo(() => {
    return customers.filter((item) => {
      const keyword = search.toLowerCase();
      return (
        (item.username || item.name || "").toLowerCase().includes(keyword) ||
        (item.email || "").toLowerCase().includes(keyword) ||
        (item.phone || "").toLowerCase().includes(keyword) ||
        (item.contactaddr || "").toLowerCase().includes(keyword) ||
        (item.shippingaddr || "").toLowerCase().includes(keyword) ||
        (item.role || "").toLowerCase().includes(keyword)
      );
    });
  }, [customers, search]);

  const handleDelete = (id) => {
    if (!window.confirm("Delete this customer?")) return;
    setCustomers((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <div>
            <h3 className="fw-bold mb-1">Customers</h3>
            <p className="text-muted mb-0">
              Manage shop customers
              {!loading && (
                <span className="ms-2 text-success fw-semibold">
                  ({customers.length} total)
                </span>
              )}
            </p>
          </div>
          <Link to="/admin/customers/add" className="btn btn-dark">
            Add Customer
          </Link>
        </div>

        {message && (
          <div
            className={`alert ${
              message.includes("successfully") ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search customer..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Contact Address</th>
                    <th>Shipping Address</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="9" className="text-center py-4 text-muted">
                        Loading customers...
                      </td>
                    </tr>
                  ) : filteredCustomers.length > 0 ? (
                    filteredCustomers.map((customer, index) => (
                      <tr key={customer.id}>
                        <td>{index + 1}</td>
                        <td>{customer.username || customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone || "—"}</td>

                        {/* ✅ Contact Address from DB column contactaddr */}
                        <td>{customer.contactaddr || "—"}</td>

                        {/* ✅ Shipping Address from DB column shippingaddr */}
                        <td>{customer.shippingaddr || "—"}</td>

                        <td>
                          <span className="badge bg-info text-dark">
                            {customer.role || "customer"}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              customer.status === "active" || !customer.status
                                ? "bg-success"
                                : "bg-secondary"
                            }`}
                          >
                            {customer.status || "active"}
                          </span>
                        </td>
                        <td className="text-end">
                          <Link
                            to={`/admin/customers/edit/${customer.id}`}
                            className="btn btn-sm btn-outline-primary me-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(customer.id)}
                            className="btn btn-sm btn-outline-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center py-4 text-muted">
                        No customers found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}