import toast from 'react-hot-toast';
import BigIconFilter from '../BigIconFilter/BigIconFilter';
import Icon from '../Icon/Icon';
import css from './Filter.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterTrucksSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, setValue } = useForm();

  const onSubmit = data => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) =>
          !(typeof value === 'boolean' && !value) &&
          !(typeof value === 'string' && value.trim() === '')
      )
    );

    if (Object.keys(filteredData).length === 0) {
      return toast.error('Please select search parameters');
    }

    dispatch(changeFilter(filteredData));
  };

  return (
    <div className={css.contentBlock}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.containerLocation}>
          <span className={css.iconMap}>
            <Icon idIcon={'map'} customH={20} customW={20} />
          </span>
          <label htmlFor='location' className={css.labelLocation}>
            Location
          </label>
          <input
            type='text'
            placeholder='City'
            id='location'
            className={css.locationInput}
            {...register('location')}
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
            textFilter={'transmission'}
            nameIcon={'diagram'}
            register={register}
            setValue={setValue}
          />
          <BigIconFilter
            textFilter={'kitchen'}
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
            textFilter={'bathroom'}
            nameIcon={'bathroom'}
            register={register}
            setValue={setValue}
          />
          <BigIconFilter
            textFilter={'gas'}
            nameIcon={'gas'}
            register={register}
            setValue={setValue}
          />
          <BigIconFilter
            textFilter={'refrigerator'}
            nameIcon={'refrigerator'}
            register={register}
            setValue={setValue}
          />
          <BigIconFilter
            textFilter={'microwave'}
            nameIcon={'microwave'}
            register={register}
            setValue={setValue}
          />
          <BigIconFilter
            textFilter={'radio'}
            nameIcon={'radio'}
            register={register}
            setValue={setValue}
          />
          <BigIconFilter
            textFilter={'water'}
            nameIcon={'water'}
            register={register}
            setValue={setValue}
          />
        </ul>
        <h2 className={css.listName}>Vehicle type</h2>
        <ul className={css.checkbox_container}>
          <BigIconFilter
            textFilter={'panelTruck'}
            nameIcon={'bi_grid1x2'}
            register={register}
            setValue={setValue}
            watch={watch}
          />
          <BigIconFilter
            textFilter={'fullyIntegrated'}
            nameIcon={'grid4x4'}
            register={register}
            setValue={setValue}
            watch={watch}
          />
          <BigIconFilter
            textFilter={'alcove'}
            nameIcon={'bi_grid3x3'}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        </ul>
        <button type='submit' className={css.btn}>
          Search
        </button>
      </form>
    </div>
  );
}
