import { useEffect, useState } from 'react';
import Icon from '../Icon/Icon';
import css from './Truck.module.css';
import IconTrucksFromCard from '../IconTrucksFromCard/IconTrucksFromCard';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  deleteFavorite,
  selectFavoriteTrucks,
} from '../../redux/favoriteTrucksSlice';

export default function Truck({ trucks }) {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavoriteTrucks);

  const [check, setCheck] = useState(false);
  useEffect(() => {
    // Перевірка, чи truck.id є в масиві фаворитів
    setCheck(favorite.some(fav => fav.id === trucks.id));
  }, [favorite, trucks.id]);

  const isCheck = () => {
    !check
      ? toast.success('Successfully added to favorites')
      : toast.success('Successfully removed from favorites');

    !check
      ? dispatch(addFavorite(trucks))
      : dispatch(deleteFavorite({ id: trucks.id }));
    setCheck(!check);
  };

  return (
    <li className={css.container}>
      <img
        className={css.image}
        src={trucks.gallery[0].thumb}
        alt={trucks.name}
        width={292}
      />
      <div className={css.details}>
        <h2 className={css.h2}>{trucks.name}</h2>
        <div className={css.priceInfo}>
          <span className={css.price}>{`€${trucks.price}.00`}</span>
          <button type='button' className={css.btn} onClick={isCheck}>
            <Icon
              idIcon={'love'}
              customH={24}
              customW={24}
              activeHover={true}
              setCheck={check}
            />
          </button>
        </div>
        <p className={css.p}>
          <Icon customH={16} customW={16} idIcon={'star'} />
          <span
            className={css.reviews}
          >{`${trucks.rating} (${trucks.reviews.length} Reviews)`}</span>
          <Icon idIcon={'map'} customH={16} customW={16} />
          <span className={css.location}>{trucks.location}</span>
        </p>
        <p className={css.descr}>{trucks.description}</p>
        <ul className={css.listIcon}>
          {trucks.AC && <IconTrucksFromCard textIcon={'AC'} idIcon={'wind'} />}
          {trucks.bathroom && (
            <IconTrucksFromCard textIcon={'Bathroom'} idIcon={'bathroom'} />
          )}
          {trucks.kitchen && (
            <IconTrucksFromCard textIcon={'kitchen'} idIcon={'cup-hot'} />
          )}
          {trucks.TV && <IconTrucksFromCard textIcon={'TV'} idIcon={'tv'} />}
          {trucks.radio && (
            <IconTrucksFromCard textIcon={'Radio'} idIcon={'radio'} />
          )}
          {trucks.refrigerator && (
            <IconTrucksFromCard
              textIcon={'Refrigerator'}
              idIcon={'refrigerator'}
            />
          )}
          {trucks.microwave && (
            <IconTrucksFromCard textIcon={'Microwave'} idIcon={'microwave'} />
          )}
          {trucks.gas && <IconTrucksFromCard textIcon={'Gas'} idIcon={'gas'} />}
          {trucks.water && (
            <IconTrucksFromCard textIcon={'Water'} idIcon={'water'} />
          )}
        </ul>
        <Link className={css.openTrucks} to={`/catalog/${trucks.id}`}>
          Show more
        </Link>
      </div>
    </li>
  );
}
