import React from 'react';
import '../css/Popup.css';

const Popup = (props) => {
  return (
    <div className="popup">
      <div className="inner">
        <button className="option"
          onClick={props.closePop}>Cancel</button>
      </div>
    </div>
  );
}

export default Popup;