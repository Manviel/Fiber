import React, { useState, Fragment } from 'react';

import Header from '../components/Header';

import '../css/Beaty.css';

const Upload = () => {
  const [preview, setPreview] = useState('');

  const handleChange = e => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => setPreview(reader.result);

    reader.readAsDataURL(file);
  };

  return (
    <Fragment>
      {Header({ name: 'Upload' })}
      <div className="flex center">
        <section className="top">
          <input type="file" onChange={handleChange} />
          {preview && <img src={preview} alt="preview" className="picture" />}
        </section>
      </div>
    </Fragment>
  );
};

export default Upload;
