import React from 'react';
import styled from 'styled-components';

export interface ListItemProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const ListItem: React.FC<ListItemProps> = ({ active, onClick, children }) => {

  if (active) {
    return (
      <ListItemActive onClick={onClick}>
        { children }
      </ListItemActive>
    )
  }

  return (
    <ListItemDefault onClick={onClick}>
      { children }
    </ListItemDefault>
  )
};

const ListItemStyleBasic = `
  padding: 12px 16px;
  display: inline-block;
  width: 100%;
  cursor: pointer;
  `;

const ListItemActive = styled.div`
  ${ListItemStyleBasic}
  color: #fff;
  background: #1867c0;
`;

const ListItemDefault = styled.div`
  ${ListItemStyleBasic}

  background: #fff;
  &:hover {
    background: #ccc;
  }
`;
