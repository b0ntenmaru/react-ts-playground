import React from 'react';
import styled from 'styled-components';
import { TextField } from 'components/atoms/TextField';

export interface FormGroupTextFieldProps {
  text: string;
  placeholder: string;
  handleChangeText: (value: string) => void;
  disable: boolean;
  labelText: string;
}

export const FormGroupTextField: React.FC<FormGroupTextFieldProps> = ({text, placeholder, handleChangeText, disable, labelText}) => {

  return (
    <FormGroupTextFieldWrapper>
      <LabelWrapper>
        <Label>{labelText}</Label>
      </LabelWrapper>
      
      <TextField
        text={text}
        placeholder={placeholder} 
        handleChangeText={handleChangeText}
        disable={disable}
      />
    </FormGroupTextFieldWrapper>
  )
};

const Label = styled.label`
  font-size: 16px;
  line-height: 23px;
  color: #31313D;
`;

const LabelWrapper = styled.div`
  margin-bottom: 14px;
`;

const FormGroupTextFieldWrapper = styled.div`
  display: inline-block;
  width: 100%;
`;
