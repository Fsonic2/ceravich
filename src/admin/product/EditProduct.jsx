import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdminLayout from "../../layouts/AdminLayout";
import { BASE_URL } from "../../config/api";

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "active",
    prodinfo: "",
    image: null,
  });

  const [errors, setErrors] = useState({});

  // =========================
  // GET CATEGORIES
  // =========================
  const getCategories = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/product/categorylist`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await response.json();

    console.log(data);

    if (data.success) {
      setCategories(data.categoryall || []);
    }

  } catch (error) {
    console.log(error);
  }
};

  // =========================
  // FETCH PRODUCT
  // =========================
  const getProductById = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/product/getprodbyid/${id}`
      );

      if (data?.success) {
        const product = data.product;

        setForm({
          name: product.productname || "",
          category:
            product.category_id?.toString() || "",
          price: product.price || "",
          stock: product.stock || "",
          status: product.status || "active",
          prodinfo: product.prodinfo || "",
          image: product.image || null,
        });
      }

    } catch (error) {
      console.log(error);

      alert("Failed to fetch product");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // USE EFFECT
  // =========================
  useEffect(() => {
    getCategories();
    getProductById();
  }, []);

  // =========================
  // HANDLE CHANGE
  // =========================
  const handleChange = (e) => {
    const {
      name,
      value,
      files,
      type,
    } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "file"
          ? files[0]
          : value,
    }));
  };

  // =========================
  // VALIDATION
  // =========================
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name =
        "Product name is required";
    }

    if (!form.category) {
      newErrors.category =
        "Category is required";
    }

    if (
      !form.price ||
      form.price <= 0
    ) {
      newErrors.price =
        "Valid price is required";
    }

    if (
      !form.stock ||
      form.stock < 0
    ) {
      newErrors.stock =
        "Valid stock is required";
    }

    return newErrors;
  };

  // =========================
  // UPDATE PRODUCT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors =
      validate();

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors)
        .length > 0
    ) {
      return;
    }

    try {
      const storedUser =
        localStorage.getItem("user");

      const user = storedUser
        ? JSON.parse(storedUser)
        : null;

      const formData =
        new FormData();

      formData.append(
        "productname",
        form.name
      );

      formData.append(
        "category_id",
        form.category
      );

      formData.append(
        "price",
        form.price
      );

      formData.append(
        "stock",
        form.stock
      );

      formData.append(
        "status",
        form.status
      );

      formData.append(
        "prodinfo",
        form.prodinfo
      );

      formData.append(
        "UpdateBy",
        user?.username || "admin"
      );

      // IMAGE
      if (
        form.image &&
        typeof form.image !== "string"
      ) {
        formData.append(
          "image",
          form.image
        );
      }

      // API CALL
      const { data } =
        await axios.put(
          `${BASE_URL}/api/product/updateProd/${id}`,
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      if (data?.success) {
        alert(
          "Product updated successfully!"
        );

        navigate("/admin/products");
      }

    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data
          ?.message ||
          "Something went wrong"
      );
    }
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <AdminLayout>
        <div className="container-fluid">
          <h5>
            Loading product...
          </h5>
        </div>
      </AdminLayout>
    );
  }

  // =========================
  // IMAGE URL
  // =========================
  const imageUrl =
    typeof form.image === "string"
      ? `${BASE_URL}/uploads/${form.image}`
      : form.image
      ? URL.createObjectURL(
          form.image
        )
      : null;

  return (
    <AdminLayout>
      <div className="container-fluid">

        {/* HEADER */}
        <div className="mb-4">
          <h3 className="fw-bold">
            Edit Product
          </h3>

          <p className="text-muted">
            Update product details
          </p>
        </div>

        {/* CARD */}
        <div className="card shadow-sm border-0">
          <div className="card-body">

            <form
              onSubmit={handleSubmit}
            >

              {/* IMAGE SECTION */}
              <div className="text-center mb-5">

                <div
                  className="mx-auto shadow-sm border"
                  style={{
                    width: "220px",
                    height: "220px",
                    borderRadius:
                      "20px",
                    overflow: "hidden",
                    background:
                      "#f8f9fa",
                  }}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Product"
                      style={{
                        width:
                          "100%",
                        height:
                          "100%",
                        objectFit:
                          "cover",
                      }}
                    />
                  ) : (
                    <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                      No Image
                    </div>
                  )}
                </div>

                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="form-control mt-3 mx-auto"
                  style={{
                    maxWidth:
                      "350px",
                  }}
                  onChange={
                    handleChange
                  }
                />
              </div>

              {/* FORM */}
              <div className="row g-3">

                {/* PRODUCT NAME */}
                <div className="col-md-6">
                  <label className="form-label">
                    Product Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className={`form-control ${
                      errors.name
                        ? "is-invalid"
                        : ""
                    }`}
                    value={form.name}
                    onChange={
                      handleChange
                    }
                  />

                  <div className="invalid-feedback">
                    {errors.name}
                  </div>
                </div>

                {/* CATEGORY */}
                <div className="col-md-6">
                  <label className="form-label">
                    Category
                  </label>

                  <select
                    name="category"
                    className={`form-select ${
                      errors.category
                        ? "is-invalid"
                        : ""
                    }`}
                    value={
                      form.category
                    }
                    onChange={
                      handleChange
                    }
                  >
                    <option value="">
                      Select Category
                    </option>

                    {categories.map(
                      (cat) => (
                        <option
                          key={
                            cat.id
                          }
                          value={
                            cat.id
                          }
                        >
                          {
                            cat.catname
                          }
                        </option>
                      )
                    )}
                  </select>

                  <div className="invalid-feedback">
                    {
                      errors.category
                    }
                  </div>
                </div>

                {/* PRICE */}
                <div className="col-md-6">
                  <label className="form-label">
                    Price
                  </label>

                  <input
                    type="number"
                    name="price"
                    className={`form-control ${
                      errors.price
                        ? "is-invalid"
                        : ""
                    }`}
                    value={form.price}
                    onChange={
                      handleChange
                    }
                  />

                  <div className="invalid-feedback">
                    {errors.price}
                  </div>
                </div>

                {/* STOCK */}
                <div className="col-md-6">
                  <label className="form-label">
                    Stock
                  </label>

                  <input
                    type="number"
                    name="stock"
                    className={`form-control ${
                      errors.stock
                        ? "is-invalid"
                        : ""
                    }`}
                    value={form.stock}
                    onChange={
                      handleChange
                    }
                  />

                  <div className="invalid-feedback">
                    {errors.stock}
                  </div>
                </div>

                {/* STATUS */}
                <div className="col-md-6">
                  <label className="form-label">
                    Status
                  </label>

                  <select
                    name="status"
                    className="form-select"
                    value={
                      form.status
                    }
                    onChange={
                      handleChange
                    }
                  >
                    <option value="active">
                      Active
                    </option>

                    <option value="inactive">
                      Inactive
                    </option>
                  </select>
                </div>

                {/* DESCRIPTION */}
                <div className="col-12">
                  <label className="form-label">
                    Description
                  </label>

                  <textarea
                    name="prodinfo"
                    className="form-control"
                    rows="4"
                    value={
                      form.prodinfo
                    }
                    onChange={
                      handleChange
                    }
                  />
                </div>

                {/* BUTTONS */}
                <div className="col-12 mt-3">
                  <button
                    type="submit"
                    className="btn btn-dark me-2"
                  >
                    Update Product
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      navigate(
                        "/admin/products"
                      )
                    }
                  >
                    Cancel
                  </button>
                </div>

              </div>
            </form>

          </div>
        </div>

      </div>
    </AdminLayout>
  );
}