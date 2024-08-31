import { useState } from 'react';
import Icon from '../Icon/Icon';
import css from './BigIconFilter.module.css';
import clsx from 'clsx';

export default function BigIconFilter({
  textFilter,
  nameIcon,
  register,
  setValue,
}) {
  const [isActive, setIsActive] = useState(false);

  const handleCheckBoxToggle = () => {
    const newValue = !isActive;
    setIsActive(newValue);
    setValue(textFilter, newValue);
  };

  return (
    <li
      onClick={handleCheckBoxToggle}
      className={clsx(css.checkbox_label, { [css.activeCheckBox]: isActive })}
    >
      <input
        type='checkbox'
        className={css.visually_hidden}
        checked={isActive}
        {...register(textFilter)}
        onChange={handleCheckBoxToggle}
      />
      <Icon idIcon={nameIcon} />
      <span className={css.text}>{textFilter}</span>
    </li>
  );
}
