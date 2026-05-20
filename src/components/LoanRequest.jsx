function LoanRequest() {
  return (
    <div className="account-action-container">
      <div className="action-input-container">
        <label
          name="loan_purpose"
          htmlFor="LoanPurpose"
          className="action-label-control"
        >
          Loan Purpose
        </label>
        <input name="loan_purpose" className="action-input-control" />
      </div>
      <div className="action-input-container">
        <label
          name="loan_amount"
          htmlFor="LoanAmount"
          className="action-label-control"
        >
          Loan Amount
        </label>
        <input name="loan_amount" className="action-input-control" />
      </div>
      <button className="btn btn-account-action">Submit</button>
    </div>
  );
}

export default LoanRequest;
