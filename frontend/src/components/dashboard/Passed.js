import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
} from "reactstrap";
import RatingStars from "./RatingStars";
import {Link} from "react-router-dom";

const Passed = (props) => {
    return (
        <Card>
            <CardImg alt="Card image cap" src={props.image} />
            <CardBody className="p-4">
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardSubtitle>{props.subtitle}</CardSubtitle>
                <CardText className="mt-3">{props.text}</CardText>
                <CardSubtitle>Rate:</CardSubtitle>
                <RatingStars />
                <Link to="/comment" className="btn btn-primary">Comment</Link>
            </CardBody>
        </Card>
    );
};


export default Passed;