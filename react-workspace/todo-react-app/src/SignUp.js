import React from "react";
import {
    Button,
    TextField,
    Link,
    Grid,
    Container,
    Typography,
} from "@material-ui/core";

import {signup} from "./service/ApiService";

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        let userdata = {
            username : data.get("username"),
            email: data.get("email"),
            password: data.get("password"),
        }
        // const username = data.get("username");
        // const email = data.get("email");
        // const password = data.get("password");
        
        signup(userdata).then(
            (res) => {
                window.location.href = "/login";
            }
        );
    }
    render(){
        return(
            <Container component="main" maxWidth="xs" style={{marginTop:"8%"}}>
                <form noValidate onSubmit={this.handleSubmit}>
                    <Grid container spacing = {2}>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h5">Create Account</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="username"
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="User Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email Address"
                                    autoComplete = "email"
                                />
                        </Grid>
                        <Grid item xs = {12}>
                            <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name = "password"
                                    label = "Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                        </Grid>
                        <Grid item xs ={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                >
                                    Create Account
                                </Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant = "body2">
                                Already have an account? Please Login!
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        );
    }
}

export default SignUp;