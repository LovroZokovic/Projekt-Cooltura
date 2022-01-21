import { Col, Row } from "reactstrap";

import Blog from "../components/dashboard/Blog";
import bg4 from "../components/dashboard/uploadimg.png";

const axios = require('axios')

const BlogData = [
  {
    id: 1,
    
    title: "Kazaliste Mimara special event",
    date: new Date(2021, 12, 1).toDateString(),
    interested: 1312,
  },
  {
    id: 2,
    
    title: "De Facto kazališna grupa",
    date: new Date(1990, 11, 1).toDateString(),
    interested: 420,
  },
  {
    id: 3,
    
    title: "Epilog teatar",
    date: new Date(1990, 10, 1).toDateString(),
    interested: 100000,
  },
  {
    id: 4,
    
    title: "Gradsko kazalište lutaka Split",
    date: new Date(1990, 10, 1).toDateString(),
    interested: 10,
  },
  {
    id: 5,
    
    title: "Hrvatsko narodno kazalište Split",
    date: new Date(1990, 10, 1).toDateString(),
    interested: 12,
  },
  
];



async function getEvents(){
  var variables = await axios.get('http://localhost:2080/api/events/');
  waitEvents()
  return variables.data
}

function waitEvents(){

}


const Starter = () => {
  return (
    <div>
      {/***Blog Cards***/}
      <Row>
        {BlogData.map((blg, index) => {
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              id={blg.id}
              image={bg4}
              title={blg.title}
              subtitle={blg.date}
              text="{'Interested: ' + 1}"
              color="primary"
            />
          </Col>
        })}
      </Row>
    </div>
  );
};

export default Starter;


{/* <Row>
        {getEvents().then((data) => data.map((blg, index) => {
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              id={blg.id}
              image={bg4}
              title={blg.title}
              subtitle={blg.title}
              text="{'Interested: ' + 1}"
              color="primary"
            />
          </Col>
        }))}
      </Row> */}