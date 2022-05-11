import { Modal, Button, FormControl, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import '../css/home.css';

export function SMSmodal(props) {
  const [show, setShow] = useState(false);
  const [phNumber, setPhNumber] = useState('');

  const handleNumberChange = (event) => {
    setPhNumber(event.target.value);
    console.log(phNumber);
  };
  const handleSendSMSClick = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert('SMS will be sent shortly');
      setPhNumber('');
    }, 1000);

    const response = await fetch(
      'https://nrly.herokuapp.com/api/sms/twiliosms',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: phNumber,
          data: props.finalUrl,
        }),
      }
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' className={'sms-button'} onClick={handleShow}>
        Send link as SMS
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter the Mobile Number</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='mb-4'>
            <FormControl
              aria-label='Enter the Mobile Number'
              type='text'
              id='inputUrl'
              placeholder='Enter the Mobile Number'
              value={phNumber}
              onChange={handleNumberChange}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSendSMSClick}>
            Send SMS
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
