import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";

function MainNav() {
  const router = useRouter();
  const [searchField, setSearchField] = useState("");

  function handleSearchSubmit(e) {
    e.preventDefault(); // prevent the browser from automatically submitting the form
    router.push(`/artwork?title=true&q=${searchField}`);
  }

  // my-2: make the navbar wider
  // me-2: add whitespace between the button and the string 'search'
  // justify-content-end: position the button on the right side of the page
  return (
    <>
      <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Xiaoyue Zhao</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto my-2">
              <Nav.Link href="/" passhref="true">
                Home
              </Nav.Link>
              <Nav.Link href="/search" passhref="true">
                Advanced Search
              </Nav.Link>
            </Nav>
            <div className="collapse navbar-collapse justify-content-end">
              <Form className="d-flex" onSubmit={handleSearchSubmit}>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  value={searchField}
                  onChange={(e) => setSearchField(e.target.value)}
                />
                <Button variant="success" type="submit">
                  Search
                </Button>
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}

export default MainNav;
