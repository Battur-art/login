"use client"

import React, { useState } from "react"
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap"

const LoginForm = () => {
  const [theme, setTheme] = useState("light");  
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });      
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.firstname !== "Optimus Prime" || formData.password !== "niggers") {
      setError("sike thats a wrong number ohhohoho");
      return;
    }

    setSuccess(`whats up`);
  };

  return (
    <div
      className={`min-vh-100 d-flex justify-content-center align-items-center`}
      style={{
        background:
        
          theme === "dark"
            ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" // dark gradient
            : "linear-gradient(135deg, #89f7fe, #66a6ff)" // light gradient
       
      }}
    >
      <Container>
        <Row className='justify-content-center'>
          <Col md={6}>
            <div className='p-4 rounded shadow bg-body'>
              <h2 className='mb-4 text-center'>Login Form</h2>

              {/* Error message */}
              {error && <Alert variant='danger'>{error}</Alert>}
              {/* Success message */}
              {success && <Alert variant='success'>{success}</Alert>}
               {/* Theme toggle */}
               <div className="d-flex justify-content-end mb-3">
                <Button
                  variant={theme === "light" ? "dark" : "light"}
                  size="sm"
                  onClick={() =>
                    setTheme(theme === "light" ? "dark" : "light")
                  }
                >
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </Button>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control
                    type='text'
                    name='firstname'
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Lastname</Form.Label>
                  <Form.Control
                    type='text'
                    name='lastname'
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Gender Radio */}
                <Form.Group className='mb-3'>
                  <Form.Label>Gender</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      label='Male'
                      type='radio'
                      name='gender'
                      value='male'
                      onChange={handleChange}
                    />
                    <Form.Check
                      inline
                      label='Female'
                      type='radio'
                      name='gender'
                      value='female'
                      onChange={handleChange}
                    />
                  </div>
                </Form.Group>

                <Button variant='primary' type='submit' className='w-100'>
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LoginForm
