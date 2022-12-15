import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar,Typography,Toolbar,Container } from '@mui/material';

const navLink ={
    color:'black',
    textDecoration:'none',
};

function Navbar() {
    return (
        <AppBar color="default">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography sx={{mx:2}}>
                       <Link to="/">Logo</Link>
                    </Typography>
                    <Typography sx={{mx:2}}>
                       <Link to="/Home" style={Object.assign({},navLink)}>Home</Link>
                    </Typography>
                    <Typography sx={{mx:2}}>
                       <Link to="/About" style={Object.assign({},navLink)}>About</Link>
                    </Typography>
                    <Typography sx={{mx:2}}>
                       <Link to="/Portfolio" style={Object.assign({},navLink)}>Portfolio</Link>
                    </Typography>
                </Toolbar>
                
            </Container>
        </AppBar>
    );
}
export default Navbar;