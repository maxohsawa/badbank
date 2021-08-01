function Home() {

    const ctx = React.useContext(UserContext);

    return (
        <>
            <h1>Home</h1>
            <br></br>
            {JSON.stringify(ctx)}
        </>
    );
}