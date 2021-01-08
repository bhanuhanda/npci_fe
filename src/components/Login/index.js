import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = () => {
    console.log('user', user);
  }

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <h4 style={{ textAlign: "center", margin: "24px 0px" }}>Login Page</h4>
      <Row style={{ justifyContent: "center" }}>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" name="email" value={user.email} onChange={handleOnChange} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your Password" required name="password" value={user.password} onChange={handleOnChange} />
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Row>
    </Container>
  )
}

export default Login;
