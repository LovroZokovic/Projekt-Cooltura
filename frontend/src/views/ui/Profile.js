import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};
 

  const token = sessionStorage.getItem("LoginToken");
  const userData = token ? parseJwt(token) : null;
  
  const Profile = () => {
  return (
    <div>
      <Row>
          <Col lg = "6">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" height="500px"></img>
          </Col>
          <Col>
          <Card>
            <CardHeader className="username">
              <h3>Username</h3>
            </CardHeader>
          <CardBody>
          {userData.username}
          </CardBody>
          </Card>
          <Card>
            <CardHeader className="user-email">
              <h3>Email</h3>
            </CardHeader>
          <CardBody>
      {userData.email}
          </CardBody>
          </Card>
          </Col>
      </Row>
      <br></br>
    </div>
  );
};

export default Profile;
