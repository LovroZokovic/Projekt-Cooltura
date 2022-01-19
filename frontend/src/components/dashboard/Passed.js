import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardTitle,
} from "reactstrap";
import {Link} from "react-router-dom";

const Passed = (props) => {
    return (
        <Card>
            <CardImg alt="Card image cap" src={props.image} />
            <CardBody className="p-4">
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardSubtitle>{props.subtitle}</CardSubtitle>
                <Link to="/comment" className="btn btn-primary">Comment and rate</Link>
            </CardBody>
        </Card>
    );
};


export default Passed;