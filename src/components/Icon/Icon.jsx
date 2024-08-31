import css from './Icon.module.css';

export default function Icon({ idIcon, customW, customH, customColor }) {
  return (
    <svg
      className={css.icons}
      width={customW ? customW : 32}
      height={customH ? customH : 32}
    >
      <use href={`/public/symbol-defs.svg#${idIcon}`}></use>
    </svg>
  );
}
