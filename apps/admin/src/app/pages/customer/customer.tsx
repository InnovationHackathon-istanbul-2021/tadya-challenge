import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/ui/icon/Icon';
import MeterImg from '../../../assets/meter.svg';

const Content = styled.div``;

export const Customer = () => {
  return (
    <Content className="mx-auto bg-gray-300 w-full h-full overflow-auto">
      <div className="bg-white py-4 px-5 ">
        <h1 className="cursor-pointer w-full text-xl text-gray-700 tracking-wide font-bold">Welcome to Customer Dashboard</h1>
      </div>
      <div>

      </div>
    </Content>
  );
};
