import "../App.css";

function CreateAccount({
  fullName,
  phoneNumber,
  NIN,
  buttonStatus,
  handleFullName,
  handlePhoneNumber,
  handleNIN,
  handleCreateAccount,
  handleClearAccountFields,
}) {
  return (
    <section className="container">
      <div className="container-div">
        <h1> Create Account</h1>
        <div className="inputContainer">
          <div className="inputController">
            <label name="fullName" htmlFor="fullName" className="labelControl">
              FullName
            </label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleFullName}
              className="inputControl"
            />
          </div>
          <div className="inputController">
            <label
              name="phoneNumber"
              htmlFor="phoneNumber"
              className="labelControl"
            >
              PhoneNumber
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumber}
              className="inputControl"
            />
          </div>
          <div className="inputController">
            <label name="NIN" htmlFor="NIN" className="labelControl">
              NIN
            </label>
            <input
              type="text"
              name="NIN"
              value={NIN}
              onChange={handleNIN}
              className="inputControl"
            />
          </div>
        </div>
        <div className="button-container">
          <button
            className="btn btn-submit"
            onClick={handleCreateAccount}
            disabled={buttonStatus}
          >
            Submit
          </button>
          <button className="btn btn-clear" onClick={handleClearAccountFields}>
            Clear
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreateAccount;
