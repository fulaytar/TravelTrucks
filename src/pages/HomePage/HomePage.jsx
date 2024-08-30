import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <main>
      <section className={css.container}>
        <div className={css.container_info}>
          <h1 className={css.h1}>Campers of your dreams</h1>
          <p className={css.p}>
            You can find everything you want in our catalog
          </p>
          <button type='button' className={css.btn}>
            View Now
          </button>
        </div>
      </section>
    </main>
  );
}
