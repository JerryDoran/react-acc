import { useContext } from "react";
import "./app.css";
import AddBill from "./components/AddBill/AddBill";
import BillList from "./components/BillList/BillList";
import BillOptions from "./components/BillOptions/BillOptions";
import BillTotal from "./components/BillTotal/BillTotal";
import EditBills from "./components/EditBills/EditBills";
import { BillContext } from "./context/BillContext";

export default function App() {
  const { editModeEnabled } = useContext(BillContext);

  return (
    <div className="bills-container">
      {editModeEnabled ? (
        <EditBills />
      ) : (
        <span>
          <BillOptions />
          <AddBill />
          <BillTotal />
          <BillList />
        </span>
      )}
    </div>
  );
}
