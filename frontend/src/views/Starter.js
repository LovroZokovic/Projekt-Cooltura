import { Col, Row } from "reactstrap";

import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/hnkZG.jpg";
import bg2 from "../assets/images/bg/kazaliste1.png";
import bg3 from "../assets/images/bg/kazaliste2.jpg";
import bg4 from "../assets/images/bg/hnkZG.jpg";

const axios = require('axios')

const BlogData = [
  {
    image: bg1,
    title: "Kazaliste Mimara special event",
    date: new Date(2021, 12, 1).toDateString(),
    interested: 1312,
  },
  {
    image: bg2,
    title: "De Facto kazališna grupa",
    date: new Date(1990, 11, 1).toDateString(),
    interested: 420,
  },
  {
    image: bg3,
    title: "Epilog teatar",
    date: new Date(1990, 10, 1).toDateString(),
    interested: 100000,
  },
  {
    image: bg4,
    title: "Gradsko kazalište lutaka Split",
    date: new Date(1990, 10, 1).toDateString(),
    interested: 10,
  },
  {
    image: bg4,
    title: "Hrvatsko narodno kazalište Split",
    date: new Date(1990, 10, 1).toDateString(),
    interested: 12,
  },
  
];

function getEvents(){
  return BlogData
}

const Starter = () => {
  return (
    <div>
      {/***Blog Cards***/}
      <Row>
        {getEvents().map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              
              image={blg.image}
              title={blg.title}
              subtitle={blg.date}
              text={'Interested: ' + blg.interested}
              color="primary"
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Starter;
