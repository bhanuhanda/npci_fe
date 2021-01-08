import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';

const MainPage = () => {
  const recentPeople = [{ name: 'User 1' }, { name: 'User 2' }];
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch users list
    axios.get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`)
      .then(res => {
        setUsers(res.data);
      })
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              Profile Section
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <Jumbotron>
              Balance : Rs. 10000
          </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h4><u>Recent Transactions with</u></h4>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Recent People
            </Dropdown.Toggle>
              <Dropdown.Menu>
                {
                  recentPeople.map((person, index) => {
                    return <Dropdown.Item key={index}>{person.name}</Dropdown.Item>
                  })
                }
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={8}>
            <h4><u>Available Users</u></h4>
            <Row>
              {
                users.map((person, index) => {
                  return <Row key={index}>
                    <Col xs={12}>
                      <Button variant="Light" onClick={() => console.log(`route to ${person.name}'s Transactions Page`)}>
                        <div style={{ textAlign: "center", backgroundColor: "#11223311", padding: 8, borderRadius: 8, width: "100%" }}>
                          <img style={{ borderRadius: "50%", marginRight: 8 }} alt={person.name} height={25} width={25} src={person.Image}></img>
                          {person.name}
                        </div>
                      </Button>
                    </Col>
                  </Row>
                })
              }
            </Row>
          </Col>
        </Row> 
      </Container>
    </>
  )
}

export default MainPage;
