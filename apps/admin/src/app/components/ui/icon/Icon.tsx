import React from 'react';

import { IconProps, IconList } from './types';

export const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  const IconComponent = IconList[icon];
  return <IconComponent {...props} />;
};
