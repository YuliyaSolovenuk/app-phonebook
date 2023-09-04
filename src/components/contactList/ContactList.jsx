import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';

// import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactById } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <List
      sx={{ width: '100%', maxWidth: 480, overflow: 'auto', maxHeight: 440 }}
    >
      {filteredContacts.map(contact => {
        return (
          <ListItem key={contact.id} sx={{ textAlign: 'center', fontSize: 24 }}>
            {contact.name}:&nbsp;
            <ListItemText>{contact.number}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                type="button"
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(deleteContactById(contact.id))}
              >
                <DeleteIcon fontSize="medium" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};
