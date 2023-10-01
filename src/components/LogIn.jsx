import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';


async function handlepeticionLogIn({ username , password, setState, handleLogIn}) {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: username, password: password }),
    });

    console.log(response.status, username, password);
  
    if (response.status === 200) {
      handleLogIn();
      console.log("Logged in successfully!");
    } else if (response.status === 401) {
      setState(1);
      console.log("Error: Invalid login or password");
    }
  }


export default function LogIn({ handleLogIn }) {
  const [formValues, setFormValues] = React.useState({ username: '', password: '' });
  const [state, setState] = React.useState(0);

  const handleUserChange = (e) => {
    setFormValues({ ...formValues, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const buttonClick = (event) => {
    event.preventDefault();

    handlepeticionLogIn({ username: formValues.username, password: formValues.password, setState, handleLogIn });


  };

  return (
    <Container style={{ width: '90%' }}>
      <br />
      <h3><FormattedMessage id='LogInTitle' /></h3>
      <br />
      <Row className="justify-content-center">
        <Col md={12}>
          <Container className="lofInContainer" style={{ backgroundColor: '#E0BBBB33', border: '1px solid black', borderColor: 'black', borderWidth: '1px', paddingLeft: '100px', paddingRight: '100px'  }}>
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold"><FormattedMessage id='Name' /></Form.Label>
                <Form.Control type="text" onChange={handleUserChange} value={formValues.username} style={{ borderRadius: '0', backgroundColor: '#D9D9D9' }} />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold"><FormattedMessage id='Password' /></Form.Label>
                <Form.Control type="password" onChange={handlePasswordChange} value={formValues.password} style={{ borderRadius: '0', backgroundColor: '#D9D9D9' }} />
              </Form.Group>
  
              <div className="d-flex justify-content-between w-100">
                <Button variant="success" style={{ borderRadius: '0', marginRight: '10px' }} onClick={buttonClick}><FormattedMessage id='LogIn' /></Button>
                <Button variant="danger" style={{ borderRadius: '0' }}><FormattedMessage id='Cancel' /></Button>
              </div>
            </Form>
            {state === 1 && <p className="mt-3 text-danger fw-bold"><FormattedMessage id='Error' /></p>}
            <br />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}