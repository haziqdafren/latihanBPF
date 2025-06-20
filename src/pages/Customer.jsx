import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  return (
    <div id="dashboard-container">
      <PageHeader
        title="Customer"
        breadcrumb={["Customer", "Order List", "Test"]}
      >
     
      </PageHeader>
      <div
        id="dashboard-grid"
        className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div
          id="dashboard-orders"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div id="orders-icon" className="bg-hijau rounded-full p-4">
            <FaShoppingCart className=" text-3xl text-white" />
          </div>
          <div id="orders-info" className="flex flex-col">
            <span id="orders-count" className="text-2xl font-bold">
              60
            </span>
            <span id="orders-text" className="text-gray-400">
              Total Orders
            </span>
          </div>
        </div>

        <div
          id="dashboard-delivered"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div id="delivered-icon" className="bg-biru rounded-full p-4">
            <FaTruck className=" text-3xl text-white" />
          </div>
          <div id="delivered-info" className="flex flex-col">
            <span id="delivered-count" className="text-2xl font-bold">
              12
            </span>
            <span id="delivered-text" className="text-gray-400">
              Total Delivered
            </span>
          </div>
        </div>

        <div
          id="dashboard-canceled"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div id="canceled-icon" className="bg-merah rounded-full p-4">
            <FaBan className=" text-3xl text-white" />
          </div>
          <div id="canceled-info" className="flex flex-col">
            <span id="canceled-count" className="text-2xl font-bold">
              23
            </span>
            <span id="canceled-text" className="text-gray-400">
              Total Canceled
            </span>
          </div>
        </div>

        <div
          id="dashboard-revenue"
          className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
        >
          <div id="revenue-icon" className="bg-kuning rounded-full p-4">
            <FaDollarSign className=" text-3xl text-white" />
          </div>
          <div id="revenue-info" className="flex flex-col">
            <span id="revenue-amount" className="text-2xl font-bold">
              Rp.100
            </span>
            <span id="revenue-text" className="text-gray-400">
              Total Revenue
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
