import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {Row, Col} from "reactstrap"
import e1 from "../../assets/images/bg/zg_kaz.jpg";
import e2 from "../../assets/images/bg/zg_muzej_iluzija.jpg";
import e3 from "../../assets/images/bg/zg_muzej_mimara.jpg";
import Passed from "../../components/dashboard/Passed";

const Data = [
    {
        image: e1,
        title: "Zagreb Theater Hamlet Drama",
        date: new Date(2021, 2, 6).toDateString(),
    },
    {
        image: e2,
        title: "Museum of illusion opening night",
        date: new Date(2021, 4, 12).toDateString(),
    },
    {
        image: e3,
        title: "Museum Mimara special event",
        date: new Date(2021, 8, 25).toDateString(),
    },
];


const PassedEvents = () => {

    const[events, setEvents] = useState([]);

    const [passedEvents, setPassedEvents] = useState([]);


    const {id} = useParams();

    function getPassedEvents(){
        axios.get(`http://localhost:2080/api/interests/user/${id}`).then(
            (response) => setEvents(response.data)
        ).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            {/***Blog Cards***/}
            <Row>
                {getPassedEvents().map((event, index) => (
                    <Col sm="6" lg="6" xl="3" key={index}>
                        <Passed

                            image={event.image}
                            title={event.title}
                            subtitle={event.date}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default PassedEvents;