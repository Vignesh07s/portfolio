import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5 border-b-2 border-blue-500 pb-2">
      {children}
    </h3>
  );
};

export default SectionTitle;