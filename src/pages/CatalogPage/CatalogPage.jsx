import Filter from '../../components/Filter/Filter';
import ListTruck from '../../components/ListTrucks/ListTrucks';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <main>
      <section className={css.container}>
        <Filter />
        <ListTruck />
      </section>
    </main>
  );
}
