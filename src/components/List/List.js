import React, { useContext } from 'react';
import './css/List.css';
import SteteContext from '../../context/statecontext'
import Card from '../Card';

const List = ({ data = [] }) => {
  const { styles } = useContext(SteteContext);
  return (
    <ul
      className='list'
      style={{ marginBottom: styles.marginList }}>
      {data.map((item, idx) => <Card key={idx} data={item} />)}
    </ul>
  );
};

export default List;