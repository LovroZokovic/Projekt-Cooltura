import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";
import Starter from "../Starter";
import Login from "./Login";

  const axios = require('axios')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.elements.email.value)
    console.log(event.target.elements.username.value)
    console.log(event.target.elements.password.value)
    console.log(event.target.elements.select.value)
    axios.post('http://localhost:2080/api/auth/signup', {
      email: event.target.elements.email.value,
      username: event.target.elements.username.value,
      password: event.target.elements.password.value,
      role: event.target.elements.select.value
    }).then((response) => {
      console.log(response);
    });
    window.location.replace("http://localhost:3000/#/login");
  }

  const Registration = () => {

    return (
      <Row>
        <Col>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Register form
            </CardTitle>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input
                    id="Email"
                    name="email"
                    placeholder="enter email"
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Username">Username</Label>
                  <Input
                    id="Username"
                    name="username"
                    placeholder="enter username"
                    type="username"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input
                    id="Password"
                    name="password"
                    placeholder="enter password"
                    type="password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select role</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>User</option>
                    <option>Creator</option>
                  </Input>
                </FormGroup>
                <Button type="submit" >Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Registration;