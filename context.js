const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props) {

    function classes() {
        const bg = props.bgcolor ? ' bg-'+props.bgcolor : ' ';
        // const txt = props.textcolor ? ' text-'+props.textcolor : ' text-white';
        return 'card mb-3' + bg;
    }

    return (
        <>
            <div className={classes()} style={{maxWidth: "18rem"}}>
                <div className="card-header">{props.header}</div>
                <div className="card-body">
                    {props.title && (<h5 className="card-title">{props.title}</h5>)}
                    {props.subtitle && (<h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>)}
                    {props.text && (<p className="card-text">{props.text}</p>)}
                    {props.body}
                    {props.status && (<div id="createStatus">{props.status}</div>)}
                    {/* <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>
        </>
    );
}