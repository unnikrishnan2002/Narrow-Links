import Logo from '../../assets/logo.svg';
import '../../css/home.css';

export default function ShowQR(props){

    const { narrowURL, setShowQR } = props;

    function ShowQRCode(){
        return `https://api.qrserver.com/v1/create-qr-code/?size==600x600&data=${narrowURL}`;
    }

    return (
        <section className="qr-container animated-fadeIn">
          <div className="qr-modal">
            <div className="brand">
              <img src={Logo} alt="logo" />
              <h1>Narrow Links</h1>
            </div>

            <div className="scanQR">
              <h1>Scan QR Code</h1>
              <img src={ShowQRCode()} alt="QR Code" className="qr-code" />
              <p className="url">{narrowURL}</p>
            </div>

            <button className="done" onClick={() => setShowQR(false)}>Okay, Thanks</button>
          </div>
        </section>
    )
}