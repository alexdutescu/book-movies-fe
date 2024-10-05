import Container from 'react-bootstrap/Container';

export const Header = () => {
    return (
        <header className="fixed-top navbar-dark" style={{backgroundColor: "teal", fontFamily:"Comic Sans MS"}}>
            <Container style={{ textAlign: "center" }}>
                <div className="row">
                    <h1 className="text-light">iBook a movie</h1>
                </div>
            </Container>
        </header>
    );
}