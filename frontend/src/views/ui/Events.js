import {
    Row,
} from "reactstrap";
import BigCard from "../../components/dashboard/BigCard";
import axios from "axios";

let event = {
    id: "",
    title: "",
    description: "",
    date: new Date(2021, 8, 25).toDateString(),
    image: "",

}

//const EventsData =
  //  {
   //     image: e4,
   //     title: "Technical museum",
    //    subtitle: "Remembering world war 2",
    //    description: "Join us on this historical journey related to all interested things happened in the world war 2. Stories about Nazi Germany, Holocaust, Soviets. We will depict you all the horrors of the war through our presentations and curious war possessions that we own, war tanks, planes, guns, mines, uniforms. Come and see it for yourself",
   //     color: "primary",
   //     date: "11.2.2022.",
    //    time: "17:00",
  //  };

function getEvent() {
    axios.get("https://localhost:2080/api/events/:id").
        then((response) => {
            console.log(response);
            event = response.data;
    });
}

getEvent();

const Events = () => {
    return(

        <div>
            <Row>
                        <BigCard
                            image={event.image}
                            title={event.title}
                            text={event.description}
                            color={"primary"}
                            date={event.date}
                        />
            </Row>
        </div>
    );
};



export default Events;