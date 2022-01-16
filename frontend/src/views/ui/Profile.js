import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import React, {useState} from 'react'



const Profile = () => {
  const [data, setData] = useState({
    firstName: 'userFirstName',
    lastName:'userLastName',
    userName:'username',
    email:'userEmail'
  })
  return (
    <div>
      <Row>
          <Col lg = "6">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" height="500px"></img>
          </Col>
          <Col>
          <Card>
            <CardHeader className="user-first-lastname">
              <h3>User</h3>
            </CardHeader>
          <CardBody>
            {data.firstName} {data.lastName}
          </CardBody>
          </Card>
          <Card>
            <CardHeader className="username">
              <h3>Username</h3>
            </CardHeader>
          <CardBody>
            {data.userName}
          </CardBody>
          </Card>
          <Card>
            <CardHeader className="user-email">
              <h3>Email</h3>
            </CardHeader>
          <CardBody>
            {data.email}
          </CardBody>
          </Card>
          </Col>
      </Row>
      <br></br>
    </div>
  );
};

export default Profile;
