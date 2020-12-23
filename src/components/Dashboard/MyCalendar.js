import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';

export default function MyCalendar(props) {

  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { dayOfTheWeek, currentTime } = props

  return (
    <>
      <button id="calendar-button" onClick={handleShow}>
        Calendar
      </button>
      <Modal show={show} onHide={handleClose} animation={false} aria-labelledby="contained-modal-title-vcenter" centered id="calendar-modal">
        <Modal.Header closeButton>
          <Modal.Title>
            <div>{dayOfTheWeek}, {currentTime}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="calendar-wrapper">
            <Calendar onChange={onChange} value={value} calendarType={"US"} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
