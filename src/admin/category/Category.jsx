import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

export default function Category() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Skincare", slug: "skincare", status: "active" },
    { id: 2, name: "Makeup", slug: "makeup", status: "active" },
    { id: 3, name: "Fragrance", slug: "fragrance", status: "inactive" },
  ]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    // Replace with API call later
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete this category?");
    if (!confirmDelete) return;

    setCategories((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredCategories = categories.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
          <div>
            <h3 className="fw-bold mb-1">Categories</h3>
            <p className="text-muted mb-0">Manage cosmetic product categories</p>
          </div>

          <Link to="/admin/categories/add" className="btn btn-dark">
            Add Category
          </Link>
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search category..."
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
                    <th>Slug</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((category, index) => (
                      <tr key={category.id}>
                        <td>{index + 1}</td>
                        <td>{category.name}</td>
                        <td>{category.slug}</td>
                        <td>
                          <span
                            className={`badge ${
                              category.status === "active"
                                ? "bg-success"
                                : "bg-secondary"
                            }`}
                          >
                            {category.status}
                          </span>
                        </td>
                        <td className="text-end">
                          <Link
                            to={`/admin/categories/edit/${category.id}`}
                            className="btn btn-sm btn-outline-primary me-2"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDelete(category.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4 text-muted">
                        No categories found.
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