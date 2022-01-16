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
              <Form>
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
                <Button>Login</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Login;