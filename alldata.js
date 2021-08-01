function AllData() {

    const ctx = React.useContext(UserContext);

    return (
        <>
            <h1>AllData</h1>

            <br></br>
            {JSON.stringify(ctx)}
        </>
    );
}