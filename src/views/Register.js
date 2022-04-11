import React, { useState, useEffect } from "react";
import axiosInstance from "../modules/axiosInstance";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

function User() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const registerAPI = async () => {
    let response = await axiosInstance.post(`users/register`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    });

    if (response.data.status == false) {
      setMessage(response.data.message);
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          {message}
          <Col md="8">
            <Card>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          placeholder="First Name"
                          type="text"
                          onChange={(event) => setFirstName(event.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          placeholder="Last Name"
                          type="text"
                          onChange={(event) => setLastName(event.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Email address</label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                          onChange={(event) => setEmail(event.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          placeholder="Password"
                          type="password"
                          onChange={(event) => setPassword(event.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    variant="info"
                    onClick={registerAPI}
                  >
                    Register
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
