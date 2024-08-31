import { Suspense, lazy } from 'react';
import css from './CatalogPage.module.css';
import MiniLoader from '../../components/MiniLoader/MiniLoader'; // Assuming you have a MiniLoader component

// Lazy load the components
const Filter = lazy(() => import('../../components/Filter/Filter'));
const ListTruck = lazy(() => import('../../components/ListTrucks/ListTrucks'));

export default function CatalogPage() {
  return (
    <main>
      <section className={css.container}>
        <Filter />
        <Suspense fallback={<MiniLoader />}>
          <ListTruck />
        </Suspense>
      </section>
    </main>
  );
}
