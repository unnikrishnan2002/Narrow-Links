import React, { useState } from 'react';
import './css/home.css'

const NewURL = () => {

  const [url, setUrl] = useState("");
  const [narrowUrl, setNarrowUrl] = useState("");

  let finalUrl = "nrly.herokuapp.com/";

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


  finalUrl = narrowUrl ? "nrly.herokuapp.com/" + narrowUrl : "nrly.herokuapp.com/";

  const handleChange = (event) => {
    setUrl(event.target.value)
    // console.log(url);
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(finalUrl);
    alert("Narrow URL Copied!!");
  }

  function qrCalling(){
    let input = document.querySelector(".form input");
    let userInput = input.value;
    let imgSrc = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+userInput;
    window.open(imgSrc);
  }

  return (

    // This is the HTML data of the homepage ie; the page in which we give original Url and get the short Url

    // So basically put all your html data here for the page . Please note that you don't have to write the html for navbar here. For Navbar there is seperate file called Navbar.js in src/components/Navbar.js. Just write the navbar code there and it will appear here

    // For the css for this page as well as the navbar page there are seperate files made there named home.css and navbar.css just write ypur css there and it will automatically appear here because i have imported it here and Navbar.js files
    <>

    <body>
    <div className="shortener">
    <div className=" container my-5 ">
      <h1 className="narrow-links">Narrow-Links</h1>
      <form className="row g-3">
        <div className="col-auto form">
          <input type="text" className="link-box form-control " id="inputPassword2" placeholder="Paste URL to shorten" value={url} onChange={handleChange} />
        </div>
        <div className="col-auto">
          <button type="submit" className="shorten-button btn btn-primary mb-3" onClick={handleOnClick}>Narrow</button>
        </div>
      </form>
      <div style={{height: '70px'}}>
        <div className="narrowurl">{finalUrl}</div>
      </div>
      
      <div class="row">
        <div className="copy-btn col-md-6">
          <button type="copy" onClick={handleCopyClick} className="copy-button btn btn-primary mb-3">Copy Narrow-URL</button>
        </div>
        <div className="col-md-6">
          <a className="QR-icon" href="">
            <i onClick={qrCalling} class="fa-solid fa-qrcode"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
    </body>
    </>
  )
}

export default NewURL