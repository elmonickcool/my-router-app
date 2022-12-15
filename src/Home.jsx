import React from 'react';

import {Box, Typography,Button,Container } from '@mui/material';


function Home() {
    return (
            <Container>
                <Box component="header"
            height={300}
            backgroundSize="cover"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Typography variant='h1'>Hello World!</Typography>
              
            </Box>
            <Button>click me</Button>
            </Container>
           
      
        
    );
}
export default Home;