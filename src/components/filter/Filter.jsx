import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilterContacts } from './../redux/actions';

export function Filter() {
  const dispatch = useDispatch();

  const handlerFikter = evt => {
    dispatch(setFilterContacts(evt.target.value));
  };

  return (
    <label className={css.filterLabel}>
      Find contact by the name
      <input type="text" name="filter" onChange={handlerFikter} />
    </label>
  );
}
