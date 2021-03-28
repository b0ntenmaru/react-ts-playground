import React from 'react';
import styled from 'styled-components';

export interface ListItemProps {
  text: string;
  active: boolean;
};

export const ListItem: React.FC<ListItemProps> = ({ text, active }) => {

  if (active) {
    return (
      <ListItemActive>
        { text }
      </ListItemActive>
    )
  }

  return (
    <ListItemDefault>
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
