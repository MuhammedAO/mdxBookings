import React from 'react';
import spinner from './spinner.gif';

export default () => (
  <div className="loading">
  <h4>rooms data loading..</h4>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </div>
);
