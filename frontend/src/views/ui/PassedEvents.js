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
        rating: "5",
        comment: "some random comment",
        color: "info",
    },
    {
        image: e2,
        title: "Museum of illusion opening night",
        date: new Date(2021, 4, 12).toDateString(),
        rating: "3",
        comment: "some random comment",
        color: "info",
    },
    {
        image: e3,
        title: "Museum Mimara special event",
        date: new Date(2021, 8, 25).toDateString(),
        rating: "4",
        comment: "some random comment",
        color: "info",
    },
];

function getPassedEvents(){
    return Data;
}

const PassedEvents = () => {
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
                            rating={'Rating: ' + event.rating}
                            comment={'Comment: ' + event.comment}
                            color={event.color}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default PassedEvents;