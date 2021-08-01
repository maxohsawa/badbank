function Login() {

    const [show, setShow] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label) {
        if(!field) {
            setStatus('Empty: ' + label);
            setTimeout( () => setStatus(''), 3000);
            return false;
        }

        return true;
    }

    function validateCredentials(inputEmail, inputPassword) {

        const emailMatches = ctx.users.filter( (item) => item.email === inputEmail);
        if(!emailMatches) {
            setStatus('Email does not match any in records.');
            return false;
        }

        if(emailMatches.length === 1) {
            if(emailMatches[0].password === inputPassword){
                emailMatches[0].loggedin = true;
                ctx.loggedIn = true;
                ctx.loggedInAs = emailMatches[0];
                return true;
            }

            else {
                setStatus('Password does not match records.');
                return false;
            }
        }
    }

    function handleLogin() {

        console.log('Email: ', email);
        console.log('Password: ', password);

        if(!validate(email, 'email')) return;
        if(!validate(password, 'password')) return;

        if(validateCredentials(email, password)){
            setShow(false);
        }

    }

    function handleLogout() {
        clearForm();
        ctx.loggedIn = false;
        ctx.loggedInAs = {};
        setStatus('You have been logged out');
    }

    function clearForm() {
        setShow(true);
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <Card 
                textcolor="dark"
                bgcolor=""
                header="Log In"
                status={status}
                body={ (show && !ctx.loggedIn) ? (
                    <>
                        Email
                        <br/>
                        <input type="input"
                                className="form-control"
                                id="email"
                                placeholder="Enter name"
                                value={email || "abel@mit.edu"}
                                onChange={ (e) => {
                                    setEmail(e.currentTarget.value)
                                }}
                        />
                        <br/>

                        Password
                        <br/>
                        <input type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter password"
                                value={password || "secret"}
                                onChange={ (e) => {
                                    setPassword(e.currentTarget.value)
                                }}
                        />
                        <br/>

                        <button type="submit"
                                className="btn btn-primary"
                                onClick={handleLogin}
                        >
                            Log In
                        </button>
                    </>
                ) : (
                    <>
                        <h5>Success</h5>
                        <button type="submit"
                                className="btn btn-primary"
                                onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>
                )}

            />
        </>
    );
}