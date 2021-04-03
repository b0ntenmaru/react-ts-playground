import React, { useState } from 'react';
import { FormGroupTextField, FormGroupTextFieldProps } from 'components/molecules/FormGroupTextField';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'molecules',
  component: FormGroupTextField,
} as Meta;

export const FormGroupTextFieldWrapper: Story<FormGroupTextFieldProps> = (args) => {
  const [text, setText] = useState('');

  return <FormGroupTextField {...args} text={text} handleChangeText={setText} />
};

FormGroupTextFieldWrapper.args = {
  placeholder: 'placeholder',
  disable: false,
  labelText: '項目名'
};

FormGroupTextFieldWrapper.storyName = 'FormGroupTextField';
