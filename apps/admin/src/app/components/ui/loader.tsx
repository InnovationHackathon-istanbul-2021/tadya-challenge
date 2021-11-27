import React from 'react';
import Loader from "react-loader-spinner";

const SpinLoader = ({ type="Bars" , className, color }: any) => {
  return (
    <div className={`${className} flex justify-center items-center`}>
      <Loader
        type={type}
        color={color || "#3B82F6"}
        height={60}
        width={60}
      />
    </div>
  );
}

export default SpinLoader
