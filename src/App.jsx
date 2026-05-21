import { useReducer } from "react";
import CreateAccount from "./components/CreateAccount";
import "./App.css";
import Dashboard from "./components/Dashboard";

const initialState = {
  account: [],
  fullName: "",
  phoneNumber: "",
  NIN: "",
  depositAmount: "",
  withdrawAmount: "",
  loanPurpose: "",
  loanAmount: "",
  balance: 0,
  status: "createAccount",
  userAction: "",
  buttonStatus: false,
};

const reducer = (state, action) => {
  switch (action.type.toUpperCase()) {
    case "USERFULLNAME":
      return { ...state, fullName: action.payload };
    case "USERPHONENUMBER":
      return { ...state, phoneNumber: action.payload };
    case "USERNIN":
      return { ...state, NIN: action.payload };
    case "CREATEUSERACCOUNT": {
      const user = {
        fullName: action.payload.fullName,
        phoneNumber: action.payload.phoneNumber,
        NIN: action.payload.NIN,
        balance: action.payload.balance,
      };
      window.alert(
        `Dear ${action.payload.fullName} your Account has been successfully created.`,
      );
      return {
        ...state,
        account: [user],
        status: action.payload.status,
        buttonStatus: true,
      };
    }
    case "CLEARACCOUNTCREATIONFIELD":
      return {
        ...state,
        fullName: "",
        phoneNumber: "",
        NIN: "",
        buttonStatus: false,
      };
    case "DEPOSITFORM":
      return { ...state, userAction: "depositForm" };
    case "WITHDRAWALFORM":
      return { ...state, userAction: "withdrawalForm" };
    case "LOANREQUESTFORM":
      return { ...state, userAction: "loanRequestForm" };
    case "LOANPAYMENTFORM":
      return { ...state, userAction: "loanPaymentForm" };
    case "DEPOSITAMOUNT":
      return { ...state, depositAmount: Number(action.payload) };
    case "DEPOSIT":
      return {
        ...state,
        balance: state.balance + state.depositAmount,
        depositAmount: "",
      };
    case "WITHDRAWAMOUNT":
      return { ...state, withdrawAmount: Number(action.payload) };
    case "WITHDRAW": {
      const amount = state.withdrawAmount;
      const balance = state.balance;
      if (amount > balance) {
        window.alert(
          `Dear ${state.fullName} you do not have sufficient balance in your Account.`,
        );
        return { ...state };
      } else {
        return {
          ...state,
          balance: state.balance - state.withdrawAmount,
          withdrawAmount: "",
        };
      }
    }

    case "CLOSEACCOUNT":
      return initialState;
    default:
      throw new Error("No Valid Operation");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    status,
    userAction,
    fullName,
    phoneNumber,
    NIN,
    balance,
    account,
    depositAmount,
    withdrawAmount,
    buttonStatus,
  } = state;

  function handleFullName(e) {
    const fullName = e.target.value;
    dispatch({ type: "userFullName", payload: fullName });
  }

  function handlePhoneNumber(e) {
    const phoneNumber = e.target.value;
    dispatch({ type: "userPhoneNumber", payload: phoneNumber });
  }

  function handleNIN(e) {
    const NIN = e.target.value;
    dispatch({ type: "userNIN", payload: NIN });
  }

  function handleCreateAccount(e) {
    e.preventDefault();

    if (!fullName || !phoneNumber || !NIN) {
      window.alert("FullName, PhoneNumber or NIN cannot be empty");
      return;
    }

    dispatch({
      type: "createUserAccount",
      payload: {
        fullName,
        phoneNumber,
        NIN,
        balance,
        status: "dashboardProfile",
      },
    });
  }

  function handleClearAccountFields() {
    const confirm = window.confirm(
      "Are you sure you want to clear all fields...",
    );

    if (confirm) {
      dispatch({ type: "clearAccountCreationField" });
    }
  }

  function handleAccountAction(action) {
    switch (action.toUpperCase()) {
      case "DEPOSIT":
        dispatch({ type: "depositForm" });
        break;
      case "WITHDRAW":
        dispatch({ type: "withdrawalForm" });
        break;
      case "LOANREQUEST":
        dispatch({ type: "loanRequestForm" });
        break;
      case "LOANPAYMENT":
        dispatch({ type: "loanPaymentForm" });
        break;
      case "CLOSEACCOUNT":
        {
          const confirm = window.confirm(
            `Dear ${fullName} are you sure you want to close your account.`,
          );

          if (confirm) {
            dispatch({ type: "closeAccount" });
          }
        }
        break;
      default:
        return "none";
    }
  }

  function handleDeposit(e) {
    const amount = e.target.value;

    dispatch({ type: "depositAmount", payload: amount });
  }

  function handleWithdraw(e) {
    const amount = e.target.value;

    dispatch({ type: "withdrawAmount", payload: amount });
  }

  function handleDepositAction() {
    const confirm = window.confirm(
      `Dear ${fullName} would you like to proceed in depositing ${depositAmount} Naira into your Account.`,
    );
    if (confirm) {
      dispatch({ type: "deposit" });
    } else {
      return;
    }
  }

  function handleWithdrawAction() {
    const confirm = window.confirm(
      `Dear ${fullName} would you like to proceed in withdrawing ${withdrawAmount} Naira from your Account.`,
    );
    if (confirm) {
      dispatch({ type: "withdraw" });
    } else {
      return;
    }
  }

  return (
    <>
      {status === "createAccount" && (
        <CreateAccount
          fullName={fullName}
          phoneNumber={phoneNumber}
          NIN={NIN}
          buttonStatus={buttonStatus}
          handleFullName={handleFullName}
          handlePhoneNumber={handlePhoneNumber}
          handleNIN={handleNIN}
          handleCreateAccount={handleCreateAccount}
          handleClearAccountFields={handleClearAccountFields}
        ></CreateAccount>
      )}
      {status === "dashboardProfile" && (
        <Dashboard
          account={account}
          balance={balance}
          userAction={userAction}
          handleAccountAction={handleAccountAction}
          depositAmount={depositAmount}
          withdrawAmount={withdrawAmount}
          handleDeposit={handleDeposit}
          handleDepositAction={handleDepositAction}
          handleWithdraw={handleWithdraw}
          handleWithdrawAction={handleWithdrawAction}
        ></Dashboard>
      )}

      {/* <section>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section> */}
    </>
  );
}

export default App;
