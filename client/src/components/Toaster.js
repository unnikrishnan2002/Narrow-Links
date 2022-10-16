import React, {useRef, useEffect} from 'react'
import '../css/navbar.css'
import {Toast} from 'bootstrap/dist/js/bootstrap'

export default function Toaster(props){  
  const toast = useRef();
  useEffect(()=>{
    // Initialize toaster with autohide as false to prevent auto clearing for toaster message
    let toastComponent = new Toast(
      toast.current, {
        autohide: false
      })
    toastComponent.show()
    })

  const clearToastMessage = () =>{
    // Clear toaster meessage
    props.setMessage('')
  }
  
  return(
    <div className='toast-container'>
      <div 
        className= {'toast align-items-center text-white border-0'} 
        role='alert' 
        aria-live='assertive' 
        aria-atomic='true' 
        ref={toast}
      >
        <div className ={'d-flex'}>
          <div className={'toast-body'}>
            {props.message}
          </div>
          <button 
            type='button' 
            class={'btn-close btn-close-white me-2 m-auto'} 
            aria-label='Close'
            onClick={clearToastMessage}
          >
          </button>
        </div>
      </div>
    </div>
 )   
}
