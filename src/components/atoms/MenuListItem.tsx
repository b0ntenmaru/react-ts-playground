import React from 'react';
import styled from 'styled-components';

export interface MenuListItemProps {
  label: string;
};

export const MenuListItem: React.FC<MenuListItemProps> = ({ label }) => {

  return (
    <MenuListItemDefault>
      {label}
    </MenuListItemDefault>
  );
};

const menuListItemBaseStyle = `
  padding: 12px 16px;
  font-size: 16px;
  line-height: 23px;
  cursor: pointer;
`;

const MenuListItemDefault = styled.div`
  ${menuListItemBaseStyle}
`;

