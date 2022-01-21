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

  const axios = require('axios')

  async function handleSubmit(event){
    event.preventDefault()
    var login;
    console.log(event.target.elements.username.value)
    console.log(event.target.elements.password.value)
    response = await axios.post('http://localhost:2080/api/auth/login', {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value,
    }).then((res) => {
      console.log(res);
      login = response;
      window.location.replace("http://localhost:3000/#/Starter");
    });
  }


  const Login = () => {
    return (
      <Row>
        <Col>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Login form. Don't have an account? Register <a href="/#/Registration">here</a>.
            </CardTitle>
            <CardBody>
              <Form onSubmit={handleSubmit}>
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
                <Button type="submit">Login</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Login;