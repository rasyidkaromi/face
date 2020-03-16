import React, { useContext } from 'react';
import './css/Sort.css';
import SortBtnApi from './components/sortbtnapi';
import SteteContext from '../../context/statecontext'


const SortApi = ({sortApiType, setSortApiType}) => {

  const { setSort } = useContext(SteteContext)
  const handleClick = e => {
    const selected = e.target.dataset.type;
    setSortApiType(selected);
    setSort(selected.toLowerCase())
    window.location.reload();
  };

  const btnProps = { sortApiType, onClick: handleClick };

  return (
    <div className='sort'>
      <SortBtnApi name='Size' {...btnProps} />
      <SortBtnApi name='Price' {...btnProps} />
      <SortBtnApi name='Id' {...btnProps} />
    </div>
  );
};

export default SortApi;


