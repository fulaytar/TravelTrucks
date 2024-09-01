import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import css from './DetailTruck.module.css';
import { Suspense, useEffect } from 'react';
import { fetchTruckById } from '../../redux/asyncThunk';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsError,
  selectIsLoading,
  selectSelectedTruck,
} from '../../redux/trucksSlice';
import MiniLoader from '../../components/MiniLoader/MiniLoader';
import Error from '../../components/Error/Error';
import Icon from '../../components/Icon/Icon';
import clsx from 'clsx';
import Loader from '../../components/Loader/Loader';

export default function Trucks() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const truckData = useSelector(selectSelectedTruck);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const isActive = ({ isActive }) =>
    clsx(isActive ? css.linkDetailsActive : css.linkDetail);

  useEffect(() => {
    dispatch(fetchTruckById(id));
  }, [id, dispatch]);

  return (
    <main>
      {isLoading ? (
        <MiniLoader />
      ) : isError ? (
        <Error />
      ) : (
        <>
          <section>
            <h2 className={css.h2}>{truckData.name}</h2>
            <p className={css.p}>
              <Icon customH={16} customW={16} idIcon={'star'} />
              <span
                className={css.reviews}
              >{`${truckData.rating} (${truckData.reviews.length} Reviews)`}</span>
              <Icon idIcon={'map'} customH={16} customW={16} />
              <span className={css.location}>{truckData.location}</span>
            </p>
            <p className={css.price}>{`€${truckData.price}.00`}</p>
            <ul className={css.listImage}>
              {truckData.gallery.map(item => (
                <li key={item.thumb}>
                  <img
                    className={css.img}
                    src={item.thumb}
                    alt={item.thumb}
                    width={292}
                  />
                </li>
              ))}
            </ul>
            <p className={css.des}>{truckData.description}</p>
            <nav>
              <ul className={css.listDetails}>
                <li>
                  <NavLink className={isActive} to='features'>
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink className={isActive} to='reviews'>
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Suspense fallback={<MiniLoader />}>
              <Outlet />
            </Suspense>
          </section>
        </>
      )}
    </main>
  );
}
