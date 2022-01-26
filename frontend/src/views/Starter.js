import { Col, Row } from "reactstrap";
import Blog from "../components/dashboard/Blog";
import bg4 from "../components/dashboard/uploadimg.png";
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

const Starter = () => {
    const BlogData = useFetch("https://cooltura.tk:2080/api/events/");
    
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
              image={"https://cooltura.tk:2080/api/events/image/view/uploads/"+blg.id}
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

export default Starter;