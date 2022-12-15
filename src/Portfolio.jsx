import React from 'react';

import {Box, Typography } from '@mui/material';
function Portfolio(){
    return(
        <Box component="header"
            height={600}
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Typography variant='h3'>My Works!</Typography>
        </Box>
        
    )
}
export default Portfolio;