import { useContext } from "react";
import { BillContext } from "../../context/BillContext";
import "./styles.css";

const BillTotal = () => {
  const { bills, selectedCostInterval } = useContext(BillContext);

  const moneyIntervalTransform = (amount) => {
    const monthlyCost = Number.parseFloat(amount);
    switch (selectedCostInterval) {
      case "Monthly":
        return monthlyCost;
      case "Yearly":
        return monthlyCost * 12;
      case "Weekly":
        return (monthlyCost * 12) / 52;
      case "Daily":
        return (monthlyCost * 12) / 365;

      default:
        return 0;
    }
  };
  return (
    <>
      <div className="bill-total-container">
        {selectedCostInterval} bill cost:
        <span className="total-cost">
          {`$${bills
            .reduce((acc, bill) => {
              return bill.enabled
                ? moneyIntervalTransform(bill.amount) + acc
                : acc;
            }, 0)
            .toFixed(2)}`}
        </span>
      </div>
      <div className="total-saved-container">
        {selectedCostInterval} saved:
        <span className="total-saved">
          {`$${bills
            .reduce((acc, bill) => {
              return !bill.enabled
                ? moneyIntervalTransform(bill.amount) + acc
                : acc;
            }, 0)
            .toFixed(2)}`}
        </span>
      </div>
    </>
  );
};

export default BillTotal;
