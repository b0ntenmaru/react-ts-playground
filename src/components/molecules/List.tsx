import React from 'react';
import { ListItem } from 'components/atoms/ListItem';

export interface ListProps {
  listItems: IListItem[];
  onClick: (listItem: IListItem) => void;
}

export interface IListItem {
  text: string;
  active: boolean;
}

export const List: React.FC<ListProps> = ({listItems, onClick}) => {

  return (
    <React.Fragment>
      {listItems.map((listItem, index) => {
        return (
          <ListItem
            key={index}
            text={listItem.text}
            active={listItem.active}
            onClick={() => onClick(listItem)} 
          />
        );
      })}
    </React.Fragment>
  );
};
