import React from 'react';
import Loader from "react-loader-spinner";

const SpinLoader = ({ type, color }: any) => {
  return (
    <div className="flex justify-center mt-40 items-center">
      <Loader
        type={type}
        color={color || "#3B82F6"}
        height={100}
        width={100}
      />
    </div>
  );
}

export default SpinLoader
