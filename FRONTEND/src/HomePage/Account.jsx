import React from "react";
import "./Account.css";
import axios from "axios";
const Account = ({ onClose,user }) => {
  
  
  return (
    <div className="account-overlay">
      
      <div
        className="account-container"
        // onClick={(e) => e.stopPropagation()}
      >
        <div className="account-card">

          {/* ❌ CLOSE BUTTON */}
          

          {/* Header */}
          <div className="account-header">
            <div className="close-bt" onClick={onClose}>×</div>
            <div className="avatar">JD</div>
            <h2>Account Information</h2>
          </div>

          {/* Full Name */}
          <div className="form-group">
            <label className="label">Full Name</label>
            <input
              type="text"
              value={user.name}
              className="input"
              readOnly
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="label">Email Address</label>
            <input
              type="text"
              value={user.email}
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
  );
};

export default Account;