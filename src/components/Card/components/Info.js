import React from 'react';
import useUtility from '../../../hooks/useUtility'
import useTime from '../../../hooks/useTime'


const Info = ({ data, className }) => {

  const { id, date, price, face, size, newId } = data;
  const { conv } = useUtility()
  const { makeAgo } = useTime()

  const faceStyle = {
    fontSize: size
  };

  return (
    <div className={className}>
      <br></br>
      <p
        className='face'
        style={faceStyle}> {face}</p>
      <br></br>
      <div className='teksInfo'>
        <p className='id'> Id : {id}</p>
        <p className='Date'> Date : {makeAgo.ago(date)}</p>
        <p className='Price'> Price : {conv.dollarConvert(price)}</p>
      </div>
    </div>
  );
};

export default Info;