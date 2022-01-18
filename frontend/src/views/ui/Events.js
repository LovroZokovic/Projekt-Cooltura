import {
    Row,
} from "reactstrap";
import e1 from "../../assets/images/bg/zg_kaz.jpg";
import e2 from "../../assets/images/bg/zg_muzej_iluzija.jpg";
import e3 from "../../assets/images/bg/zg_muzej_mimara.jpg";
import e4 from "../../assets/images/bg/zg_teh_muzej.jpg";
import BigCard from "../../components/dashboard/BigCard";

const EventsData = [
    {
        image: e1,
        title: "Zagreb theater",
        subtitle: "Drama show Hamlet",
        description: "The ghost of the King of Denmark tells his son Hamlet to avenge his murder by killing the new king, Hamlet's uncle. Hamlet feigns madness, contemplates life and death, and seeks revenge. His uncle, fearing for his life, also devises plots to kill Hamlet. The play ends with a duel, during which the King, Queen, Hamlet's opponent and Hamlet himself are all killed. ",
        color: "info",
        date: "19.2.2022.",
        time: "19:00",
    },
    {
        image: e2,
        title: "Museum of illusions",
        subtitle: "Opening",
        description: "Be a part of a new story, visit new museum in town on opening day and make sure you don't miss a thing. There will be opening ceremony, our stuff will help you experience every puzzle and illusion in your own way. Everyone who wants to have fun is welcome!",
        color: "info",
        date: "16.3.2022.",
        time: "15:00",
    },
    {
        image: e3,
        title: "Museum Mimara",
        subtitle: "Sculptures of acient greeks",
        description: "Come and see almighty ancient world! Hang with the most popular individuals the world has ever seen such as: Alexander the Great, Homer, Socrates, Plato, Aristotle, Perciles and many others. Experience the acient world in it's most vivid presentation.",
        color: "info",
        date: "25.1.2022.",
        time: "18:00",
    },
    {
        image: e4,
        title: "Technical museum",
        subtitle: "remembering world war 2",
        description: "Join us on this historical journey related to all interested things happened in the world war 2. Stories about Nazi Germany, Holocaust, Soviets. We will depict you all the horrors of the war through our presentations and curious war possessions that we own, war tanks, planes, guns, mines, uniforms. Come and see it for yourself",
        color: "info",
        date: "11.2.2022.",
        time: "17:00",
    },
];

const Events = () => {
    return(

        <div>
            <h3 className="mb-3">Events</h3>
            <Row>
                {EventsData.map((event) => (
                        <BigCard
                            image={event.image}
                            title={event.title}
                            subtitle={event.subtitle}
                            text={event.description}
                            color={event.color}
                            date={event.date}
                            time={event.time}
                        />
                ))}
            </Row>
        </div>
    );
};



export default Events;