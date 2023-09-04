import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
        ml: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        component="p"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        Welcome,&nbsp;
        {user.name}
      </Typography>
      <Button
        variant="outlined"
        size="medium"
        type="button"
        onClick={handleLogOut}
        sx={{
          color: 'inherit',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          '&:hover,:focus': { boxShadow: '2', border: '1px solid white' },
        }}
      >
        Logout
      </Button>
    </Box>
  );
};
