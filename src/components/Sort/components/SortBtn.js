import React from 'react';

const SortBtn = ({ orderDSC, sortType, onClick, name }) => {
  return (
    <button 
      data-type={name} 
      onClick={onClick} 
      data-active={sortType === name}
      data-arrow={sortType === name && !orderDSC ? 'up' : 'down'}>
      sort by array [{name === 'progress' ? '%' : name}]
    </button>
  );
};

export default SortBtn;