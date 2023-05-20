import React from 'react';
import "./PropsComp.css"

const PropsComp = () => {
  const person = {
    name: 'John Doe',
    age: 25,
    occupation: 'Software Developer',
  };

  return (
    <div>
      <h2>Props Example</h2>
      <ChildComponent person={person} />
    </div>
  );
};

const ChildComponent = ({ person }) => {
  return (
    <div className="box">
      <h2 className="box-title">{person.name}</h2>
      <p className="box-text">Age: {person.age}</p>
      <p className="box-text">Occupation: {person.occupation}</p>
    </div>
  );
};

export default PropsComp;
