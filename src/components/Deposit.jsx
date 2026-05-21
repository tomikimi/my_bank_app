function Deposit({ depositAmount, handleDeposit, handleDepositAction }) {
  return (
    <div className="account-action-container">
      <div className="action-input-container">
        <label
          name="deposit_amount"
          htmlFor="Deposit"
          className="action-label-control"
        >
          Deposit Amount💵
        </label>
        <input
          name="deposit_amount"
          className="action-input-control"
          type="number"
          value={depositAmount}
          onChange={handleDeposit}
        />
      </div>
      <button className="btn btn-account-action" onClick={handleDepositAction}>
        Deposit
      </button>
    </div>
  );
}

export default Deposit;
