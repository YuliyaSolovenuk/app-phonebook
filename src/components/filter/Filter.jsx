import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { onFiltredContacts } from 'redux/filterSlice';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;

    dispatch(onFiltredContacts(value));
  };

  return (
    <Box
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
        textAlign: 'center',
      }}
    >
      <TextField
        id="outlined"
        label="Find contacts by name"
        multiline
        maxRows={4}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts"
        autoComplete="on"
      />
    </Box>
  );
};
