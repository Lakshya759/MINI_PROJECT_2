import React from "react";
import "./Account.css";

const Account = () => {
  return (
    <div className="account-overlay">
  <div className="account-card">
    <div className="account-container">
      <div className="account-card">

        {/* Header */}
        <div className="account-header">
          <div className="avatar">JD</div>
          <h2>Account Information</h2>
        </div>

        {/* Full Name */}
        <div className="form-group">
          <label className="label">Full Name</label>
          <input
            type="text"
            value="John Doe"
            className="input"
            readOnly
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="label">Email Address</label>
          <input
            type="text"
            value="john@example.com"
            className="input"
            readOnly
          />
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Logout Button */}
        <button className="logout-btn">
          ⎋ Logout
        </button>

      </div>
    </div>
  </div>
</div>
  );
};

export default Account;