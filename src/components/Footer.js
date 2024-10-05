import { Container } from "react-bootstrap";

export const Footer = () => {
    return (
        <footer className="fixed-bottom navbar-dark bg-black justify-content-center">
            <Container style={{ textAlign: "center" }}>
                <h4 className="text-light">Copyright © 2024 Alexandru Dutescu. </h4>
            </Container>
        </footer>
    );
}