import React from 'react';
import { TextAreaWrapper, Label } from './styles';

const TextArea = ({ onChange, label, ...props }) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <TextAreaWrapper {...props} onChange={onChange} />
    </>
  );
};

export default TextArea;
