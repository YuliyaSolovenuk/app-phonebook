import { useEffect } from 'react';
import { Filter } from 'components/filter/Filter';
import { Form } from 'components/form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/contactList/ContactList';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        gap: '26px',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: 'hsla(190, 14%, 92%, 0.9)',
        borderRadius: 3,
        padding: 3,
      }}
    >
      <Box component="div">
        <Typography variant="h3" sx={{ my: 2, textAlign: 'center' }}>
          Phonebook
        </Typography>
        <Form />
      </Box>
      <Box component="div">
        <Typography variant="h3" sx={{ my: 2, textAlign: 'center' }}>
          Contacts
        </Typography>
        <Filter />
        {isLoading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
        {contacts.length > 0 && <ContactList />}
      </Box>
    </Box>
  );
}
