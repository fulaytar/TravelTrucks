import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ListTrucks.module.css';
import { fetchAllTrucks } from '../../redux/AsyncThunk';
import { selectAllTrucks } from '../../redux/trucksSlice';
import { selectFilteredTrucks } from '../../redux/filterTrucksSlice';
import Truck from '../Truck/Truck';

export default function ListTruck() {
  const dispatch = useDispatch();
  const allTrucks = useSelector(selectAllTrucks);
  const filteredTrucks = useSelector(selectFilteredTrucks);
  console.log(filteredTrucks, '345543345');

  useEffect(() => {
    dispatch(fetchAllTrucks());
  }, [dispatch]);

    
  const trucksToDisplay =
    filteredTrucks.length > 0
      ? filteredTrucks
      : Array.isArray(allTrucks)
      ? allTrucks
      : [];

  return (
    <ul className={css.list}>
      {trucksToDisplay.map(item => (
        <Truck trucks={item} key={item.id} />
      ))}
    </ul>
  );
}
