import { useState, createContext, useEffect } from "react";

const BillContext = createContext();

const BillProvider = ({ children }) => {
  const [bills, setBills] = useState([]);
  const [selectedCostInterval, setSelectedCostInterval] = useState("Monthly");
  const [editModeEnabled, setEditModeEnabled] = useState(false);

  const updateBills = (bill) => {
    const updatedBills = orderBills([...bills, bill]);
    localStorage.setItem("my-bills", JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  const editBill = (billToUpdate) => {
    const filteredBills = bills.filter(
      (bill) => bill.title !== billToUpdate.title
    );
    const updatedBills = orderBills([...filteredBills, billToUpdate]);
    localStorage.setItem("my-bills", JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  const orderBills = (bills) => {
    return bills.sort((a, b) =>
      a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0
    );
  };

  const deleteBill = (billToDelete) => {
    const filteredBills = bills.filter(
      (bill) => bill.title !== billToDelete.title
    );

    localStorage.setItem("my-bills", JSON.stringify(filteredBills));
    setBills(filteredBills);
  };

  useEffect(() => {
    setBills(JSON.parse(localStorage.getItem("my-bills")) || []);
  }, [setBills]);

  return (
    <BillContext.Provider
      value={{
        bills,
        updateBills,
        editBill,
        selectedCostInterval,
        setSelectedCostInterval,
        setEditModeEnabled,
        editModeEnabled,
        deleteBill
      }}
    >
      {children}
    </BillContext.Provider>
  );
};

export { BillContext, BillProvider };
