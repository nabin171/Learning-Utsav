
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <h1 className="text-white text-lg">Simple Dashboard</h1>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-2xl mt-2">500</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-2xl mt-2">$12,000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Active Sessions</h2>
            <p className="text-2xl mt-2">45</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Transaction ID</th>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">TXN001</td>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">$500</td>
                <td className="border px-4 py-2 text-green-600">Completed</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">TXN002</td>
                <td className="border px-4 py-2">Jane Smith</td>
                <td className="border px-4 py-2">$200</td>
                <td className="border px-4 py-2 text-yellow-600">Pending</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">TXN003</td>
                <td className="border px-4 py-2">Sam Johnson</td>
                <td className="border px-4 py-2">$120</td>
                <td className="border px-4 py-2 text-red-600">Failed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
