function Home() {

    return (
        <Card
            txtcolor="black"
            header="BadBank Landing Page"
            title="Welcome to BadBank"
            text="You can move around using the navigation bar"
            body={(<img src="badbank.jpg" className="img-fluid" alt="Responsive image" />)}
        />
    );
}