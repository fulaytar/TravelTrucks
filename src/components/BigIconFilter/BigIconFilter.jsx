import { useState } from 'react';
import Icon from '../Icon/Icon';
import css from './BigIconFilter.module.css';
import clsx from 'clsx';

export default function BigIconFilter({
  textFilter,
  nameIcon,
  register,
  setValue,
  watch,
}) {
  const [isActive, setIsActive] = useState(false);

  const handleCheckBoxToggle = () => {
    const newValue = !isActive;
    setIsActive(newValue);

    if (['fullyIntegrated', 'alcove', 'panelTruck'].includes(textFilter)) {
      // Отримуємо поточне значення поля 'form'
      const currentFormValue = watch('form') || '';

      // Оновлюємо поле 'form' з новим значенням
      const updatedFormValue = newValue
        ? `${currentFormValue ? `${currentFormValue},` : ''}${textFilter}`
        : currentFormValue
            .split(',')
            .filter(item => item !== textFilter)
            .join(',');

      setValue('form', updatedFormValue);
    } else {
      // Оновлюємо звичайне поле
      setValue(textFilter, newValue);
    }
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
