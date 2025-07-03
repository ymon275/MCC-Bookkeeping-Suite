import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function NavigationBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="#MCC">MCC Utility</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="https://github.com/ymon275/MCC-Bookkeeping-Suite">
                Github
              </Nav.Link>
              <NavDropdown title="Utilities" id="basic-nav-dropdown">
                <NavDropdown.Item href="#bookkeeping">
                  Book Suite (WIP)
                </NavDropdown.Item>
                <NavDropdown.Item href="/rr">Round Robin</NavDropdown.Item>
                <NavDropdown.Item href="#registration">
                  Registration (WIP)
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#about">About (WIP)</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
