import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Button,
} from "reactstrap";

const BigCard = (props) => {
    return (
        <Card>
            <CardImg alt="Card image cap" src={props.image} />
            <CardBody className="p-4">
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardSubtitle>{props.subtitle}</CardSubtitle>
                <CardSubtitle>{props.date} {props.time}</CardSubtitle>
                <CardText className="mt-3">{props.text}</CardText>
                <Button color={props.color}>Interested</Button>
            </CardBody>
        </Card>
    );
};

export default BigCard;