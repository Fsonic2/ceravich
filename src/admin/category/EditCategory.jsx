import { BASE_URL } from "../../config/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

export default function EditCategory() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    status: "active",
  });

  const [fetching, setFetching] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      fetchCategoryById();
    }
  }, [id]);

  const fetchCategoryById = async () => {
    try {
      setFetching(true);
      setMessage("");

      const url = `${BASE_URL}/api/product/getcatbyid/${id}`;
      console.log("Fetching:", url);

      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      const rawText = await response.text();
      console.log("Raw response:", rawText);

      let data = {};
      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch {
        throw new Error(`Server did not return JSON. Response was: ${rawText}`);
      }

      if (!response.ok) {
        throw new Error(data?.message || "Failed to fetch category");
      }

      setForm({
        name: data?.category?.catname || "",
        status: Number(data?.category?.status) === 1 ? "active" : "inactive",
      });
    } catch (error) {
      console.error("Fetch category error:", error);
      setMessage(error?.message || "Error fetching category");
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Category name is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setSubmitting(true);
      setMessage("");

      const response = await fetch(`${BASE_URL}/api/product/updateCat/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          catname: form.name.trim(),
          status: form.status,
          UpdateBy: user.username, // or logged-in user id
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.message || "Failed to update category");
      }

      navigate("/admin/categories");
    } catch (error) {
      console.error("Update category error:", error);
      setMessage(error?.message || "Error updating category");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="mb-4">
          <h3 className="fw-bold mb-1">Edit Category</h3>
          <p className="text-muted">Update category information</p>
        </div>

        {message && <div className="alert alert-danger">{message}</div>}

        <div className="card shadow-sm border-0">
          <div className="card-body">
            {fetching ? (
              <p>Loading category...</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Category Name</label>
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter category name"
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Status</label>
                    <select
                      name="status"
                      className="form-select"
                      value={form.status}
                      onChange={handleChange}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>

                  <div className="col-12 mt-3">
                    <button
                      type="submit"
                      className="btn btn-dark me-2"
                      disabled={submitting}
                    >
                      {submitting ? "Updating..." : "Update Category"}
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => navigate("/admin/categories")}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}