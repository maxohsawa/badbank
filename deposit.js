function Deposit() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
    const [deposit, setDeposit] = React.useState("");
    const ctx = React.useContext(UserContext);

    function clearForm() {
        setShow(true);
    }

    function handleDeposit() {
        ctx.loggedInAs.balance = Number(ctx.loggedInAs.balance) + Number(deposit);
        setStatus("Deposit Successful")
    }

    return (
        <>
            <Card 
                textcolor="dark"
                bgcolor=""
                header={"Account balance: $" + ctx.loggedInAs.balance}
                status={status}
                body={ (ctx.loggedIn) ? (
                    <>
                        Deposit funds
                        <br/>
                        <input type="input"
                                className="form-control"
                                id="deposit"
                                placeholder="0"
                                value={deposit}
                                onChange={ (e) => {
                                    setDeposit(e.currentTarget.value)
                                }}
                        />
                        <br/>

                        <button type="submit"
                                className="btn btn-primary"
                                onClick={handleDeposit}
                        >
                            Deposit
                        </button>
                    </>
                ) : (
                    <>
                        <h5>You must be logged in</h5>
                        <a href="#/login">Go log in</a>
                    </>
                )}

            />
        </>
    );
}