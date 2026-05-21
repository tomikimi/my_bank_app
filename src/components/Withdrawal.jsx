function Withdrawal({ withdrawAmount, handleWithdraw, handleWithdrawAction }) {
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
        <input
          name="withdrawal_amount"
          className="action-input-control"
          value={withdrawAmount}
          onChange={handleWithdraw}
        />
      </div>
      <button className="btn btn-account-action" onClick={handleWithdrawAction}>
        Withdrawal
      </button>
    </div>
  );
}

export default Withdrawal;
