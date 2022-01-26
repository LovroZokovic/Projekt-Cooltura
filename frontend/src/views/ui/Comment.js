import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React from "react";
import RatingStars from "../../components/dashboard/RatingStars";
import {Link} from "react-router-dom";

const Comment = () => {
    return(
        <Row>
            <Col>
                {/* --------------------------------------------------------------------------------*/}
                {/* Card-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-chat-square-text"> </i>
                        Add comment
                    </CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="comment">Rate</Label>
                                <RatingStars />
                            </FormGroup>
                            <FormGroup>
                                <Label for="comment">Comment</Label>
                                <Input id="comment" name="comment" type="textarea" />
                            </FormGroup>
                            <Button style={{marginRight:"0.5rem"}}>Add</Button>
                            <Link to="/passedEvents" className="btn btn-dark">Cancel</Link>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Comment;