import React, { Fragment, useState } from 'react';

import List from '../components/List';

import '../css/Beaty.css';

const Description = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleChange = e => setText(e.target.value);

  const handleSubmit = () => {
    const newItem = {
      text: text,
      id: Date.now()
    };

    setItems(items.concat(newItem));
    setText('');
  };

  return (
    <Fragment>
      <div className="flex description">
        <input
          type="text"
          placeholder="Add a comment"
          className="input rad mess"
          onChange={handleChange}
          value={text}
        />
        <button onClick={handleSubmit}>
          <div className="mark chat" />
        </button>
      </div>
      <List items={items} />
    </Fragment>
  );
};

export default Description;
