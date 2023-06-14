import React from 'react';
import { Box, Typography } from '@mui/material';

function SideTableDisplay({ dimensions }) {
    const { length, height } = dimensions;

    const divStyleVertical = {
        height: `${height * 1.6}px`,
        width: `25px`,
        backgroundImage: "url(/src/images/structure.jpeg)",
        backgroundColor: dimensions.color,
        backgroundBlendMode: 'multiply',
        border: '2px solid black',
    };

    const divStyleHorizontal = {
        width: `${length * 1.6}px`,
        height: `20px`,
        backgroundImage: "url(/src/images/structure.jpeg)",
        backgroundColor: dimensions.color,
        backgroundBlendMode: 'multiply',
        borderRadius: dimensions.rounded ? "7px" : "0",
        border: '2px solid black',
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1, mt: 3 }}>
            <Typography variant="h6" gutterBottom>Side View</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                <div style={divStyleHorizontal} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: `${length}px` }}>
                    <div style={divStyleVertical} />
                    <div style={divStyleVertical} />
                </Box>
            </Box>
        </Box>
    );
}

export default SideTableDisplay;