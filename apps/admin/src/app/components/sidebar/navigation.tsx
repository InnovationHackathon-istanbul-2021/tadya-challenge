import {  useLocation, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Icon } from '../ui/icon/Icon';
import { IconProps } from '../ui/icon/types';

export interface MenuItemProps extends IconProps {
  route: string;
  name: string;
  exact?: boolean;

}
export const ADMINNAVIGATION: MenuItemProps[] = [
  { name: 'Home',  icon: 'HiOutlineHome', route: '/admin' },
  { name: 'Producers',  icon: 'HiUserGroup', route: '/producers' },
  { name: 'Categories',  icon: 'HiOutlineCollection', route: '/categories' },
  { name: 'Products',  icon: 'HiOutlineDatabase', route: '/products' },
  { name: 'Orders',  icon: 'HiOutlineInboxIn', route: '/orders' },
  { name: 'Feedback Forms', icon: 'HiOutlinePencilAlt',  route: '/feedback-forms' },
  { name: 'Offers',  icon: 'HiOutlineScale', route: '/offers' }
]

export const PRODUCERNAVIGATION: MenuItemProps[] = [
  { name: 'Home',  icon: 'HiOutlineHome', route: '/producer' },
  { name: 'Products',  icon: 'HiOutlineDatabase', route: '/products' },
  { name: 'Orders',  icon: 'HiOutlineInboxIn', route: '/orders' },
  { name: 'Feedbacks', icon: 'HiOutlinePencilAlt',  route: '/feedback' },
  { name: 'Offers',  icon: 'HiOutlineScale', route: '/offers' }
]

export const CUSTOMERNAVIGATION: MenuItemProps[] = [
  { name: 'Home',  icon: 'HiOutlineHome', route: '/customer' },
  { name: 'Orders',  icon: 'HiOutlineInboxIn', route: '/orders' },
  { name: 'Feedbacks', icon: 'HiOutlinePencilAlt',  route: '/feedback' },
]

export const VOLUNTERNAVIGATION: MenuItemProps[] = [
  { name: 'Home',  icon: 'HiOutlineHome', route: '/volunteer' },
  { name: 'Orders',  icon: 'HiOutlineInboxIn', route: '/orders' },
  { name: 'Feedbacks', icon: 'HiOutlinePencilAlt',  route: '/feedback' },
]

export const SidebarNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filterNavigation, setFilterNavigation] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search).get('user_type') || localStorage.getItem('user_type');
    console.log(params, localStorage.getItem('user_type'))
    !localStorage.getItem('user_type') && !params && setFilterNavigation(ADMINNAVIGATION);
    params === 'admin' && setFilterNavigation(ADMINNAVIGATION);
    params === 'producer' && setFilterNavigation(PRODUCERNAVIGATION);
    params === 'customer' && setFilterNavigation(CUSTOMERNAVIGATION);
    params === 'volunteer' && setFilterNavigation(VOLUNTERNAVIGATION);
    if(params) {
      localStorage.setItem('user_type', params || '');
    }
  }, [location])

  // const location = useLocation();
  return (
    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-gray-100 overflow-y-auto fixed left-0 top-0  w-64 min-h-full shadow">
      <div className="flex items-center flex-shrink-0 px-4 space-y-5">
        <h3  onClick={() => navigate("/")}
         className="text-center cursor-pointer w-full text-xl text-gray-700 capitalize tracking-wide font-bold">
          Tadya
        </h3>
      </div>
      <div className="mt-5 flex-grow flex flex-col ">
        <nav className="flex-1  " aria-label="Sidebar">
          <ul className="font-semibold text-sm mt-6">
            {filterNavigation?.map((item: any) => (

              <li key={item.route} className={`relative px-6 py-3`}>
              {item && (
                <div
                  onClick={() => navigate(item.route)}

                  className="inline-flex items-center w-full  cursor-pointer text-gray-500 hover:text-gray-700"
                >
                  <Icon className="w-5 h-5" icon={item.icon} />
                  <span className="ml-4">{item.name}</span>
                </div>
              )}

            </li>
            ))}

          </ul>
        </nav>
      </div>
    </div>
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
