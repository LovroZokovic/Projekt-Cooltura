import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Button,
} from "reactstrap";
import axios from "axios";

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

const BigCard = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem("LoginToken");
        const userData = token ? parseJwt(token) : null;

        if (!userData) {
            return;
        }

        axios.post("http://cooltura.tk:2080/api/interests/", {
            user_id: userData.id,
            event_id: props.eventId,
        });
    }

    return (
        <Card>
            <CardImg alt="Card image cap" src={props.image} />
            <CardBody className="p-4">
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardSubtitle>{props.date}</CardSubtitle>
                <CardText className="mt-3">{props.text}</CardText>
                <Button color={props.color} onClick={handleClick}>Interested</Button>
            </CardBody>
        </Card>
    );
};

export default BigCard;