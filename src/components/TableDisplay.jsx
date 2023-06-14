import React from 'react';
import { Box } from '@mui/material';

// These could be any values you want to represent the different sizes.
const sizeMap = {
    short: 50,
    medium: 100,
    tall: 150
};

function TableDisplay({ dimensions }) {
    const { length, width, height } = dimensions;
    const divStyle = {
        height: `${sizeMap[height]}px`,
        width: `${sizeMap[length]}px`,
        backgroundColor: 'saddlebrown',
        borderRadius: dimensions.rounded ? "7%" : "0",
    };


    return (
        <Box sx={{ p: 2 }}>
            <div style={divStyle} />
            <Box sx={{ mt: 2 }}>
                <strong>Dimensions:</strong> Length: {length}, Width: {width}, Height: {height}
            </Box>
        </Box>
    );
}

export default TableDisplay;
