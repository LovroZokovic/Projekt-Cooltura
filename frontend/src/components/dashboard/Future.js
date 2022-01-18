import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardTitle,
} from "reactstrap";

const Future = (props) => {
    return (
        <Card>
            <CardImg alt="Card image cap" src={props.image} />
            <CardBody className="p-4">
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardSubtitle>{props.subtitle}</CardSubtitle>
            </CardBody>
        </Card>
    );
};

export default Future