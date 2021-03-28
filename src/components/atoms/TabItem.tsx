import React from 'react';
import styled from 'styled-components';

export interface TabItemProps {
  label: string;
  active: boolean;
  select: () => void;
}

export const TabItem: React.FC<TabItemProps> = (props) => {

  if (props.active) {
    return (
      <TabItemActive onClick={props.select}>
        {props.label}
      </TabItemActive>  
    );
  } else {
    return (
      <TabItemDisable onClick={props.select}>
        {props.label}
      </TabItemDisable>  
    );
  }
};

const tabItemBaseStyle = `
  padding: 11px 8px;
  display: inline-block;
  font-size: 16px;
  line-height: 23px;
  cursor: pointer;
`;

const TabItemActive = styled.div`
  ${tabItemBaseStyle}
  border-bottom: 3px solid #ff0000;
`;

const TabItemDisable = styled.div`
  ${tabItemBaseStyle}
  color: #b7b7ca;
  border-bottom: 3px solid #b7b7ca;
`;
