import React, { useState } from 'react';
import {
  FormControl,
  InputGroup,
  Container,
  ButtonGroup,
  Button,
} from 'react-bootstrap';
import { SMSmodal } from '../components/Modal';
import '../css/home.css';

const URLshortener = () => {
  const [url, setUrl] = useState('');
  const [narrowUrl, setNarrowUrl] = useState('');

  let finalUrl = 'http://nrly.herokuapp.com/';

  const handleOnClick = async (e) => {
    e.preventDefault();
    const response = await fetch(
      'https://nrly.herokuapp.com/api/url/narrowurl',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          originalUrl: url,
        }),
      }
    );

    const jsonResponse = await response.json();
    setUrl(jsonResponse.originalUrl);
    setNarrowUrl(jsonResponse.shortUrl);
    const getUrl = await fetch(`/${narrowUrl}`, {
      method: 'GET',
    });
  };

  finalUrl = narrowUrl ? 'http://nrly.herokuapp.com/' + narrowUrl : '';

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(finalUrl);
    alert('Narrow URL Copied!!');
  };

  const handleQRClick = () => {
    let imgSrc =
      'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' +
      finalUrl;
    window.open(imgSrc);
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleOnClick();
    }
  };

  return (
    // This is the HTML data of the homepage ie; the page in which we give original Url and get the short Url

    // So basically put all your html data here for the page . Please note that you don't have to write the html for navbar here. For Navbar there is seperate file called Navbar.js in src/components/Navbar.js. Just write the navbar code there and it will appear here

    // For the css for this page as well as the navbar page there are seperate files made there named home.css and navbar.css just write ypur css there and it will automatically appear here because i have imported it here and Navbar.js files
    <>
      <div className='shortener'>
        <Container className='narrow-links'>Narrow-Links</Container>
        <Container>
          <InputGroup className='mb-4 link-box'>
            <FormControl
              aria-label='Paste URL to shorten'
              type='text'
              id='inputUrl'
              placeholder='Paste URL to shorten'
              value={url}
              onChange={handleChange}
              onKeyPress={handleKeypress}
            />
            <ButtonGroup aria-label='Narrow Link'>
              <Button
                className='shorten-button'
                variant='primary'
                onClick={handleOnClick}
              >
                Narrow
              </Button>
            </ButtonGroup>
          </InputGroup>
          <InputGroup className='mb-4 narrowurl'>
            <FormControl
              aria-label='Shortened link will appear here'
              type='text'
              placeholder='Shortened link will appear here'
              value={finalUrl}
              readOnly
            />
            <ButtonGroup aria-label='Narrow Link'>
              <Button
                className='shorten-button'
                variant='success'
                onClick={handleCopyClick}
              >
                Copy
              </Button>
            </ButtonGroup>
          </InputGroup>
          <ButtonGroup aria-label='Send link as SMS'>
            {/* Send link as SMS button */}
            <SMSmodal finalUrl={finalUrl} />
            {/* QR link */}
            <div className='QR-icon' onClick={handleQRClick}>
              <i className='fa-solid fa-qrcode'></i>
            </div>
          </ButtonGroup>
        </Container>
      </div>
    </>
  );
};

export default URLshortener;
