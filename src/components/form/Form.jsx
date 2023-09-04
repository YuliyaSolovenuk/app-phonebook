import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

Notiflix.Notify.init({
  width: '320px',
  position: 'center-top',
  cssAnimationStyle: 'zoom',
});

export function Form() {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.elements.name.value.trim();
    const number = evt.currentTarget.elements.number.value.trim();

    const isIncludeName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isIncludeNumber = contacts.find(contact => contact.number === number);

    if (isIncludeName) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }

    if (isIncludeNumber) {
      Notiflix.Notify.warning(`${number} is already in contacts`);
      return;
    }

    const contact = {
      name,
      number,
    };

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <Box component="div" sx={{ textAlign: 'center' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'center',
          '& .MuiTextField-root': { m: 1, width: '35ch' },
          textAlign: 'center',
        }}
        noValidate
        autoComplete="on"
      >
        <TextField
          id="outlined-name"
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="on"
          required
        />
        <TextField
          id="outlined-tel"
          label="Number"
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete="on"
          required
        />

        <Button
          variant="outlined"
          size="large"
          type="submit"
          disabled={!name || !number}
          sx={{ color: 'inherit', my: 2, '&:hover,:focus': { boxShadow: '2' } }}
        >
          Add contact
        </Button>
      </Box>
    </Box>
  );
}
