import React from 'react';
import styled from 'styled-components';

export function App() {
  return (
    <div>
      <div className="border border-gray-300 dark:border-gray-700 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
        <div className="flex items-center">
          <div className="h-1 w-1 rounded-full bg-indigo-700 mr-1" />
          <span className="text-xs text-gray-800 dark:text-gray-100 font-normal">
            Badge
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
