import {
    Row,
} from "reactstrap";
import BigCard from "../../components/dashboard/BigCard";
import axios from "axios";
import {useParams} from "react-router-dom"
import React,{useState,useEffect} from 'react'

const useFetch = url => {
    const [data, setData] = useState(null);
  
    async function fetchData() {
      const response = await axios.get(url);
      setData(response.data);
    }
  
    useEffect(() => {fetchData()},[url]);
    return data;
  };

const Events = () => {
    const { id } = useParams()
    const event = useFetch("https://cooltura.tk:2080/api/events/"+id)
    if (!event) {
        return <div>Loading...</div>
    }
    return(

        <div>
            <Row>
                <BigCard
                            eventId={id}
                            image={"https://cooltura.tk:2080/api/events/image/view/uploads/"+id}
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