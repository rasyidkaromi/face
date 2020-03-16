import React, { useContext, useState, useEffect, useRef, useLayoutEffect } from 'react';
import './css/listProduct.css';

import SteteContext from '../../context/statecontext'
import { EndCatContext } from '../../context/endcatcontext'

import Sort from '../Sort';
import SortApi from '../Sortapi';
import List from '../List'
import useService from '../../hooks/useService';



const ListProduct = () => {

  const {
    page, setLimit,
    item, sortType, setSortType,
    sortApiType, setSortApiType,
    orderDSC, setOrderDSC,
    styles
  } = useContext(SteteContext);

  const { endCat } = useContext(EndCatContext);
  const infinityRef = useRef(null);
  const { setLoadMore } = useService();

  useEffect(() => {
    if (page == 10) {
      setLimit(15)
    }
  }, [page])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight - styles.marginList === infinityRef.current.clientHeight + infinityRef.current.offsetTop) {
        setLoadMore(true)
      }
      return () => {
        document.removeEventListener();
      }
    });
  }, []);


  return (
    <>
      <div ref={infinityRef}>
        <section className='top'>
          <Sort
            sortType={sortType}
            setSortType={setSortType}
            orderDSC={orderDSC}
            setOrderDSC={setOrderDSC}
          />
          <SortApi
            sortApiType={sortApiType}
            setSortApiType={setSortApiType}
          />
        </section>
        <List
          data={item}
        />
        {endCat > 0 &&
          <div id="endcat">
            <p>
              ~ end of catalogue ~
          </p>
          </div>
        }
      </div>

    </>
  );
};

export default ListProduct;




