function Withdraw() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
    const [withdrawal, setWithdrawal] = React.useState("");
    const [balance, setBalance] = React.useState("");
    const ctx = React.useContext(UserContext);

    function clearForm() {
        setShow(true);
    }

    function handleWithdrawal() {
        let balance = Number(ctx.loggedInAs.balance);
        let amount = Number(withdrawal);

        if(amount < 0){
            setStatus("Very clever");
            return;
        }

        if(balance >= amount){
            let newBalance = balance - amount;
            setBalance(newBalance);
            ctx.loggedInAs.balance = newBalance;
            setStatus("Withdrawal Successful");
        }
        else {
            setStatus("Not enough balance");
        }
        
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
                        Withdraw funds
                        <br/>
                        <input type="input"
                                className="form-control"
                                id="deposit"
                                placeholder="0"
                                value={withdrawal}
                                onChange={ (e) => {
                                    setWithdrawal(e.currentTarget.value)
                                }}
                        />
                        <br/>

                        <button type="submit"
                                className="btn btn-primary"
                                onClick={handleWithdrawal}
                        >
                            Withdraw
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