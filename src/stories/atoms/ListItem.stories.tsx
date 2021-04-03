import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ListItem, ListItemProps } from 'components/atoms/ListItem';

export default {
  title: 'atoms',
  component: ListItem,
} as Meta;

export const ListItemWrapper: Story<ListItemProps> = (args) => {

  return (
    <ListItem {...args} />
  );
};

ListItemWrapper.args = {
  text: 'コンテンツ１',
  active: false,
}

ListItemWrapper.storyName = 'ListItem';
