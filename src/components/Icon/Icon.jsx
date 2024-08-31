import clsx from 'clsx';
import css from './Icon.module.css';

export default function Icon({
  idIcon,
  customW,
  customH,
  customColor,
  activeHover,
  setCheck,
}) {
  return (
    <svg
      className={clsx(
        css.icons,
        activeHover && css.activeHover,
        setCheck && css.setCheck
      )}
      width={customW ? customW : 32}
      height={customH ? customH : 32}
    >
      <use href={`/symbol-defs.svg#${idIcon}`}></use>
    </svg>
  );
}
