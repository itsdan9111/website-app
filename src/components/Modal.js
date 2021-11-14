import React, {useState} from 'react';
import ReactCircleModal from 'react-circle-modal';
import './Modal.css';

const Modal = (props) => {

  let optext;
  if (props.opening.length === 1) {
    optext = 'Opening Theme'
  } else {
    optext = 'Opening Themes'
  }

  let edtext;
  if (props.ending.length === 1) {
    edtext = 'Ending Theme'
  } else {
    edtext = 'Ending Themes'
  }
  
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
          <h2 className="title">
            {props.title}
          </h2>
          <h4 className="jptitle">{props.jpTitle}</h4>
          <div className="flexContainer">
            <div><img width='248px' height='350px' src={props.image} alt={props.title}/></div>
            <div>
              <p>{`Type: ${props.aniType}`}</p>
              <p>{`Source: ${props.source}`}</p>
              <p>{`Studio: ${props.studio}`}</p>
              <p>{`Episodes: ${props.episodes}`}</p>
              <p>{`Status: ${props.status}`}</p>
              <p>{`Aired: ${props.aired}`}</p>
              <p>{`Duration: ${props.duration}`}</p>
              <p>{`Rating: ${props.rate}`}</p>
              <p>{`Genre:`}<div className="genreContainer">{props.genre.map((genre) => {
                return (
                  <div>{genre["name"]+','}</div>
                )
              })}</div></p>
              <a href={props.url} target="_blank">Open in MyAnimeList</a>
            </div>
            <div>
              <p>{optext}</p>
              <hr/>
              <div className="scrollbox">{props.opening.map((op) => {
                return (
                  <div>{op}</div>
                )
              })}</div>
            </div>
            <div>
              <p>{edtext}</p>
              <hr/>
              <div className="scrollbox">{props.ending.map((op) => {
                return (
                  <div>{op}</div>
                )
              })}</div>
            </div>
            <div><h2>Score: <div className='rating-box'>{props.rating}</div></h2></div>
          </div>
          <hr/>
          <p>{props.synopsis}</p>
          <button className="button-3" onClick={handleClick}>
            Close
          </button>
        </div>
      )}
    </ReactCircleModal>
  )
}

export default Modal;