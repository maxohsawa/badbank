function CreateAccount() {

    const ctx = React.useContext(UserContext);

    return (
        <>
            <h1>CreateAccount</h1>

            <br></br>
            {JSON.stringify(ctx)}
        </>
    );
}