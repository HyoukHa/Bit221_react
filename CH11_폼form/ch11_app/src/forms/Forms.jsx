import React from 'react';
import FileInput from './FileInput';
import FruitSelect from './FruitSelect';
import NameForm from './NameForm';

const Forms = () => {
  return (
    <div className="container mt-5">
      <NameForm />
      <FruitSelect />
      <FileInput />
    </div>
  );
};

export default Forms;