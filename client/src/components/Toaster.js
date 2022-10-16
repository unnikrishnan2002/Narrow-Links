import React from 'react'
import '../css/navbar.css'
import {Toast} from 'bootstrap/dist/js/bootstrap'

class Toaster extends React.Component
{  
  constructor(){
    super()
    this.toast = React.createRef();   
  }

  componentDidMount()
  {
    let toastComponent = new Toast(this.toast.current, {autohide: false})
    toastComponent.show()
  }
  
  render(){
    return(
      <div className='toast-container'>
        <div 
          className= {'toast align-items-center text-white border-0'} 
          role='alert' 
          aria-live='assertive' 
          aria-atomic='true' 
          ref={this.toast}
        >
          <div className ={'d-flex'}>
            <div className={'toast-body'}>
              Hello, world! This is a toast message.
            </div>
            <button 
              type='button' 
              class={'btn-close btn-close-white me-2 m-auto'} 
              data-bs-dismiss='toast' 
              aria-label='Close'
            >
            </button>
          </div>
        </div>
      </div>
    )  
    }
}
export default Toaster
