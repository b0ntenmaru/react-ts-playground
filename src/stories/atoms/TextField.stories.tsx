import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { TextField, TextFieldProps } from '@/components/atoms/TextField';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'atoms',
  component: TextField,
};

// export const TextFieldWrapper: Story<TextFieldProps> = (args) => <TextField {...args} />;

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
