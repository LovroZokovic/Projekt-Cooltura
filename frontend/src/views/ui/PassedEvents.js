import axios from "axios";
import { useEffect, useState } from "react";
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

    function fakeEvents(){
        return Data
    }

    const[events, setEvents] = useState([]);

    const {id} = useParams();

    function getPassedEvents(){
        axios.get(`http://localhost:2080/api/interests/user/${id}`).then(
            (response) => {
                const passedEvents = [];
                const current = new Date();
                const Cdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
                if (response.date < Cdate ){
                    passedEvents.append()
                }
            }
        ).catch((err) => {
            console.log(err)
        })

    }

    useEffect(() => {
    })
    return (
        <div>
            {/***Blog Cards***/}
            <Row>
                {fakeEvents().map((event, index) => (
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