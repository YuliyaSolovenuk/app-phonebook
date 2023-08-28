import { Form } from './form/Form';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  const  contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const  error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
