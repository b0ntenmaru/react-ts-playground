import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tabs, TabsProps } from 'components/molecules/Tabs';

export default {
  title: 'molecules',
  component: Tabs,
} as Meta;

const initialState = {
  tabItems: [
    { label: 'コンテンツ1', active: true },
    { label: 'コンテンツ2', active: false },
    { label: 'コンテンツ3', active: false },
  ],
};

export const TabsWrapper: Story<TabsProps> = (args) => {
  const [state, setState] = useState(initialState);

  const select = (selectedTabItem: { label: string, active: boolean }) => {
    const newState = state.tabItems.map(tabItem => {
      tabItem.active = false

      if (selectedTabItem.label === tabItem.label) {
        tabItem.active = true;
      }
      return tabItem;
    });

    setState({ tabItems: newState });
  }

  return <Tabs {...args} tabItems={state.tabItems} select={select} />;
};

TabsWrapper.args = {}

TabsWrapper.storyName = 'Tabs';
