import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainNav() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand style={{ color: "white" }}>Xiaoyue Zhao</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: "gray" }} href="/">
                Movies
              </Nav.Link>
              <Nav.Link style={{ color: "gray" }} href="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </div>
  );
}

export default MainNav;
