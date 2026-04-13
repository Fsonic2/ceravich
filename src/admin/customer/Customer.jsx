import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

export default function Customer() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "08012345678",
      status: "active",
    },
    {
      id: 2,
      name: "Mary Smith",
      email: "mary@example.com",
      phone: "08087654321",
      status: "active",
    },
    {
      id: 3,
      name: "John Paul",
      email: "john@example.com",
      phone: "08123456789",
      status: "inactive",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredCustomers = useMemo(() => {
    return customers.filter((item) => {
      const keyword = search.toLowerCase();
      return (
        item.name.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword) ||
        item.phone.toLowerCase().includes(keyword) ||
        item.status.toLowerCase().includes(keyword)
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
            <p className="text-muted mb-0">Manage shop customers</p>
          </div>
          <Link to="/admin/customers/add" className="btn btn-dark">
            Add Customer
          </Link>
        </div>

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
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.length > 0 ? (
                    filteredCustomers.map((customer, index) => (
                      <tr key={customer.id}>
                        <td>{index + 1}</td>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>
                          <span
                            className={`badge ${
                              customer.status === "active"
                                ? "bg-success"
                                : "bg-secondary"
                            }`}
                          >
                            {customer.status}
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
                      <td colSpan="6" className="text-center py-4 text-muted">
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