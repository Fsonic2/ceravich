import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

export default function Message() {
  const [messages] = useState([
    {
      id: 1,
      name: "Jane Doe",
      email: "jane@example.com",
      subject: "Order Inquiry",
      message: "I want to know the status of my order.",
      date: "2026-04-13",
    },
    {
      id: 2,
      name: "Mary Smith",
      email: "mary@example.com",
      subject: "Product Question",
      message: "Is the face cream suitable for oily skin?",
      date: "2026-04-12",
    },
  ]);

  return (
    <AdminLayout>
      <div className="container-fluid">
        <div className="mb-4">
          <h3 className="fw-bold mb-1">Messages</h3>
          <p className="text-muted">Customer inquiries and messages</p>
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
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg, index) => (
                    <tr key={msg.id}>
                      <td>{index + 1}</td>
                      <td>{msg.name}</td>
                      <td>{msg.email}</td>
                      <td>{msg.subject}</td>
                      <td>{msg.message}</td>
                      <td>{msg.date}</td>
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