import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   activeLink: {
//     backgroundColor: theme.palette.primary.main,
//     color: 'red',
//   },
// }));

export const AuthNav = () => {
  // const classes = useStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
        ml: 'auto',
      }}
    >
      <Button
        sx={{
          color: '#fff',
          '&.active': {
            boxShadow: '2',
            textDecoration: 'underline',
          },
          '&:hover,:focus': { textDecoration: 'underline' },
        }}
        component={NavLink}
        to="/register"
      >
        Register
      </Button>

      <Button
        sx={{
          color: '#fff',
          '&.active': {
            boxShadow: '2',
            textDecoration: 'underline',
          },
          '&:hover,:focus': { textDecoration: 'underline' },
        }}
        component={NavLink}
        to="/login"
      >
        Log In
      </Button>
    </Box>
  );
};
