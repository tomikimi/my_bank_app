function Deposit() {
  return (
    <div className="deposit-container">
      <div className="action-input-container">
        <label
          name="deposit_amount"
          htmlFor="Deposit"
          className="action-label-control"
        >
          Deposit Amount💵
        </label>
        <input name="deposit_amount" className="action-input-control" />
      </div>
      <button className="btn btn-account-action">Deposit</button>
    </div>
  );
}

export default Deposit;
