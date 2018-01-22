import React from 'react';

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