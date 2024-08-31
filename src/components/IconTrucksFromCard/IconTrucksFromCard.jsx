import Icon from '../Icon/Icon';
import css from './IconTrucksFromCard.module.css';

export default function IconTrucksFromCard({ textIcon, idIcon }) {
    return (
        <li className={css.li}>
      <Icon idIcon={idIcon} customH={20} customW={20} /> {textIcon}
    </li>
  );
}
