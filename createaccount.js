
function CreateAccount() {

    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label) {
        if(!field) {
            setStatus('Error: ' + label);
            setTimeout( () => setStatus(''), 3000);
            return false;
        }

        if(label === 'email'){
            if(ctx.users.filter( (item) => item.email === field).length > 0){
                setStatus('Error: email is already in use');
                return false;
            }
        }
        

        return true;
    }

    function handleCreate() {

        console.log('Name: ', name);
        console.log('Email: ', email);
        console.log('Password: ', password);

        if(!validate(name, 'name')) return;
        if(!validate(email, 'email')) return;
        if(!validate(password, 'password')) return;

        ctx.users.push({name, email, password, balance: 100});

        setShow(false);
    }

    function clearForm() {
        setShow(true);
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <Card 
                textcolor="dark"
                bgcolor=""
                header="Create Account"
                status={status}
                body={ (show && !ctx.loggedin) ? (
                    <>
                        Name
                        <br/>
                        <input type="input"
                                className="form-control"
                                id="name"
                                placeholder="Enter name"
                                value={name}
                                onChange={ (e) => {
                                    setName(e.currentTarget.value)
                                }}
                        />
                        <br/>

                        Email
                        <br/>
                        <input type="input"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                value={email}
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
                                value={password}
                                onChange={ (e) => {
                                    setPassword(e.currentTarget.value)
                                }}
                        />
                        <br/>

                        <button type="submit"
                                className="btn btn-primary"
                                onClick={handleCreate}
                        >
                            Create Account
                        </button>
                    </>
                ) : (
                    <>
                        <h5>Success</h5>
                        <button type="submit"
                                className="btn btn-primary"
                                onClick={clearForm}
                        >
                            Add another account
                        </button>
                    </>
                )}

            />
        </>
    );
}