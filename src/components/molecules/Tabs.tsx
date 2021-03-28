import React from 'react';
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
          <TabItem 
            key={index}
            label={tabItem.label}
            active={tabItem.active}
            select={() => select(tabItem)}
          />
        );
      })}
    </div>
  );
}
