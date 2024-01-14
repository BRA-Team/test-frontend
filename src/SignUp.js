import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SportsIcon from '@mui/icons-material/Sports';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './stiles/link.css';
import logo from './images/logo.png';

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
      <br />
      <a href="https://github.com/BRA-Team">
        <img src={logo} alt="Logo" style={{ width: '180px', height: '30px', marginTop: '10px'}} />
      </a>
    </Typography>
  );
}


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="false" sx={{ height: '120vh', background: 'linear-gradient(76.8deg, rgb(121,45,129) 3.6%, rgb(36,31,98) 90.4%)', backgroundSize: 'cover',display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
        <CssBaseline />
        <Box
          sx={{
            width: '70vh',
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <SportsIcon />
          </Avatar>
          <Typography
  component="h1"
  variant="h5"
  color="white"
  sx={{
    fontFamily: 'Helvetica, Arial, sans-serif',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  }}
>
  Register
</Typography>

<Box
  component="form"
  noValidate
  onSubmit={handleSubmit}
  sx={{
    mt: 3,
    backgroundColor: 'rgba(96, 96, 96, 0.5)', // Add background color here
    padding: '20px',
    borderRadius: '10px',
  }}
>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  InputLabelProps={{ style: { color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' } }}
              InputProps={{ style: { color: 'white', borderColor: 'white' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  InputLabelProps={{ style: { color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' } }}
              InputProps={{ style: { color: 'white', borderColor: 'white' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  InputLabelProps={{ style: { color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' } }}
              InputProps={{ style: { color: 'white', borderColor: 'white' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputLabelProps={{ style: { color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' } }}
              InputProps={{ style: { color: 'white', borderColor: 'white' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputLabelProps={{ style: { color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' } }}
              InputProps={{ style: { color: 'white', borderColor: 'white' } }}
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="country"
                  label="Country"
                  id="country"
                  autoComplete="country"
                  InputLabelProps={{ style: { color: 'white', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' } }}
              InputProps={{ style: { color: 'white', borderColor: 'white' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" style={{ color: 'white' }} />}
                  label={<Typography style={{ color: 'white',maxWidth: '40ch', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>I agree to receive notifications and emails from this website.</Typography>}
                  
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="link" // Apply the link class to the button
            >
              Register
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
              <Link to="/signin" variant="body2" className="link" >
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}






