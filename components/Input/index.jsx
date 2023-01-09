import React from 'react';
import { InputWrapper, Label } from './styles';

const Input = ({ onChange, label, ...props }) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <InputWrapper {...props} onChange={onChange} />
    </>
  );
};

export default Input;
