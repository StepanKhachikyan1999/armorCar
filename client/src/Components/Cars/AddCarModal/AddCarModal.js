import axios from 'axios';
import React, {useState} from 'react'
import { Button, Form, Modal } from "react-bootstrap";

export function MyVerticallyCenteredModal(props) {

    const [number,setNumber] = useState("")
    const [mark,setMark] = useState("")

    const addCar = () => {
        axios.post('http://localhost:5000/cars', {
            carNumber: number,
            mark
          })
          .then(function (response) {
            console.log(response);
            setNumber("")
            setMark("")
            alert("car is added!")
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Car
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Car Number</Form.Label>
        <Form.Control  placeholder="car number" value={number} onChange={e=>setNumber(e.target.value)}/>
        <Form.Label>Car Mark</Form.Label>
        <Form.Control placeholder="mark" value={mark} onChange={e=>setMark(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={addCar}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }