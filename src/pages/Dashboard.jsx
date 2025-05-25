import React, { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import CustomerForm from "../components/CustomerForm";
import OrderForm from "../components/OrderForm";

export default function Dashboard() {
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);

  return (
    <div id="dashboard-container">
      <PageHeader
        title="Dashboard"
        breadcrumb={["Dashboard", "Order List", "Test"]}
      >
        <button
          id="add-button"
          className="bg-hijau text-white px-4 py-2 rounded-lg mb-4"
          onClick={() => setShowCustomerForm(true)}
        >
          Add Customer
        </button>
        <button
          id="export-button"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setShowOrderForm(true)}
        >
          Add Orders
        </button>
      </PageHeader>

      {showCustomerForm && (
        <CustomerForm onClose={() => setShowCustomerForm(false)} />
      )}

      {showOrderForm && (
        <OrderForm onClose={() => setShowOrderForm(false)} />
      )}

      {/* Dashboard Stats */}
      <div
        id="dashboard-grid"
        className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        <Card icon={<FaShoppingCart />} color="hijau" label="Total Orders" value="75" />
        <Card icon={<FaTruck />} color="biru" label="Total Delivered" value="175" />
        <Card icon={<FaBan />} color="merah" label="Total Canceled" value="40" />
        <Card icon={<FaDollarSign />} color="kuning" label="Total Revenue" value="Rp.128" />
      </div>
    </div>
  );
}

const Card = ({ icon, color, label, value }) => (
  <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
    <div className={`bg-${color} rounded-full p-4 text-white text-3xl`}>
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-gray-400">{label}</span>
    </div>
  </div>
);
