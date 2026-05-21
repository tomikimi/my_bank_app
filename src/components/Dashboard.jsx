import Deposit from "./Deposit";
import LoanPayment from "./LoanPayment";
import LoanRequest from "./LoanRequest";
import Withdrawal from "./Withdrawal";

function Dashboard({
  account,
  balance,
  userAction,
  handleAccountAction,
  depositAmount,
  withdrawAmount,
  handleDeposit,
  handleDepositAction,
  handleWithdraw,
  handleWithdrawAction,
}) {
  const { fullName } = account[0];
  return (
    <section className="container">
      <div className="container-div">
        <div className="dashboard-header">
          <h1>Welcome 👋🏽 {fullName ? fullName : "User"}</h1>
          <span>Balance 💰:{balance ? ` #${balance}` : " 0.0"}</span>
        </div>
        <div className="dashboard-action-panel">
          <h2>What Action would you like to Perform</h2>

          <div className="dashboard-actions">
            <button
              className="btn btn-action"
              onClick={() => handleAccountAction("deposit")}
            >
              Deposit
            </button>
            <button
              className="btn btn-action"
              onClick={() => handleAccountAction("withdraw")}
            >
              Withdraw
            </button>
            <button
              className="btn btn-action"
              onClick={() => handleAccountAction("loanRequest")}
            >
              Get a Loan
            </button>
            <button
              className="btn btn-action"
              onClick={() => handleAccountAction("loanPayment")}
            >
              Pay Loan
            </button>
            <button
              className="btn btn-action"
              onClick={() => handleAccountAction("closeAccount")}
            >
              Close Account
            </button>
          </div>
        </div>
        {userAction === "depositForm" && (
          <Deposit
            depositAmount={depositAmount}
            handleDeposit={handleDeposit}
            handleDepositAction={handleDepositAction}
          ></Deposit>
        )}
        {userAction === "withdrawalForm" && (
          <Withdrawal
            withdrawAmount={withdrawAmount}
            handleWithdraw={handleWithdraw}
            handleWithdrawAction={handleWithdrawAction}
          ></Withdrawal>
        )}
        {userAction === "loanRequestForm" && <LoanRequest></LoanRequest>}
        {userAction === "loanPaymentForm" && <LoanPayment></LoanPayment>}
      </div>
    </section>
  );
}

export default Dashboard;
