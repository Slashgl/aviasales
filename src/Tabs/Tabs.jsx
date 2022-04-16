import React from 'react';
import './Tabs.scss';

function Tabs() {
  return (
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" className="btn btn-outline-primary">Самый дешевый</button>
      <button type="button" className="btn btn-outline-primary">Самый быстрый</button>
      <button type="button" className="btn btn-outline-primary">Оптимальный</button>
    </div>
  );
}

export default Tabs;
