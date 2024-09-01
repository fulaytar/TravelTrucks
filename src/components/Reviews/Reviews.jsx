import { useSelector } from 'react-redux';
import FormForUser from '../FormForUser/FormForUser';
import css from './Reviews.module.css';
import { selectSelectedTruck } from '../../redux/trucksSlice';

import ReviewList from '../ReviewList/ReviewList';

export default function Reviews() {
  const selectedTruck = useSelector(selectSelectedTruck);

  return (
    <div className={css.dadyContainer}>
      <ReviewList truck={selectedTruck} />
      <FormForUser />
    </div>
  );
}
