import React from 'react';
import styled from 'styled-components';

export interface TextFieldProps {
  text: string;
  placeholder: string;
  handleChangeText: (value: string) => void;
}

export const TextField: React.FC<TextFieldProps> = ({text, placeholder, handleChangeText}) => {

  return (
    <input type="text" placeholder={placeholder} value={text} onChange={e => handleChangeText(e.target.value)} />
  )
}
