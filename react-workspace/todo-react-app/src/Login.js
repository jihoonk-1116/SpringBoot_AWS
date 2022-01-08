import React from "react";
import { signin } from "./service/ApiService";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container, Link } from "@material-ui/core";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        signin({email: email, password: password});
    }
    render(){
        return (
            <Container component="main" maxWidth="xs" style={{marginTop:"8%"}}>
              <Grid item xs={12}>
                    <h1>Todo Application</h1>
              </Grid>
              <Grid container spacing = {2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                </Grid>
              </Grid>
              <form noValidate onSubmit={this.handleSubmit}>
                  {" "}
                  <Grid container spacing={2}>
                      <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextField 
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                          >
                              Login
                          </Button>
                      </Grid>
                      <Link href="/signup" variant="body2">
                          <Grid item>Don't you have an account? Create Account.</Grid>
                      </Link>
                  </Grid>
              </form>
            </Container>
        );
    }
}

export default Login;