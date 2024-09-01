import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ListTrucks.module.css';
import { fetchAllTrucks } from '../../redux/asyncThunk';
import { selectFilteredTrucks } from '../../redux/filterTrucksSlice';
import Truck from '../Truck/Truck';
import { selectIsError } from '../../redux/trucksSlice';
import Error from '../Error/Error';

export default function ListTruck() {
  const dispatch = useDispatch();
  const filteredTrucks = useSelector(selectFilteredTrucks);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    const func = async () => {
      await dispatch(fetchAllTrucks());
    };
    func();
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {isError ? (
        <Error />
      ) : filteredTrucks.length > 0 ? (
        filteredTrucks.map(item => <Truck trucks={item} key={item.id} />)
      ) : (
        <p className={css.p}>Sorry, not found</p>
      )}
    </ul>
  );
}
