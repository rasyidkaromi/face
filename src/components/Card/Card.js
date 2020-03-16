import React, { useEffect, useContext } from 'react';
import './css/Card.css';
import { Info, Preemty } from './components';

const Card = ({ data }) => {

  const styles = {
    backgroundImage: `url(${data.url})`,
  };

  return (
    <li className='card'>
      {data.ads && !data.preEmptively && (<div className='img ad' style={styles} ></div>)}
      {!data.ads &&  !data.preEmptively &&(<Info className='info' data={data} />)}
      {data.preEmptively &&(<Preemty className='emty' />)}
    </li>
  );
};

export default Card;