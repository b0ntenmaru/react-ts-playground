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
