function LoanPayment() {
  return (
    <div className="account-action-container">
      <div className="action-input-container">
        <label name="loan_purpose" className="action-label-control">
          Loan Purpose
        </label>
        <label name="loan_purpose_data" className="action-label-control">
          Loan Purpose Data
        </label>
      </div>
      <div className="action-input-container">
        <label
          name="loan_amount"
          htmlFor="LoanAmount"
          className="action-label-control"
        >
          Loan Amount
        </label>
        <label name="loan_amount_data" className="action-label-control">
          Loan Amount data
        </label>
      </div>
      <button className="btn btn-account-action">Pay Loan</button>
    </div>
  );
}

export default LoanPayment;
