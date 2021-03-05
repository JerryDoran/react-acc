import { useContext, useState } from "react";
import { BillContext } from "../../context/BillContext";
import "./styles.css";

const BillList = () => {
  const { bills, editBill, setEditModeEnabled } = useContext(BillContext);
  return (
    <div className="bill-list-container">
      <h6 className="edit-mode-btn" onClick={() => setEditModeEnabled(true)}>
        Edit
      </h6>
      {bills.map((bill, index) => {
        return (
          <div className="bill-list-row" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              checked={bill.enabled}
              onChange={() =>
                editBill({
                  title: bill.title,
                  amount: bill.amount,
                  enabled: !bill.enabled
                })
              }
            />
            <div className="bill-list-row-content">
              {bill.title} - ${bill.amount}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BillList;
