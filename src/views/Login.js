import React, { useState, useEffect } from "react";
import axiosInstance from "../modules/axiosInstance";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

function User() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAPI = async () => {
    let response = await axiosInstance.post(`login`, {
      email: email,
      password: password,
    });

    if (response.data.status == true) {
      localStorage.setItem("token", response.data.token);
      window.location.href = "/users";
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Body>
                <Form>
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
                    <Col className="pr-1" md="6">
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
                    onClick={loginAPI}
                  >
                    Login
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
