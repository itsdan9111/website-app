import React, {useState} from 'react';
import ReactCircleModal from 'react-circle-modal';
import './Modal.css';

const Modal = (props) => {
  
  return (
    <ReactCircleModal
      backgroundColor="#27222C"
      toogleComponent={handleClick => (
        <a onClick={handleClick}>
            <img className={props.styles} width={props.imgwidth} height={props.imgheight} src={props.image} alt={props.title}/>
        </a>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(handleClick) => (
        <div style={{ backgroundColor: '#fff', padding: '1em', borderRadius: '5px' }}>
          <h2 style={{textAlign: 'center'}}>
            {props.title}
          </h2>
          <img width='248px' height='350px' src={props.image} alt={props.title}/>
          <h2 style={{float:'right'}}>Rating: <div className='rating-box'><h2 style={{textAlign:'center'}}>{props.rating}</h2></div></h2>
          <p>{props.synopsis}</p>
          <button className="btn draw-border" onClick={handleClick}>
            Close
          </button>
        </div>
      )}
    </ReactCircleModal>
  )
}

export default Modal;