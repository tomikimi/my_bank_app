function Withdrawal() {
  return (
    <div className="account-action-container">
      <div className="action-input-container">
        <label
          name="withdrawal_amount"
          htmlFor="Withdrawal"
          className="action-label-control"
        >
          Withdrawal Amount💵
        </label>
        <input name="withdrawal_amount" className="action-input-control" />
      </div>
      <button className="btn btn-account-action">Withdrawal</button>
    </div>
  );
}

export default Withdrawal;
