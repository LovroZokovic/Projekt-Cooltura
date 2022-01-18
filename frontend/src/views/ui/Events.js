import {
    Row,
} from "reactstrap";
import e4 from "../../assets/images/bg/zg_teh_muzej.jpg";
import BigCard from "../../components/dashboard/BigCard";

const EventsData =
    {
        image: e4,
        title: "Technical museum",
        subtitle: "Remembering world war 2",
        description: "Join us on this historical journey related to all interested things happened in the world war 2. Stories about Nazi Germany, Holocaust, Soviets. We will depict you all the horrors of the war through our presentations and curious war possessions that we own, war tanks, planes, guns, mines, uniforms. Come and see it for yourself",
        color: "primary",
        date: "11.2.2022.",
        time: "17:00",
    };

const Events = () => {
    return(

        <div>
            <Row>
                        <BigCard
                            image={EventsData.image}
                            title={EventsData.title}
                            subtitle={EventsData.subtitle}
                            text={EventsData.description}
                            color={EventsData.color}
                            date={EventsData.date}
                            time={EventsData.time}
                        />
            </Row>
        </div>
    );
};



export default Events;