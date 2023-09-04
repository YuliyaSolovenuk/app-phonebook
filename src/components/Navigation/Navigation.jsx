import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Button
        sx={{
          color: '#fff',
          '&.active': {
            textDecoration: 'underline',
          },
          '&:hover,:focus': { boxShadow: '2', textDecoration: 'underline' },
        }}
        component={NavLink}
        to="/"
      >
        Home
      </Button>

      {isLoggedIn && (
        <Button
          sx={{
            color: '#fff',
            '&.active': {
              textDecoration: 'underline',
            },
            '&:hover,:focus': { boxShadow: '2', textDecoration: 'underline' },
          }}
          component={NavLink}
          to="/contacts"
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};
