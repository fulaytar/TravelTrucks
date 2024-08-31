import Filter from '../../components/Filter/Filter';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <main>
      <section className={css.container}>
        <Filter />
        <div></div>
      </section>
    </main>
  );
}
