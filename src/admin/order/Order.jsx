import { useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

export default function Order() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      order_number: "ORD-1001",
      customer_name: "Jane Doe",
      phone: "08012345678",
      total_amount: 15000,
      payment_status: "paid",
      order_status: "processing",
      date: "2026-04-13",
    },
    {
      id: 2,
      order_number: "ORD-1002",
      customer_name: "Mary Smith",
      phone: "08087654321",
      total_amount: 25000,
      payment_status: "pending",
      order_status: "pending",
      date: "2026-04-12",
    },
    {
      id: 3,
      order_number: "ORD-1003",
      customer_name: "John Paul",
      phone: "08123456789",
      total_amount: 30000,
      payment_status: "paid",
      order_status: "delivered",
      date: "2026-04-11",
    },
  ]);

  const [search, setSearch] = useState("");

  // SIMPLE FILTER (no useMemo)
  const filteredOrders = orders.filter((item) =>
    item.order_number.toLowerCase().includes(search.toLowerCase()) ||
    item.customer_name.toLowerCase().includes(search.toLowerCase()) ||
    item.phone.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    if (!window.confirm("Delete this order?")) return;
    setOrders(orders.filter((item) => item.id !== id));
  };

  const getPaymentBadge = (status) => {
    if (status === "paid") return "bg-success";
    if (status === "pending") return "bg-warning text-dark";
    return "bg-danger";
  };

  const getOrderBadge = (status) => {
    if (status === "delivered") return "bg-success";
    if (status === "processing") return "bg-info text-dark";
    if (status === "pending") return "bg-warning text-dark";
    return "bg-secondary";
  };

  return (
    <AdminLayout>
      <div className="container-fluid">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <div>
            <h3 className="fw-bold mb-1">Orders</h3>
            <p className="text-muted mb-0">Manage customer orders</p>
          </div>

          <Link to="/admin/orders/add" className="btn btn-dark">
            Add Order
          </Link>
        </div>

        {/* TABLE */}
        <div className="card shadow-sm border-0">
          <div className="card-body">

            {/* SEARCH */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search orders..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Order No</th>
                    <th>Customer</th>
                    <th>Phone</th>
                    <th>Total</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order, index) => (
                      <tr key={order.id}>
                        <td>{index + 1}</td>
                        <td>{order.order_number}</td>
                        <td>{order.customer_name}</td>
                        <td>{order.phone}</td>
                        <td>₦{order.total_amount.toLocaleString()}</td>

                        <td>
                          <span className={`badge ${getPaymentBadge(order.payment_status)}`}>
                            {order.payment_status}
                          </span>
                        </td>

                        <td>
                          <span className={`badge ${getOrderBadge(order.order_status)}`}>
                            {order.order_status}
                          </span>
                        </td>

                        <td>{order.date}</td>

                        <td className="text-end">
                          <Link
                            to={`/admin/orders/edit/${order.id}`}
                            className="btn btn-sm btn-outline-primary me-2"
                          >
                            Edit
                          </Link>

                          <button
                            onClick={() => handleDelete(order.id)}
                            className="btn btn-sm btn-outline-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center text-muted py-4">
                        No orders found
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