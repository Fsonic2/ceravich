import { useState, useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { BASE_URL } from "../config/api";

export default function Dashboard() {
  // ── Products ──
  const [totalProducts, setTotalProducts] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  // ── Customers ──
  const [totalCustomers, setTotalCustomers] = useState(null);
  const [loadingCustomers, setLoadingCustomers] = useState(true);

  // ✅ useEffect 1 — fetch product count
  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/product/listproducts`, {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error — status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Product count data:", data);

        if (data.success) {
          setTotalProducts(data.count);
        }
      } catch (error) {
        console.error("Fetch error:", error.message);
        setFetchError(error.message);
        setTotalProducts("N/A");
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProductCount();
  }, []);

  // ✅ useEffect 2 — fetch customer count
  useEffect(() => {
    const fetchCustomerCount = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/auth/users/customers/count`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await response.json();
        console.log("Customer count data:", data);

        if (data.success) {
          setTotalCustomers(data.count);
        }
      } catch (error) {
        console.error("Customer count error:", error);
        setTotalCustomers("N/A");
      } finally {
        setLoadingCustomers(false);
      }
    };

    fetchCustomerCount();
  }, []);

  return (
    <AdminLayout>
      <div className="container-fluid">

        {/* HEADER */}
        <div className="mb-4">
          <h3 className="fw-bold">💄 Admin Dashboard</h3>
          <p className="text-muted">
            Manage your cosmetic shop, track sales, and monitor performance.
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="row g-4 mb-4">

          {/* ── LIVE: Total Products ── */}
          <div className="col-md-3">
            <div className="card shadow-sm border-0 p-3">
              <h6 className="text-muted">Total Products</h6>
              <h3 className="fw-bold">
                {loadingProducts ? (
                  <span
                    className="spinner-border spinner-border-sm text-secondary"
                    role="status"
                  />
                ) : (
                  totalProducts
                )}
              </h3>
              {fetchError ? (
                <small className="text-danger">{fetchError}</small>
              ) : (
                <small className="text-success"></small>
              )}
            </div>
          </div>

          {/* Orders */}
          <div className="col-md-3">
            <div className="card shadow-sm border-0 p-3">
              <h6 className="text-muted">Orders</h6>
              <h3 className="fw-bold">45</h3>
              <small className="text-success">+5 today</small>
            </div>
          </div>

          {/* ── LIVE: Total Customers ── */}
          <div className="col-md-3">
            <div className="card shadow-sm border-0 p-3">
              <h6 className="text-muted">Customers</h6>
              <h3 className="fw-bold">
                {loadingCustomers ? (
                  <span
                    className="spinner-border spinner-border-sm text-secondary"
                    role="status"
                  />
                ) : (
                  totalCustomers
                )}
              </h3>
              <small className="text-success"></small>
            </div>
          </div>

          {/* Revenue */}
          <div className="col-md-3">
            <div className="card shadow-sm border-0 p-3">
              <h6 className="text-muted">Revenue</h6>
              <h3 className="fw-bold">₦850,000</h3>
              <small className="text-success">+10% growth</small>
            </div>
          </div>
        </div>

        {/* RECENT ORDERS */}
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-header bg-white fw-bold">Recent Orders</div>
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jane Doe</td>
                  <td>Lipstick</td>
                  <td><span className="badge bg-success">Paid</span></td>
                  <td>₦15,000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mary Smith</td>
                  <td>Face Cream</td>
                  <td>
                    <span className="badge bg-warning text-dark">Pending</span>
                  </td>
                  <td>₦25,000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>John Paul</td>
                  <td>Perfume</td>
                  <td><span className="badge bg-danger">Cancelled</span></td>
                  <td>₦30,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4 text-center">
              <h5>Add Product</h5>
              <p className="text-muted">Add new cosmetic items</p>
              <a href="/admin/products/create" className="btn btn-dark">
                Add Product
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4 text-center">
              <h5>Manage Orders</h5>
              <p className="text-muted">View and process orders</p>
              <a href="/admin/orders" className="btn btn-dark">View Orders</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4 text-center">
              <h5>Customers</h5>
              <p className="text-muted">Manage your customers</p>
              <a href="/admin/customers" className="btn btn-dark">
                View Customers
              </a>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}