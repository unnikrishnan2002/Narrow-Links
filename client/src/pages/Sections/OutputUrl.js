import React from 'react';
export function OutputUrl({ finalUrl, handleCopyClick }) {
  return (
    <div className='input-group mb-3 narrowurl '>
      <input
        aria-label='Shortened link will appear here'
        id='inputUrl'
        type='text'
        className='form-control'
        placeholder='Shortened link will appear here'
        value={finalUrl}
        readOnly
      />
      <button
        data-testid='Copy'
        aria-label='Copy Link'
        className='btn btn-success'
        onClick={handleCopyClick}
        type='button'
      >
        Copy
      </button>
    </div>
  );
}
