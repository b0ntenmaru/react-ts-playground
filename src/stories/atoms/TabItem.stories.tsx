import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TabItem, TabItemProps } from '@/components/atoms/TabItem';

export default {
  title: 'atoms',
  component: TabItem,
} as Meta;

export const TabItemWrapper: Story<TabItemProps> = (args) => {

  return (
    <TabItem {...args} />
  );
};

TabItemWrapper.args = {
  label: 'label',
  active: false,
}

TabItemWrapper.storyName = 'TabItem';
