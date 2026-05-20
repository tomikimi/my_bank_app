import { useReducer, useState } from "react";
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

  function handleDepositForm() {
    dispatch({ type: "depositForm" });
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
          userAction={userAction}
          handleDepositForm={handleDepositForm}
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
