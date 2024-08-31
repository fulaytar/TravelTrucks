import { useSelector } from 'react-redux';
import css from './Favorite.module.css';
import { selectFavoriteTrucks } from '../../redux/favoriteTrucksSlice';
import { useEffect, useState } from 'react';
import Truck from '../../components/Truck/Truck';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

export default function Favorite() {
  const [favorite, setFavorite] = useState([]);
  const data = useSelector(selectFavoriteTrucks);

  useEffect(() => {
    setFavorite(data || []);
  }, [data]);
  return (
    <main>
      <section>
        <ul className={css.list}>
          {favorite.length > 0 ? (
            favorite.map(item => <Truck trucks={item} key={item.id} />)
          ) : (
            <>
              <p className={css.p}>
                Please add your favorite <Link to={'/catalog'}>Trucks</Link>
              </p>
              <Loader/>
            </>
          )}
        </ul>
      </section>
    </main>
  );
}
