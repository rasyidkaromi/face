import React, { useContext } from 'react';
import './css/Sort.css';
import SortBtn from './components/SortBtn';
import SteteContext from '../../context/statecontext'


const Sort = ({ sortType, setSortType, orderDSC, setOrderDSC }) => {
  const { setSort } = useContext(SteteContext)
  const handleClick = e => {
    const selected = e.target.dataset.type;
    setSortType(selected);
    setSort(selected.toLowerCase())
    if (selected === sortType) {
      setOrderDSC(!orderDSC);
      console.log(orderDSC)
    } else {
      setOrderDSC(true);
    }
  };

  const btnProps = { orderDSC, sortType, onClick: handleClick };

  return (
    <div className='sort'>
      <SortBtn name='Size' {...btnProps} />
      <SortBtn name='Price' {...btnProps} />
      <SortBtn name='Id' {...btnProps} />
    </div>
  );
};

export default Sort;


