import React from 'react';
import "./ListComponent.css"

const ListComponent = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      <h2>List Example</h2>
      <div className="card-container">
        {
          items.map((item, index) => (
          <div key={index} className="card">
            <p>{item}</p>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default ListComponent;
