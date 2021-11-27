import React, { useState } from 'react';
import { Icon } from '../ui/icon/Icon';
import { SideBarProps, MenuItemProps } from './types';

export const SidebarContent: React.FC<SideBarProps> = ({ menuItems }) => {
  return (
    <ul className="font-semibold text-sm mt-6">
      {menuItems.map((item: MenuItemProps, i: number) => (
        <Item item={item} i={i} />
      ))}
    </ul>
  );
};

const Item = ({ item, i }: any) => {
  const [hidden, setHidden] = useState(true);

  return (
    <li key={item.path} className={`relative px-6 py-3`}>
      {item.subItems === undefined && (
        <a
          href={item.path}
          className="inline-flex items-center w-full  cursor-pointer text-gray-500 hover:text-gray-700"
        >
          <Icon className="w-5 h-5" icon={item.icon} />
          <span className="ml-4">{item.name}</span>
        </a>
      )}

      {item.subItems && (
        <button
          className="inline-flex items-center w-full  cursor-pointer text-gray-500 hover:text-gray-700 focus:outline-none "
          onClick={() => setHidden(!hidden)}
        >
          <Icon className="w-5 h-5" icon={item.icon} />
          <span className="ml-4 w-3/4 text-left">{item.name}</span>
          {hidden ? (
            <Icon className="w-5 h-5" icon={`HiOutlinePlusCircle`} />
          ) : (
            <Icon className="w-5 h-5" icon={`HiOutlineMinusCircle`} />
          )}
        </button>
      )}

      {item?.subItems && (
        <div className={` flex flex-col ${hidden ? 'hidden' : 'open'}`}>
          {<SubItem key={`sub-${i}`} items={item} />}
        </div>
      )}
    </li>
  );
};

const SubItem = ({ items }: any) => {
  return (
    <ul className="font-semibold text-sm mt-2 mb-2">
      {items?.subItems?.map((item: any, k: number) => (
        <li key={k} className={`relative px-6 py-3`}>
          <a
            href={item.path}
            className="inline-flex items-center w-full  cursor-pointer text-gray-500 hover:text-gray-700"
          >
            <Icon className="w-5 h-5" icon={item.icon} />
            <span className="ml-4">{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
