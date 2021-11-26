import { IconProps } from '../ui/icon/types';

export interface MenuItemProps extends IconProps {
  path: string;
  name: string;
  exact?: boolean;
  subItems: [Pick<MenuItemProps, 'path' | 'name' | 'exact'>];
}

export interface SideBarProps {
  title?: string;
  menuItems: MenuItemProps[];
}
