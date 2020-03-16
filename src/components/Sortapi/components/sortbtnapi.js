import React from 'react';

const SortBtnApi = ({ sortApiType, onClick, name }) => {
  return (
    <button 
      data-type={name} 
      onClick={onClick} 
      data-active={sortApiType === name}
      >
      sort by API [{name === 'progress' ? '%' : name}]
    </button>
  );
};

export default SortBtnApi;