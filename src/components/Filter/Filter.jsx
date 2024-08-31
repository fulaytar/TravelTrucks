import BigIconFilter from '../BigIconFilter/BigIconFilter';
import Icon from '../Icon/Icon';
import css from './Filter.module.css';
import { useForm } from 'react-hook-form';

export default function Filter() {
  const { register, handleSubmit, watch, setValue } = useForm();

  const onSubmit = data => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) =>
          !(typeof value === 'boolean' && !value) && // Не включати `false` значення
          !(typeof value === 'string' && value.trim() === '') // Не включати пусті рядки
      )
    );

    // Перевірка на порожній об'єкт
    if (Object.keys(filteredData).length === 0) {
      return;
    }

    console.log('Form Data:', filteredData);
  };

  return (
    <div className={css.contentBlock}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.containerLocation}>
          <span className={css.iconMap}>
            <Icon idIcon={'map'} customH={20} customW={20} />
          </span>
          <label htmlFor='city' className={css.labelLocation}>
            Location
          </label>
          <input
            type='text'
            placeholder='City'
            id='city'
            className={css.locationInput}
            {...register('city')}
          />
        </div>
        <p className={css.textCheckBox}>Filter</p>
        <h2 className={css.listName}>Vehicle equipment</h2>
        <ul className={css.checkbox_container}>
          <BigIconFilter
            textFilter={'AC'}
            nameIcon={'wind'}
            register={register}
            setValue={setValue}
          />
          <BigIconFilter
            textFilter={'Automatic'}
            nameIcon={'diagram'}
            register={register}
            setValue={setValue}
          />
          <BigIconFilter
            textFilter={'Kitchen'}
            nameIcon={'cup-hot'}
            register={register}
            setValue={setValue}
          />
          <BigIconFilter
            textFilter={'TV'}
            nameIcon={'tv'}
            register={register}
            setValue={setValue}
          />
          <BigIconFilter
            textFilter={'Bathroom'}
            nameIcon={'water'}
            register={register}
            setValue={setValue}
          />
        </ul>
        <h2 className={css.listName}>Vehicle type</h2>
        <ul className={css.checkbox_container}>
          <BigIconFilter
            textFilter={'Van'}
            nameIcon={'bi_grid1x2'}
            register={register}
            setValue={setValue}
          />
          <BigIconFilter
            textFilter={'Fully Integrated'}
            nameIcon={'grid4x4'}
            register={register}
            setValue={setValue}
          />
          <BigIconFilter
            textFilter={'Alcove'}
            nameIcon={'bi_grid3x3'}
            register={register}
            setValue={setValue}
          />
        </ul>
        <button type='submit' className={css.btn}>
          Search
        </button>
      </form>
    </div>
  );
}
