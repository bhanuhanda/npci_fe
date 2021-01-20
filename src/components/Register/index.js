import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import axios from 'axios';

const Register = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleSubmit = () => {
    console.log('user', user);
    // send axios rqst to register user
    axios.post('http://localhost:5000/user/register', user)
      .then((res) => {
        console.log('registered user', res);
      })
      .catch((err) => {
        console.log('err', err);
      })
  }

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <h4 style={{ textAlign: "center", margin: "24px 0px" }}>Register Page</h4>
      <Row style={{ justifyContent: "center" }}>
        <Form>
          <Form.Group controlId="formname">
            <Form.Label>Display Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your Name" name="name" value={user.name} onChange={handleOnChange} />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" name="email" value={user.email} onChange={handleOnChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your Password" required name="password" value={user.password} onChange={handleOnChange} />
          </Form.Group>

          <div className="d-flex justify-content-center mt-4">
            <Button type="button" className="btn btn-dark btn-sm btn-block" onClick={handleSubmit}>Submit</Button>
          </div>
        </Form>
      </Row>
      <Row className="d-flex justify-content-center mt-4">
        <Link to="/login" style={{marginRight: 12}}>Login User</Link>
        <Link to="/" style={{marginLeft: 12}}>Go to Home</Link>
      </Row>
    </Container>
  )
}

export default Register;
