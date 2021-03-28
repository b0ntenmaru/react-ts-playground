import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { List, ListProps } from '@/components/molecules/List';

export default {
  title: 'molecules',
  component: List,
} as Meta;

const initialState = {
  listItems: [
    { text: 'コンテンツ1', active: true },
    { text: 'コンテンツ2', active: false },
    { text: 'コンテンツ3', active: false },
  ],
}

export const ListWrapper: Story<ListProps> = (args) => {
  const [state, setState] = useState(initialState);

  const onClick = (selectedListItem: {text: string, active: boolean}) => {

    const listItems = state.listItems.map(listItem => {
      listItem.active = false;

      if (listItem.text === selectedListItem.text) {
        listItem.active = true;
      }
      return listItem;
    });

    setState({...state, listItems});
  }

  return (
    <List listItems={state.listItems} onClick={onClick} />
  );
};

ListWrapper.args = {}

ListWrapper.storyName = 'List';
