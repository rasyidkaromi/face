import React, { useState, createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'


const SteteContext = createContext();

export default SteteContext;

export const StateProvider = ({ children }) => {
  const [sort, setSort] = useLocalStorage('sort')

  let [page, setPage] = useState(1)
  let [limit, setLimit] = useState(12)

  const [store, setStore] = useState(false)
  const [item, setItem] = useState([]);
  const [sortType, setSortType] = useState('');
  const [sortApiType, setSortApiType] = useState('')
  const [orderDSC, setOrderDSC] = useState(true);
  const [styles, setStyles] = useState({
    marginList: 50
  });
  
  return (
    <SteteContext.Provider value={{
      page, setPage,
      limit, setLimit,
      sort, setSort,
      store, setStore,
      item, setItem,
      sortType, setSortType,
      sortApiType, setSortApiType,
      orderDSC, setOrderDSC,
      styles, setStyles,
    }}>
      {children}
    </SteteContext.Provider>
  );
};