import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";



const Profile = () => {
  const [data, setData] = useState({
    userName:'username',
    email:'userEmail'
  });

  const {id} = useParams();
  useEffect(() => {
      axios.get(`http://localhost:2080/api/users/${id}`)
        .then((res) => {
          console.log(res);
          setState({
            userName:res.username,
            email:res.email
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, [])
  
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
