import React from 'react';
import { GlobalNav } from '@/components/organisms/GlobalNav';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'organisms',
  component: GlobalNav,
} as Meta;

export const GlobalNavWrapper: Story = (args) => {

  return <GlobalNav />
};

GlobalNavWrapper.args = {};

GlobalNavWrapper.storyName = 'GlobalNav';
