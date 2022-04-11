import React, { useState, useEffect } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import axiosInstance from "../modules/axiosInstance";

function TableList() {
  const [users, setUsers] = useState([]);

  const getAllUsersAPI = async () => {
    let response = await axiosInstance.get(`users`);

    setUsers(response.data.users);
  };

  React.useEffect(() => {
    getAllUsersAPI();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">First Name</th>
                      <th className="border-0">Last Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.length > 0 &&
                      users.map((key) => {
                        return (
                          <tr>
                            <td>{key.first_name}</td>
                            <td>{key.last_name}</td>
                            <td>{key.email}</td>
                            <td>
                              <a href={"/user/" + key._id}>Edit</a>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
