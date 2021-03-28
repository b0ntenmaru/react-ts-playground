import React from 'react';
import styled from 'styled-components';

export interface ListItemProps {
  text: string;
  active: boolean;
  onClick: () => void;
};

export const ListItem: React.FC<ListItemProps> = ({ text, active, onClick }) => {

  if (active) {
    return (
      <ListItemActive onClick={onClick}>
        { text }
      </ListItemActive>
    )
  }

  return (
    <ListItemDefault onClick={onClick}>
      { text }
    </ListItemDefault>
  )
};

const ListItemActive = styled.div`
  padding: 12px 16px;
  background: #1867c0;
  color: #fff;
`;

const ListItemDefault = styled.div`
  padding: 12px 16px;
  background: #fff;

  &:hover {
    background: #ccc;
  }
`;
