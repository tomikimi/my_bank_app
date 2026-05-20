import Deposit from "./Deposit";

function Dashboard({ account, userAction, handleDepositForm }) {
  const { fullName, balance } = account[0];
  console.log(balance);
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
            <button className="btn btn-action" onClick={handleDepositForm}>
              Deposit
            </button>
            <button className="btn btn-action">Withdraw</button>
            <button className="btn btn-action">Get a Loan</button>
            <button className="btn btn-action">Pay Loan</button>
            <button className="btn btn-action">Close Account</button>
          </div>
        </div>
        {userAction === "depositForm" && <Deposit></Deposit>}
      </div>
    </section>
  );
}

export default Dashboard;
