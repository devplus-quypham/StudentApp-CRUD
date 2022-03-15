// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import other React Component
import CreateStudent from "./Components/create-student";
import EditStudent from "./Components/edit-student";
import StudentList from "./Components/list-student";

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar
            className="nav-header"
            bg="primary"
            variant="dark"
            expand="md "
          >
            <Navbar.Brand>
              <Link to={"/create-student"} className="nav-link navbar-brand">
                Student App
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav text-center">
              <Nav className="ms-auto">
                <Nav className="btn-list">
                  <Link to={"/student-list"} className="nav-link">
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={CreateStudent} />
                  <Route path="/create-student" component={CreateStudent} />
                  <Route path="/edit-student/:id" component={EditStudent} />
                  <Route path="/student-list" component={StudentList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
