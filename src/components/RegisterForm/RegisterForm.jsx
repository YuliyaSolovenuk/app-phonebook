import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="div"
      sx={{
        textAlign: 'center',
        backgroundColor: 'hsla(190, 14%, 92%, 0.9)',
        borderRadius: 3,
        padding: 5,
      }}
    >
      <Typography variant="h3" sx={{ my: 2, textAlign: 'center' }}>
        Registration
      </Typography>

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
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Username"
          type="text"
          name="name"
          autoComplete="on"
          required
        />
        <TextField
          id="outlined-email"
          label="Email"
          type="email"
          name="email"
          autoComplete="on"
          required
        />
        <TextField
          id="outlined-password"
          label="Password"
          type="password"
          name="password"
          autoComplete="on"
          required
        />
        <Button
          variant="outlined"
          size="large"
          type="submit"
          sx={{ color: 'inherit', my: 2 }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};
