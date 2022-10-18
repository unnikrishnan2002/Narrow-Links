import { useState } from 'react';
import Logo from '../../assets/logo.svg';
import LoadingAnimated from '../../assets/loading-animated.svg';
import '../../css/home.css';

export default function ShowSMS(props){

    const { narrowURL, setShowSMS } = props;
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ sendProcess, setSendProcess ] = useState(false);

    function InputPhoneNumber(element) {
        setPhoneNumber(element.target.value);
    };

    async function SendSMS(e) {
        e.preventDefault();
        setSendProcess(true);

        const response = await fetch("https://nrly.herokuapp.com/api/sms/twiliosms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phoneNumber: phoneNumber,
                    data: narrowURL
                })
            }
        );
            
        const SMSRes = await response.json();
        alert("Message send successfully");
        setPhoneNumber("");
        setSendProcess(false);
        setShowSMS(false);
    };

    return (
        <section className="sms-container animated-fadeIn">
          <div className="sms-modal">
            <div className="brand-container">
                <div className="brand">
                    <img src={Logo} alt="logo" />
                    <h1>Narrow Links</h1>
                </div>

                <button onClick={() => setShowSMS(false)}>Close</button>
            </div>
            
            <div className="form">
                <p>Send your shortened url via SMS</p>
                <input type="number" placeholder="Phone Number" className="input-phone" value={phoneNumber} onChange={InputPhoneNumber} />
                <button className="done" onClick={SendSMS}>
                    { !sendProcess && <div>Send URL</div> }
                    { sendProcess && <img src={LoadingAnimated} className="loading"/> }
                </button>
            </div>
          </div>
        </section>
    )
}