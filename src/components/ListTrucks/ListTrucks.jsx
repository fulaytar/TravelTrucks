import { useEffect, useState } from 'react';
import css from './ListTrucks.module.css';
import { getAllCampers } from '../../travel-api';
import Truck from '../Truck/Truck';

export default function ListTruck() {
  const [trucks, setTrucks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCampers();
      setTrucks(data);
    };

    fetchData();
  }, []);
  return (
    <ul className={css.list}>
      {trucks.map(item => (
        <Truck trucks={item} key={item.id} />
      ))}
    </ul>
  );
}
