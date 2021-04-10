import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuListItem, MenuListItemProps } from 'components/atoms/MenuListItem';

export default {
  title: 'atoms',
  component: MenuListItem,
} as Meta;

export const MenuListItemWrapper: Story<MenuListItemProps> = (args) => {

  return (
    <MenuListItem {...args} />
  );
};

MenuListItemWrapper.args = {
  label: 'メニュー名',
}

MenuListItemWrapper.storyName = 'MenuListItem';
