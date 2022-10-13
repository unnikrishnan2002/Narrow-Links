import React from 'react';

export function InputUrl({ url, handleChange, handleKeypress, handleOnClick }) {
    if (url == "") {
          alert("You have Input Empty URL!!")
     }
  return (
    <div className='container text-center my-4 mx-auto'>
      <div className='input-group mb-3 '>
        <input
          type='text'
          className='form-control link-box'
          aria-label='Paste URL to shorten'
          id='inputUrl'
          placeholder='Paste URL to shorten'
          value={url}
          onChange={handleChange}
          onKeyPress={handleKeypress}
        />

        <button
          type='submit'
          className='shorten-button btn btn-primary mb-3'
          onClick={handleOnClick}
          data-testid='narrow'
          aria-label='Narrow Link'
        >
          Narrow
        </button>
      </div>
    </div>
  );
}
