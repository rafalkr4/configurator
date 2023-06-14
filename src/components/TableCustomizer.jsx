import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Typography, Box, FormControlLabel, Switch, TextField } from '@mui/material';

const minMaxMap = {
    length: {min: 65, max: 260},
    width: {min: 50, max: 130},
    height: {min: 50, max: 120}
};

function TableCustomizer({ dimensions, setDimensions }) {
    const handleChange = (dimension, value) => {
        if (value === "" || isNaN(value)) {
            alert('Only numbers are allowed');
            return;
        }
        if (value < minMaxMap[dimension].min || value > minMaxMap[dimension].max) {
            alert(`Value for ${dimension} should be between ${minMaxMap[dimension].min} and ${minMaxMap[dimension].max}`);
            return;
        }
        setDimensions({...dimensions, [dimension]: value});
    };

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Customize your table</Typography>
            {['length', 'width', 'height'].map((dimension) => (
                <Box key={dimension} sx={{ mb: 3 }}>
                    <TextField
                        label={dimension}
                        type="number"
                        value={dimensions[dimension]}
                        onChange={(event) => handleChange(dimension, parseInt(event.target.value, 10))}
                    />
                </Box>
            ))}
            <FormControlLabel
                control={<Switch checked={dimensions.rounded} onChange={(event) => setDimensions({ ...dimensions, rounded: event.target.checked })} />}
                label={<Typography style={{color: dimensions.rounded ? "black" : "grey"}}>Rounded corners</Typography>}
            />
        </Box>
    );
}

export default TableCustomizer;
