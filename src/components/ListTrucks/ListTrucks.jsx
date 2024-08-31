import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ListTrucks.module.css';
import { fetchAllTrucks } from '../../redux/asyncThunk';
import { selectFilteredTrucks } from '../../redux/filterTrucksSlice';
import Truck from '../Truck/Truck';

export default function ListTruck() {
  const dispatch = useDispatch();
  const filteredTrucks = useSelector(selectFilteredTrucks);
  console.log(filteredTrucks, '345543345');

  useEffect(() => {
    dispatch(fetchAllTrucks());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {filteredTrucks.length > 0 ? (
        filteredTrucks.map(item => <Truck trucks={item} key={item.id} />)
      ) : (
        <p className={css.p}>Sorry, not found</p>
      )}
    </ul>
  );
}
