import '../../css/result.css';
import '../../css/animated.css';
import resultIcon from '../../assets/result.svg';
import failureIcon from '../../assets/failure-icon.svg'
import SMSIcon from '../../assets/sms-icon.svg';
import QRIcon from '../../assets/qr-icon.svg';
import CopyIcon from '../../assets/copy-icon.svg';

export default function Result(props){

    const { narrowURL, SendSMS, setShowQR, setShowSMS , isValid} = props;

    function CopyShortenedURL() {
        navigator.clipboard.writeText(narrowURL);
        alert("Shortened URL Copied!");
    };

    function ShowQRCode() {
        setShowQR(true);
        return `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${narrowURL}`;
    };

    function ShowSMS(){
        setShowSMS(true);
    }

    return (
      <section className="resultState animated-fadeIn">
        <section className="headerContainer">
          <img src={isValid ? resultIcon : failureIcon} alt="result-icon" className="result-icon" />
          <h1 className="header-title">
            {isValid
              ? "Shortened URL is Ready"
              : "URL provided is Invalid. Try again with a Valid URL"}
          </h1>
        </section>

        {isValid && (
          <>
            <section className="linkContainer">
              <p className="title">Your Link</p>
              <h1 className="link">
                {narrowURL}
                <img
                  src={CopyIcon}
                  alt="copy-icon"
                  className="copy-icon"
                  onClick={CopyShortenedURL}
                />
              </h1>
            </section>

            <section className="shareContainer">
              <p className="title">Share</p>
              <div className="buttons">
                <button className="sms" onClick={ShowSMS}>
                  <img src={SMSIcon} alt="sms-icon" className="sms-icon" />
                  SMS
                </button>

                <button className="qrcode" onClick={ShowQRCode}>
                  <img src={QRIcon} alt="qr-icon" className="qr-icon" />
                  QR Code
                </button>
              </div>
            </section>
          </>
        )}
      </section>
    );
}