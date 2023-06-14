import React from 'react';
import { Box, Typography } from '@mui/material';

function TableDisplay({ dimensions }) {
    const { length, width, height } = dimensions;

    const divStyleTop = {
        height: `${width * 1.6}px`,
        width: `${length * 1.6}px`,
        backgroundImage: "url(/src/images/structure-horizontal.jpeg)",
        backgroundColor: dimensions.color,
        backgroundBlendMode: 'multiply',
        borderRadius: dimensions.rounded ? "7px" : "0",
        border: "2px solid black",
    };

    return (
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>Top View</Typography>
            <div style={divStyleTop} />
            <Box sx={{ mt: 2 }}>
            </Box>
        </Box>
    );
}

export default TableDisplay;
