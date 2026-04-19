<<<<<<< HEAD
=======
import { BASE_URL } from "../../config/api";
>>>>>>> 0270b5f (Add frontend code)
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

export default function Category() {
<<<<<<< HEAD
  const [categories, setCategories] = useState([
    { id: 1, name: "Skincare", slug: "skincare", status: "active" },
    { id: 2, name: "Makeup", slug: "makeup", status: "active" },
    { id: 3, name: "Fragrance", slug: "fragrance", status: "inactive" },
  ]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    // Replace with API call later
=======
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${BASE_URL}/api/product/categorylist`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch categories");
      }

      setCategories(data.categoryall || []);
    } catch (error) {
      console.error("Fetch categories error:", error);
      setMessage(error.message || "Error fetching categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
>>>>>>> 0270b5f (Add frontend code)
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete this category?");
    if (!confirmDelete) return;

    setCategories((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredCategories = categories.filter((item) =>
<<<<<<< HEAD
    item.name.toLowerCase().includes(search.toLowerCase())
=======
    (item.catname || item.name || "")
      .toLowerCase()
      .includes(search.toLowerCase())
>>>>>>> 0270b5f (Add frontend code)
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

<<<<<<< HEAD
=======
        {message && <div className="alert alert-danger">{message}</div>}

>>>>>>> 0270b5f (Add frontend code)
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
<<<<<<< HEAD
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((category, index) => (
                      <tr key={category.id}>
                        <td>{index + 1}</td>
                        <td>{category.name}</td>
                        <td>{category.slug}</td>
=======
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        Loading...
                      </td>
                    </tr>
                  ) : filteredCategories.length > 0 ? (
                    filteredCategories.map((category, index) => (
                      <tr key={category.id || category.cat_id}>
                        <td>{index + 1}</td>
                        <td>{category.catname || category.name}</td>
                        <td>{category.slug || "-"}</td>
>>>>>>> 0270b5f (Add frontend code)
                        <td>
                          <span
                            className={`badge ${
                              category.status === "active"
                                ? "bg-success"
                                : "bg-secondary"
                            }`}
                          >
<<<<<<< HEAD
                            {category.status}
=======
                            {category.status || "inactive"}
>>>>>>> 0270b5f (Add frontend code)
                          </span>
                        </td>
                        <td className="text-end">
                          <Link
<<<<<<< HEAD
                            to={`/admin/categories/edit/${category.id}`}
=======
                            to={`/admin/categories/edit/${category.id || category.cat_id}`}
>>>>>>> 0270b5f (Add frontend code)
                            className="btn btn-sm btn-outline-primary me-2"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-sm btn-outline-danger"
<<<<<<< HEAD
                            onClick={() => handleDelete(category.id)}
=======
                            onClick={() =>
                              handleDelete(category.id || category.cat_id)
                            }
>>>>>>> 0270b5f (Add frontend code)
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