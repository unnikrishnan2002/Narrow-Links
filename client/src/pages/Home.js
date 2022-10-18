import { OutputUrl } from "./Sections/OutputUrl";
import React, { useState,useEffect } from "react";
import "../css/home.css";
import { ShareLink } from "./Sections/ShareLink";
import { InputUrl } from "./Sections/InputUrl";
import Alert from 'react-bootstrap/Alert';

const URLshortener = () => {
  // Request loading state
  const [loading, setLoading] = useState(false);
  const [showAlerts,setShowAlerts]=useState(false)
  const [message,setShowMessage]=useState("")

  /*Input Link Function*/
  const [isValid, setIsValid] = useState(false)
  const [url, setUrl] = useState("");

  // Checking for a valid URL
  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + 
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + 
        "((\\d{1,3}\\.){3}\\d{1,3}))" + 
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + 
        "(\\?[;&a-z\\d%_.~+=-]*)?" + 
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlPattern.test(urlString);
  };
useEffect(() => {
    window.setTimeout(()=>{
      setShowAlerts(false)
    },2000)
}, [showAlerts])

  const handleOnClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNarrowUrl("Loading...");
    const response = await fetch(
      "https://nrly.herokuapp.com/api/url/narrowurl",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          originalUrl: url,
        }),
      },
    );

    const jsonResponse = await response.json();
    setUrl(jsonResponse.originalUrl);
    setLoading(false);
    if(isValidUrl(jsonResponse.originalUrl)) {
      setNarrowUrl(jsonResponse.shortUrl);
      setIsValid(true);
    }
    else
      setNarrowUrl("");

    if (!narrowUrl) {
      alert("The given URL is invalid.... Try again with a valid URL");
    }
    const getUrl = await fetch(`/${narrowUrl}`, {
      method: "GET",
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
  const showMessage=(msg)=>{
    setShowAlerts(true)
    setShowMessage(msg)
  }
  /*End Input Link Function*/

  /* Start Output Url Functions*/
  const [narrowUrl, setNarrowUrl] = useState("");
  let finalUrl = "";

  finalUrl = narrowUrl && isValid ? "http://nrly.herokuapp.com/" + narrowUrl : "";
  const handleCopyClick = () => {
    navigator.clipboard.writeText(finalUrl);
    showMessage("Narrow Url Copied!!")
  };
  /* End Output Url Functions*/

  /*QR Link Functions*/
  const handleQRClick = () => {
    let imgSrc =
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
      finalUrl;
    return imgSrc;
  };
  /*QR Link Functions*/

  /* SMS Modal*/
  const [phNumber, setPhNumber] = useState("");

  const handleNumberChange = (event) => {
    setPhNumber(event.target.value);
  };
  const handleSendSMSClick = async (e) => {
    e.preventDefault();
    showMessage("SMS will be sent shortly")
    setTimeout(() => {
      setPhNumber("");
    }, 1000);

    const response = await fetch(
      "https://nrly.herokuapp.com/api/sms/twiliosms",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: phNumber,
          data: finalUrl,
        }),
      },
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  };
  /*End of SMS Modal*/

  return (
    // This is the HTML data of the homepage ie; the page in which we give original Url and get the short Url

    // So basically put all your html data here for the page . Please note that you don't have to write the html for navbar here. For Navbar there is separate file called Navbar.js in src/components/Navbar.js. Just write the navbar code there and it will appear here

    // For the css for this page as well as the navbar page there are separate files made there named home.css and navbar.css just write your css there and it will automatically appear here because i have imported it here and Navbar.js files
    <> {showAlerts?<Alert className="alert-box" variant= 'success' onClose={()=>setShowAlerts(false)} dismissible>{message}</Alert>:null}
      <div className="shortener" id="shortener">
        <h1 className="narrow-links text-center">Narrow-Links</h1>
        <InputUrl
          url={url}
          handleChange={handleChange}
          handleKeypress={handleKeypress}
          handleOnClick={handleOnClick}
        />
        <div className="container my-4 mx-auto">
          <OutputUrl
            finalUrl={finalUrl}
            handleCopyClick={handleCopyClick}
            loading={loading}
          />
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
