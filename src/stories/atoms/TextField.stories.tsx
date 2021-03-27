import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextField, TextFieldProps } from '@/components/atoms/TextField';

export default {
  title: 'atoms',
  component: TextField,
} as Meta;

export const TextFieldWrapper: Story<TextFieldProps> = (args) => {
  const [text, setText] = useState('');

  return (
    <TextField {...args} text={text} handleChangeText={setText} />
  );
}

TextFieldWrapper.args = {
  placeholder: 'placeholder',
  disable: false,
};

TextFieldWrapper.storyName = 'TextField';
