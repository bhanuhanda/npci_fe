import React, { useState, useContext,useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import UserContext from '../../Contexts/UserContext';
import  { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";

const Login = () => {

  const history = useHistory();
  const {contextUserData, setContextUserData} = useContext(UserContext);

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = () => {
    console.log('user', user);
    // send axios rqst to login user
    axios.post('http://localhost:5000/user/login', user)
      .then((res) => {
        console.log('logged in user', res);
        setContextUserData({
          token: res.data.token,
          user: res.data.user
        });
        localStorage.setItem("auth-token", res.data.token)
        history.push('/');
      })
      .catch((err) => {
        console.log('err', err);
      })
  }

  useEffect(()=>{
    console.log('user data in login page', contextUserData);
  },[contextUserData])

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
          <div className="d-flex justify-content-center mt-4">
            <Button type="button" className="btn btn-dark btn-sm btn-block" onClick={handleSubmit}>Submit</Button>
          </div>
        </Form>
      </Row>
      <Row className="d-flex justify-content-center mt-4">
        <Link to="/register" style={{marginRight: 12}}>Register New User</Link>
        <Link to="/" style={{marginLeft: 12}}>Go to Home</Link>
      </Row>
    </Container>
  )
}

export default Login;
