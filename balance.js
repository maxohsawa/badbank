function Balance() {

    const ctx = React.useContext(UserContext);

    return (
        <>
            <h1>Balance</h1>
            <h2>{"$"+ctx.loggedInAs.balance}</h2>
        </>
    );
}