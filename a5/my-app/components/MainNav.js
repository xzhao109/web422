import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { useAtom } from "jotai";
import { searchHistoryAtom } from "@/store";

function MainNav() {
  const router = useRouter();
  const [searchField, setSearchField] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); // Set an "isExpanded" value in the state, with a default value of false
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  function handleSearchSubmit(e) {
    e.preventDefault(); // prevent the browser from automatically submitting the form
    setIsExpanded(false);
    router.push(`/artwork?title=true&q=${searchField}`);
    setSearchHistory((current) => [...current, searchField]);
  }

  function handleNavbarToggle() {
    setIsExpanded(!isExpanded);
  }

  function handleNavLinkClick() {
    setIsExpanded(false);
  }

  // my-2: make the navbar wider
  // me-2: add whitespace between the button and the string 'search'
  // justify-content-end: position the button on the right side of the page
  return (
    <>
      <Navbar
        className="fixed-top"
        bg="dark"
        variant="dark"
        expand="lg"
        expanded={isExpanded} // Add an "expanded" property to the <Navbar> component with the value "isExpanded"
      >
        <Container>
          <Navbar.Brand>Xiaoyue Zhao</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleNavbarToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto my-2">
              <Nav.Link href="/" passhref="true" onClick={handleNavLinkClick}>
                Home
              </Nav.Link>
              <Nav.Link
                href="/search"
                active={router.pathname === "/search"}
                passhref="true"
                onClick={handleNavLinkClick}
              >
                Advanced Search
              </Nav.Link>
            </Nav>
            <div className="collapse navbar-collapse justify-content-end">
              &nbsp;
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
              &nbsp;
              <Nav className="text-primary ml-auto">
                <NavDropdown title="User Name">
                  <NavDropdown.Item
                    href="/favourites"
                    onClick={handleNavLinkClick}
                  >
                    Favourites
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/history"
                    active={router.pathname === "/history"}
                  >
                    Search History
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
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
