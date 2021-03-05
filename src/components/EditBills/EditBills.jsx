import { useContext } from "react";
import { BillContext } from "../../context/BillContext";
import "./styles.css";

const EditBills = () => {
  const { bills, setEditModeEnabled, editBill, deleteBill } = useContext(
    BillContext
  );

  return (
    <div className="edit-bill-container">
      <h6
        className="edit-mode-done-btn"
        onClick={() => setEditModeEnabled(false)}
      >
        Done
      </h6>
      {bills.map((bill, index) => {
        return (
          <div className="edit-bill-row" key={index}>
            <div className="edit-bill-row-content">
              <div className="edit-bill-title">{bill.title}</div>
              <input
                type="number"
                className="edit-bill-cost-input"
                value={bill.amount}
                onChange={(e) =>
                  editBill({
                    title: bill.title,
                    enabled: bill.enabled,
                    amount: e.target.value
                  })
                }
              />
              <h6 onClick={() => deleteBill(bill)} className="delete-button">
                DELETE
              </h6>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default EditBills;
