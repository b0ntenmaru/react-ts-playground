import React from 'react';
import styled from 'styled-components';
import { TabItem } from '@/components/atoms/TabItem';

export interface TabsProps {
  tabItems: TabItemsProps[];
  select: (selectedTabItem: { label: string, active: boolean }) => void;
}

interface TabItemsProps {
  label: string;
  active: boolean;
}

export const Tabs: React.FC<TabsProps> = ({ tabItems, select }) => {

  return (
    <div>
      {tabItems.map((tabItem, index) => {
        return (
          <TabItemWrapper key={index}>
            <TabItem 
              label={tabItem.label}
              active={tabItem.active}
              select={() => select(tabItem)}
            />
          </TabItemWrapper>
        );
      })}
    </div>
  );
}

const TabItemWrapper = styled.div`
  display: inline-block;
  margin-left: 8px;
`;
