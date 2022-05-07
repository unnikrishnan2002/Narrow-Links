import React, { useState } from 'react';
import '../css/home.css'

const NewURL = () => {

  const [url, setUrl] = useState("");
  const [narrowUrl, setNarrowUrl] = useState("");

  const [phNumber, setPhNumber] = useState("");

  let finalUrl = "http://nrly.herokuapp.com/";

  const handleOnClick = async (e) => {

    e.preventDefault();

    const response = await fetch('https://nrly.herokuapp.com/api/url/narrowurl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        originalUrl: url
      })
    });
    const jsonResponse = await response.json();
    // console.log(jsonResponse);

    setUrl(jsonResponse.originalUrl);
    setNarrowUrl(jsonResponse.shortUrl);

    // console.log(url)


    const getUrl = await fetch(`/${narrowUrl}`, {
      method: 'GET',
    });
    // console.log(jsonGetUrl);


  }


  finalUrl = narrowUrl ? "http://nrly.herokuapp.com/" + narrowUrl : "";

  const handleChange = (event) => {
    setUrl(event.target.value)
    // console.log(url);
  }

  const handleNumberChange = (event) => {
    setPhNumber(event.target.value);
    console.log(phNumber);
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(finalUrl);
    alert("Narrow URL Copied!!");
  }

  const handleQRClick = (e) => {

    e.preventDefault();

    let input = document.querySelector(".form input");
    let userInput = input.value;
    let imgSrc = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + userInput;
    window.open(imgSrc);
  }

  const handleSendSMSClick = async (e) => {


    e.preventDefault();
    setTimeout(() => {
      alert("SMS will be sent shortly")
      
    }, 1000);

    const response = await fetch('https://nrly.herokuapp.com/api/sms/twiliosms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phoneNumber: phNumber,
        data: finalUrl
      })
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);

  }
  return (

    // This is the HTML data of the homepage ie; the page in which we give original Url and get the short Url

    // So basically put all your html data here for the page . Please note that you don't have to write the html for navbar here. For Navbar there is seperate file called Navbar.js in src/components/Navbar.js. Just write the navbar code there and it will appear here

    // For the css for this page as well as the navbar page there are seperate files made there named home.css and navbar.css just write ypur css there and it will automatically appear here because i have imported it here and Navbar.js files
    <>
      <div className="shortener">
        <div className=" container my-4">
          <h1 className="narrow-links">Narrow-Links</h1>
          <form className="row g-3">
            <div className="col-auto form">
              <input type="text" className="link-box form-control " id="inputUrl" placeholder="Paste URL to shorten" value={url} onChange={handleChange} data-testid="input"/>
            </div>
            <div className="col-auto">
              <button type="submit" className="shorten-button btn btn-primary mb-3" onClick={handleOnClick} data-testid="narrow">Narrow</button>
            </div>
          </form>
          <div style={{ height: '70px' }}>
            {/* <div className="narrowurl">{finalUrl}</div> */}

            <div className="input-group mb-3 narrowurl">
              <input type="text" className="form-control" placeholder="Shortened link will appear here" aria-describedby="button-addon2" value={finalUrl} readOnly />
              <button className="btn btn-success" onClick={handleCopyClick} type="button" id="button-addon2">Copy</button>
            </div>
          </div>

          <div className="row">
            <div className="copy-btn col-md-6">

              {/* <button type="copy" onClick={handleSendSMSClick} className="copy-button btn btn-primary mb-3">Send link as SMS</button> */}

              <button type="button" className="copy-button btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Send link as SMS
              </button>

              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Enter the Mobile Number</h5>
                      {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body">
                      <input type="text" className="form-control" id="phNumber" value={phNumber} onChange={handleNumberChange}/>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" onClick={handleSendSMSClick} data-bs-dismiss="modal">Send SMS</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <i onClick={handleCopyClick} className="fa-solid fa-clipboard"></i> */}
            </div>
            <div className="col-md-6">
              <a className="QR-icon" href="">
                <i onClick={handleQRClick} className="fa-solid fa-qrcode"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewURL