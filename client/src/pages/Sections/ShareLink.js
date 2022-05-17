import React from 'react';

export function ShareLink({
  handleQRClick,
  phNumber,
  handleNumberChange,
  handleSendSMSClick,
}) {
  return (
    <div class='btn-group' role='group' aria-label='Send SMS and View QR Code'>
      {/* Button trigger modal */}
      <button
        type='button'
        class='btn btn-primary sms-button'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
        aria-label='send sms'
      >
        Send link as SMS
      </button>
      {/* QR link */}
      <div className='QR-icon' onClick={handleQRClick}>
        <i className='fa-solid fa-qrcode'></i>
      </div>

      {/*  Modal */}
      <div
        class='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h2 class='modal-title' id='exampleModalLabel'>
                SEND VIA SMS
              </h2>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <div class='input-group mb-4'>
                <input
                  type='text'
                  class='form-control'
                  aria-label='Enter the Mobile Number'
                  id='inputUrl'
                  placeholder='Enter the Mobile Number'
                  value={phNumber}
                  onChange={handleNumberChange}
                />
              </div>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button
                type='button'
                class='btn btn-primary'
                onClick={handleSendSMSClick}
              >
                Send SMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
