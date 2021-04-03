import React, { useState } from 'react';
import { List } from 'components/molecules/List';

const initialState = {
  listItems: [
    { text: 'ホーム', active: true },
    { text: '話題を検索', active: false },
    { text: '通知', active: false },
    { text: 'メッセージ', active: false },
    { text: 'ブックマーク', active: false },
    { text: 'リスト', active: false },
    { text: 'プロフィール', active: false },
  ],
}

export const GlobalNav = () => {

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

  return <List listItems={state.listItems} onClick={onClick} />;
}
