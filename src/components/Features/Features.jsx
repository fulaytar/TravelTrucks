import 'react-datepicker/dist/react-datepicker.css';
import css from './Features.module.css';
import IconTrucksFromCard from '../IconTrucksFromCard/IconTrucksFromCard';
import { useSelector } from 'react-redux';
import { selectSelectedTruck } from '../../redux/trucksSlice';
import FormForUser from '../FormForUser/FormForUser';

export default function Features() {
  const truckDetails = useSelector(selectSelectedTruck);

  return (
    <div className={css.containerDetails}>
      <div className={css.firstContainer}>
        <ul className={css.listIconDetails}>
          {truckDetails.AC && (
            <IconTrucksFromCard textIcon={'AC'} idIcon={'wind'} />
          )}
          {truckDetails.bathroom && (
            <IconTrucksFromCard textIcon={'Bathroom'} idIcon={'bathroom'} />
          )}
          {truckDetails.kitchen && (
            <IconTrucksFromCard textIcon={'kitchen'} idIcon={'cup-hot'} />
          )}
          {truckDetails.TV && (
            <IconTrucksFromCard textIcon={'TV'} idIcon={'tv'} />
          )}
          {truckDetails.radio && (
            <IconTrucksFromCard textIcon={'Radio'} idIcon={'radio'} />
          )}
          {truckDetails.refrigerator && (
            <IconTrucksFromCard
              textIcon={'Refrigerator'}
              idIcon={'refrigerator'}
            />
          )}
          {truckDetails.microwave && (
            <IconTrucksFromCard textIcon={'Microwave'} idIcon={'microwave'} />
          )}
          {truckDetails.gas && (
            <IconTrucksFromCard textIcon={'Gas'} idIcon={'gas'} />
          )}
          {truckDetails.water && (
            <IconTrucksFromCard textIcon={'Water'} idIcon={'water'} />
          )}
        </ul>
        <div className={css.allDetails}>
          <h3 className={css.h3}>Vehicle details</h3>
          <ul className={css.detailsListGroup}>
            <li>
              <p className={css.detailsByType}>
                Form <span className={css.type}>{truckDetails.form}</span>
              </p>
            </li>
            <li>
              <p className={css.detailsByType}>
                Length <span className={css.type}>{truckDetails.length}</span>
              </p>
            </li>
            <li>
              <p className={css.detailsByType}>
                Width <span className={css.type}>{truckDetails.width}</span>
              </p>
            </li>
            <li>
              <p className={css.detailsByType}>
                Height <span className={css.type}>{truckDetails.height}</span>
              </p>
            </li>
            <li>
              <p className={css.detailsByType}>
                Tank <span className={css.type}>{truckDetails.tank}</span>
              </p>
            </li>
            <li>
              <p className={css.detailsByType}>
                Consumption
                <span className={css.type}>{truckDetails.consumption}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <FormForUser />
    </div>
  );
}
