import React from 'react';

import {Box, Typography } from '@mui/material';
function About(){
    return(
        <Box component="header"
            height={600}
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Typography variant='h3'>About Page</Typography>
        </Box>
        
    )
}
export default About;