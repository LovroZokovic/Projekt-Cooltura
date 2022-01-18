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
              <Form>
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
                <Button>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Registration;