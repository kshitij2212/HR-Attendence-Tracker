import { useState } from "react";
import "../styles/EmployeeManagement.css";
import Sidebar from "./Sidebar";

const EmployeeManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const employees = [
    {
      id: 1,
      name: "Olivia Rhye",
      email: "olivia@company.com",
      department: "Engineering",
      role: "Frontend Developer",
      joinDate: "2023-01-15",
      status: "Active",
      avatar: "👩‍💼",
    },
    {
      id: 2,
      name: "Phoenix Baker",
      email: "phoenix@company.com",
      department: "Design",
      role: "Product Designer",
      joinDate: "2022-06-20",
      status: "Active",
      avatar: "👨‍💼",
    },
    {
      id: 3,
      name: "Lana Steiner",
      email: "lana@company.com",
      department: "Product",
      role: "Product Manager",
      joinDate: "2021-11-01",
      status: "Inactive",
      avatar: "👩",
    },
    {
      id: 4,
      name: "Demi Wilkinson",
      email: "demi@company.com",
      department: "Engineering",
      role: "Backend Developer",
      joinDate: "2023-03-12",
      status: "Active",
      avatar: "👩‍💻",
    },
  ];

  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 8;

  return (
    <div className="employee-management-container">
      <Sidebar />

      <main className="employee-main-content">
        <div className="employee-header">
          <div className="header-text">
            <h1 className="page-title">Employee Management</h1>
            <p className="page-subtitle">
              View, search, and manage all employees in the organization.
            </p>
          </div>
          <button className="add-employee-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add New Employee
          </button>
        </div>

        <div className="employee-filters">
          <div className="search-bar">
            <svg
              className="search-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search by Name or Email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-dropdowns">
            <select
              className="filter-select"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              <option value="">Department</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="product">Product</option>
            </select>

            <select
              className="filter-select"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="">Role</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="designer">Product Designer</option>
              <option value="manager">Product Manager</option>
            </select>

            <select
              className="filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="employee-table-section">
          <table className="employee-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>DEPARTMENT</th>
                <th>ROLE</th>
                <th>JOIN DATE</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <div className="employee-name-cell">
                      <div className="employee-avatar-small">
                        <span>{employee.avatar}</span>
                      </div>
                      <div className="employee-details">
                        <div className="employee-name">{employee.name}</div>
                        <div className="employee-email">{employee.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="department-cell">{employee.department}</td>
                  <td className="role-cell">{employee.role}</td>
                  <td className="date-cell">{employee.joinDate}</td>
                  <td>
                    <span
                      className={`status-badge ${employee.status.toLowerCase()}`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td>
                    <button className="menu-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button
            className="pagination-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Previous
          </button>

          <div className="pagination-numbers">
            <button
              className={`page-number ${currentPage === 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <button
              className={`page-number ${currentPage === 2 ? "active" : ""}`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            <button
              className={`page-number ${currentPage === 3 ? "active" : ""}`}
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
            <span className="pagination-dots">...</span>
            <button
              className={`page-number ${
                currentPage === totalPages ? "active" : ""
              }`}
              onClick={() => setCurrentPage(totalPages)}
            >
              {totalPages}
            </button>
          </div>

          <button
            className="pagination-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
};

export default EmployeeManagement;
