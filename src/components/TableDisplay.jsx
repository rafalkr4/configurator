import React from 'react';
import { Box } from '@mui/material';

const sizeMap = {
    short: 50,
    medium: 100,
    tall: 150
};

function TableDisplay({ dimensions }) {
    const { length, width, height } = dimensions;

    const divStyleTop = {
        height: `${sizeMap[width]}px`,
        width: `${sizeMap[length]}px`,
        backgroundColor: 'brown',
        borderRadius: dimensions.rounded ? "7px" : "0",
    };

    const legWidth = 10;
    const legOffset = sizeMap[length] * 0.12;

    const divStyleSideLeg = {
        height: `${sizeMap[height]}px`,
        width: `${legWidth}px`,
        backgroundColor: 'brown',
        borderRadius: dimensions.rounded ? "3px" : "0",
    };

    const divStyleSideTop = {
        height: `10px`,
        width: `${sizeMap[length] - 2 * (legWidth + legOffset)}px`,
        backgroundColor: 'brown',
        position: 'relative',
        marginLeft: `${legWidth + legOffset}px`,
        marginRight: `${legWidth + legOffset}px`,
        borderRadius: dimensions.rounded ? "0 0 10px 10px" : "0",
    };

    return (
        <Box sx={{ p: 2, position: 'relative' }}>
            <Box sx={{ mt: 2 }}>
                <strong>Top Table View:</strong>
            </Box>
            <div style={divStyleTop} />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, position: 'relative' }}>
                <div style={divStyleSideLeg} />
                <div style={divStyleSideTop} />
                <div style={divStyleSideLeg} />
            </Box>
            <Box sx={{ mt: 2 }}>
                <strong>Side Table View:</strong> Length: {length}, Height: {height}
            </Box>
        </Box>
    );
}

export default TableDisplay;
