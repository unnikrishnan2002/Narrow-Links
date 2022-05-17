import { OutputUrl } from './Sections/OutputUrl';
import React, { useState } from 'react';
import '../css/home.css';
import { ShareLink } from './Sections/ShareLink';
import { InputUrl } from './Sections/InputUrl';

const URLshortener = () => {
  /*Input Link Funtion*/
  const [url, setUrl] = useState('');
  const handleOnClick = async (e) => {
    e.preventDefault();
    setNarrowUrl('Loading...');
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

  const handleChange = (event) => {
    setUrl(event.target.value);
  };
  const handleKeypress = (e) => {
    //it triggers Narrow Link by pressing the enter key
    if (e.keyCode === 13) {
      handleOnClick();
    }
  };
  /*End Input Link Funtion*/

  /* Start Output Url Functions*/
  const [narrowUrl, setNarrowUrl] = useState('');
  let finalUrl = 'http://nrly.herokuapp.com/';

  finalUrl = narrowUrl ? 'http://nrly.herokuapp.com/' + narrowUrl : '';
  const handleCopyClick = () => {
    navigator.clipboard.writeText(finalUrl);
    alert('Narrow URL Copied!!');
  };
  /* End Output Url Functions*/

  /*QR Link Functions*/
  const handleQRClick = () => {
    let imgSrc =
      'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' +
      finalUrl;
    window.open(imgSrc);
  };
  /*QR Link Functions*/

  /* SMS Modal*/
  const [show, setShow] = useState(false);
  const [phNumber, setPhNumber] = useState('');

  const handleNumberChange = (event) => {
    setPhNumber(event.target.value);
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
          data: finalUrl,
        }),
      }
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  };
  /*End of SMS Modal*/

  return (
    // This is the HTML data of the homepage ie; the page in which we give original Url and get the short Url

    // So basically put all your html data here for the page . Please note that you don't have to write the html for navbar here. For Navbar there is seperate file called Navbar.js in src/components/Navbar.js. Just write the navbar code there and it will appear here

    // For the css for this page as well as the navbar page there are seperate files made there named home.css and navbar.css just write ypur css there and it will automatically appear here because i have imported it here and Navbar.js files
    <>
      <div className='shortener' id='shortener'>
        <h1 className='narrow-links text-center'>Narrow-Links</h1>
        <InputUrl
          url={url}
          handleChange={handleChange}
          handleKeypress={handleKeypress}
          handleOnClick={handleOnClick}
        />
        <div className='container my-4 mx-auto'>
          <OutputUrl finalUrl={finalUrl} handleCopyClick={handleCopyClick} />
          <ShareLink
            handleQRClick={handleQRClick}
            phNumber={phNumber}
            handleNumberChange={handleNumberChange}
            handleSendSMSClick={handleSendSMSClick}
          />
        </div>
      </div>
    </>
  );
};

export default URLshortener;
