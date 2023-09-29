import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

/*

async function handlepeticionLogIn({ username , password}) {
    const response = await fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.status === 200) {
      // Handle successful login
      console.log("Logged in successfully!");
    } else if (response.status === 401) {
      // Handle login error
      console.log("Error: Invalid login or password");
    }
  }

*/

export default function LogIn({ handleLogIn, enter }) {
  const [formValues, setFormValues] = React.useState({ username: '', password: '' });
  const [validations, setValidations] = React.useState({ username: false, password: false });

  const handleUserChange = (e) => {
    setFormValues({ ...formValues, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const buttonClick = (event) => {
    event.preventDefault();

    const e = formValues.username;
    const EMAIL_REGEX = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const emailValid = EMAIL_REGEX.test(e);
    const cant = formValues.password.length > 9;

    console.log(emailValid,cant);

    setValidations({ ...validations, username: emailValid, password: cant });

    const val = emailValid && cant && enter

    if (enter || val) {
        handleLogIn()
    }

  };

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h1>Inicia sesión</h1>
            <br />
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre se usuario</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleUserChange} value={formValues.username} isInvalid={!validations.username} isValid={validations.username} />
                {!validations.username && <Form.Text className="text-muted">Añade el correo en el formato indicado</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Conntraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} isInvalid={!validations.password} isValid={validations.password} />
                {!validations.password && <Form.Text className="text-muted">Tu contraseña debe tener mas de 9 caracteres </Form.Text>}
              </Form.Group>

              <Button onClick={buttonClick}>Submit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}