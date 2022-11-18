import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilterContacts } from './../redux/filtersSlice';

export function Filter() {
  const dispatch = useDispatch();

  const handlerFilter = evt => {
    dispatch(setFilterContacts(evt.target.value));
  };

  return (
    <label className={css.filterLabel}>
      Find contact by the name
      <input type="text" name="filter" onChange={handlerFilter} />
    </label>
  );
}
