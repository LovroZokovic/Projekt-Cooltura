import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React, { useState } from "react";
import axios from 'axios'
import {Link} from "react-router-dom";
import Starter from "../Starter";

/*const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.elements.title.value)
    console.log(event.target.elements.description.value)
    axios.post('http://localhost:2080/api/events/', {
        title: event.target.elements.title.value,
        description: event.target.elements.description.value,
    }).then((response) => {
        console.log(response);
    });
    return Starter;
}*/


const AddEvent = () => {
    const [state, setState] = useState({
        title:'',
        description:'',
        date:'',
        time:''
    });
    function onChange(event) {
		const { name, value } = event.target;
		setState((oldForm) => ({ ...oldForm, [name]: value }));
	}


    function onSubmit(e) {
        e.preventDefault();
        if (
            state.title === '' ||
            state.description === '' ||
            state.date === '' || 
            state.time === ""
        ) {
            console.log("svi podatci se trebaju unjeti")
        }
        const formData = new FormData();
        formData.append("title", state.title);
        formData.append("description",state.description);
        formData.append("date",state.date);
        formData.append("time",state.time);
        formData.append("image",selectedImage);
        axios.post('http://localhost:2080/api/events/', formData).then((res) => {
            setState({
                title:'',
                description:'',
                date:'',
                time:''
            })
        }, (error) => {
            console.log(error);
        })
    }

    const [selectedImage, setSelectedImage] = useState(null);
  return(
      <Row>
          <Col>
              {/* --------------------------------------------------------------------------------*/}
              {/* Card-1*/}
              {/* --------------------------------------------------------------------------------*/}
              <Card>
                  <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                      <i className="bi bi-caret-down"> </i>
                      Add event
                  </CardTitle>
                  <CardBody>
                      <Form onSubmit={onSubmit}>
                          <FormGroup>
                              <Label for="title">The title of event</Label>
                              <Input
                                  id="title"
                                  name="title"
                                    onChange={onChange}
                                    value={state.title}
                                  type="text"
                              />
                          </FormGroup>
                          <FormGroup>
                              <Label for="description">Description</Label>
                              <Input id="description" name="description" type="textarea" 
                              onChange={onChange} value={state.description} />
                          </FormGroup>
                          <FormGroup>
                              <Label for="date">The date of event</Label>
                              <Input
                                  id="date"
                                  name="date"
                                  onChange={onChange}
                                  value={state.date}
                                  type="date"
                              />
                          </FormGroup>
                          <FormGroup>
                              <Label for="time">The time of event</Label>
                              <Input
                                  id="time"
                                  name="time"
                                  onChange={onChange}
                                  value={state.time}
                                  type="time"
                              />
                          </FormGroup>
                          <FormGroup>
                              {selectedImage && (
                                  <div>
                                      <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                      <br />
                                      <button onClick={()=>setSelectedImage(null)}>Remove</button>
                                  </div>
                              )}
                              <br />
                              <Label for="myImage">Upload image</Label>
                              <br />
                              <input
                                  id="myImage"
                                  type="file"
                                  name="myImage"
                                  onChange={(event) => {
                                      console.log(event.target.files[0]);
                                      setSelectedImage(event.target.files[0]);
                                  }}
                              />
                          </FormGroup>
                          <Button type="submit" style={{marginRight: "0.5rem"}}>Add</Button>
                          <Link to="/starter" className="btn btn-secondary">Cancel</Link>
                      </Form>
                  </CardBody>
              </Card>
          </Col>
      </Row>
  );
};

export default AddEvent;