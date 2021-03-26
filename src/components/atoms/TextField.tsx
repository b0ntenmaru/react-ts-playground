import React from 'react';
import styled from 'styled-components';

export interface TextFieldProps {
  text: string;
  placeholder: string;
  handleChangeText: (value: string) => void;
  disable: boolean;
}

const baseStyle = `
  display: inline-block;
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #CFD1D1;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  line-height: 23px;
  color: #31313D;

  &:focus {
    border: 1px solid #5E4CA6;
    outline: 0;
  }
`;

const InputDefault = styled.input`${baseStyle}`

const InputDisabled = styled.input`
  ${baseStyle}
  background: #CFD1D1;
`

export const TextField: React.FC<TextFieldProps> = ({text, placeholder, disable, handleChangeText}) => {
  if (disable) {
    return <InputDisabled disabled={disable} type="text" placeholder={placeholder} value={text} onChange={e => handleChangeText(e.target.value)} />
  }
  return (
    <InputDefault type="text" placeholder={placeholder} value={text} onChange={e => handleChangeText(e.target.value)} />
  )
}
