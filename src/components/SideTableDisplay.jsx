import React from 'react';
import { Box } from '@mui/material';

function SideTableDisplay({ dimensions }) {
    const { length, height } = dimensions;

    const divStyleVertical = {
        height: `${height}px`,
        width: `10px`,
        backgroundColor: 'brown',
    };

    const divStyleHorizontal = {
        width: `${length}px`,
        height: `10px`,
        backgroundColor: 'brown',
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <div style={divStyleHorizontal} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: `${length}px` }}>
                <div style={divStyleVertical} />
                <div style={divStyleVertical} />
            </Box>
        </Box>
    );
}

export default SideTableDisplay;
