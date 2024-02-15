import React, { useState } from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

import usersApi from "apis/users";

const Copyright = props => (
  <Typography align="center" color="text.secondary" variant="body2" {...props}>
    {"Copyright © "}
    <Link color="inherit" href="https://mui.com/">
      Your Website
    </Link>{" "}
    {new Date().getFullYear()}.
  </Typography>
);

const defaultTheme = createTheme();

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };

    try {
      await usersApi.create({ user: { ...formData } });

      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            noValidate
            component="form"
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <TextField
                  autoFocus
                  fullWidth
                  required
                  autoComplete="given-name"
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  onChange={e => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  required
                  autoComplete="family-name"
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={e => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  autoComplete="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  autoComplete="new-password"
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  control={
                    <Checkbox color="primary" value="allowExtraEmails" />
                  }
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              type="submit"
              variant="contained"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
