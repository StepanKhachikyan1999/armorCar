import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import parseMilliseconds from "parse-ms";
export function ArendModal(props) {
  const [value, onChange] = useState(new Date());
  const [finish, setFinish] = useState(new Date());
  const [deleveryDay, setDeleveryDay] = useState();

  let time;
  useEffect(() => {
    time = finish - value;
    if (time % 60000 >= 30000) time += 60000;

    setDeleveryDay(parseMilliseconds(time).days);
  }, [value, finish]);

  useEffect(() => {
    if (deleveryDay > 29) {
      alert("delevery day must be smal 30 days");
    }
    if (deleveryDay > 0) {
      alert(`delevery day's ${deleveryDay} totoal ${deleveryDay * 1000} `);
    }
    
  }, [deleveryDay]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Arend Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h3>start</h3>
          <Calendar onChange={onChange} value={value} />
        </div>
        <div>
          <h3>finish</h3>
          <Calendar onChange={setFinish} value={finish} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
