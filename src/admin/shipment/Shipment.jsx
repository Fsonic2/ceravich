import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

export default function Shipment() {
  const [shipments] = useState([
    {
      id: 1,
      order_number: "ORD-1001",
      customer: "Jane Doe",
      courier: "GIG Logistics",
      tracking_number: "TRK10001",
      status: "in transit",
    },
    {
      id: 2,
      order_number: "ORD-1002",
      customer: "Mary Smith",
      courier: "DHL",
      tracking_number: "TRK10002",
      status: "pending",
    },
    {
      id: 3,
      order_number: "ORD-1003",
      customer: "John Paul",
      courier: "FedEx",
      tracking_number: "TRK10003",
      status: "delivered",
    },
  ]);

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="mb-4">
          <h3 className="fw-bold mb-1">Shipment</h3>
          <p className="text-muted mb-0">Track product deliveries</p>
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Order No.</th>
                    <th>Customer</th>
                    <th>Courier</th>
                    <th>Tracking No.</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {shipments.map((shipment, index) => (
                    <tr key={shipment.id}>
                      <td>{index + 1}</td>
                      <td>{shipment.order_number}</td>
                      <td>{shipment.customer}</td>
                      <td>{shipment.courier}</td>
                      <td>{shipment.tracking_number}</td>
                      <td>{shipment.status}</td>
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