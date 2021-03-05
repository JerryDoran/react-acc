import { useContext, useState } from "react";
import { BillContext } from "../../context/BillContext";
import "./styles.css";

const AddBill = () => {
  const [billTitle, setBillTitle] = useState("");
  const [billAmount, setBillAmount] = useState("");

  const { updateBills } = useContext(BillContext);

  const billObjectValid = () => {
    const billValid = billAmount && Number.parseFloat(billAmount);
    const titleValid =
      billTitle && billTitle.split("").find((char) => char !== " ");

    return titleValid && billValid;
  };

  const clearForm = () => {
    setBillTitle("");
    setBillAmount("");
  };

  return (
    <div className="add-bill-container">
      <input
        className="add-bill-form-control form-control"
        placeholder="Enter bill title"
        type="text"
        value={billTitle}
        onChange={(e) => setBillTitle(e.target.value)}
      />
      <input
        className="add-bill-form-control form-control"
        placeholder="Enter bill amount"
        type="number"
        value={billAmount}
        onChange={(e) => setBillAmount(e.target.value)}
      />
      <button
        className="bill-btn btn btn-primary"
        onClick={() => {
          if (billObjectValid()) {
            updateBills({
              title: billTitle,
              amount: billAmount,
              enabled: true
            });
            clearForm();
          }
        }}
      >
        Add Bill
      </button>
    </div>
  );
};

export default AddBill;
