import { Col, Row } from "reactstrap";
import Blog from "../../components/dashboard/Blog";
import bg4 from "../../components/dashboard/uploadimg.png";
import React,{useState,useEffect} from 'react'

const axios = require('axios')


const useFetch = url => {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await axios.get(url);
    setData(response.data);
  }

  useEffect(() => {fetchData()},[url]);
  return data;
};

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  };

const PassedEvents = () => {
    const token = sessionStorage.getItem("LoginToken");
    const userData = token ? parseJwt(token) : null;
    var dataForServer = encodeURIComponent(sessionStorage.getItem("LoginToken"));
    const BlogData = useFetch("https://cooltura.tk/api/users/events/past/"+userData.id);
    
    if (!BlogData) {
        return <div>Loading...</div>
    }
  return (
    <div>
      <Row>
        {BlogData.map((blg) => (
          <Col sm="6" lg="6" xl="3" key={blg.id}>
            <Blog
              id={blg.id}
              image={"https://cooltura.tk/api/events/image/view/uploads/"+blg.id}
              title={blg.title}
              subtitle={blg.title}
              text={`Interested: ${blg.interested ?? 0}`}
              color="primary"
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PassedEvents;