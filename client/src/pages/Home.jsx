import { useState } from "react";
import InputURL from "./Sections/InputURL";
import ShowQR from "./Sections/ShowQR";
import ShowSMS from "./Sections/ShowSMS";
import Result from './Sections/Result';
import animatedLoading from '../assets/loading-animated.svg';
import "../css/home.css";
import '../css/animated.css';

export default function Home() {

  /* States Center */
  const [ url, setUrl ] = useState("");
  const [ narrowURL, setNarrowURL ] = useState("");
  const [ status, setStatus ] = useState("idle");
  const [ showQR, setShowQR ] = useState(false);
  const [ showSMS, setShowSMS ] = useState(false);
  
  // For component InputUrl
  function URLInput(element){
    setUrl(element.target.value);
  };

  // For component InputUrl
  function HandleEnter(e){
    // it triggers Narrow Link by pressing the enter key
    if (e.keyCode === 13) {
      ShortenURL();
    }
  };

  // Input Link Function
  async function ShortenURL(e) {
    setStatus("loading");

    const response = await fetch(
      "https://nrly.herokuapp.com/api/url/narrowurl",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          originalUrl: url
        })
      }
    );

    const jsonResponse = await response.json();
    setUrl(jsonResponse.originalUrl);
    setNarrowURL(`http://nrly.herokuapp.com/${jsonResponse.shortUrl}`);
    setStatus("done");
  };

  return (
    // This is the HTML data of the homepage ie; the page in which we give original Url and get the short Url

    // So basically put all your html data here for the page . Please note that you don't have to write the html for navbar here. For Navbar there is separate file called Navbar.js in src/components/Navbar.js. Just write the navbar code there and it will appear here

    // For the css for this page as well as the navbar page there are separate files made there named home.css and navbar.css just write your css there and it will automatically appear here because i have imported it here and Navbar.js files
    <>
      { showQR && <ShowQR narrowURL={narrowURL} setShowQR={setShowQR} /> }
      { showSMS && <ShowSMS narrowURL={narrowURL} setShowSMS={setShowSMS} /> }

      <section id="shortener">
        <section className="headline flex flex-col items-center justify-center text-center animated-fadeIn">
          <p className="the">The</p>
          <h1 className="big-headline">URL Shortener</h1>
          <p className="description">Shorten your link with ease and share your link via SMS or scan QR code</p>
        </section>

        <InputURL url={url} URLInput={URLInput} HandleEnter={HandleEnter} ShortenURL={ShortenURL} />

        { status === "idle" &&
          <section className="idleState animated-fadeIn">
            <p className="title">Try shorten your URL<br/> It's free 😁</p>
          </section>
        }

        { status === "loading" &&
          <section className="loadingState animated-fadeIn">
            <h1 className="title">Shortening your url ...</h1>
            <img src={animatedLoading} alt="loading-animated" className="loading-animated" />
          </section>
        }

        { status === "done" &&
          <Result narrowURL={narrowURL} setShowSMS={setShowSMS} setShowQR={setShowQR} />
        }
      </section>
    </>
  );
};