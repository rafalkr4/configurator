import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Typography, Box, FormControlLabel, Switch } from '@mui/material';

const options = ['short', 'medium', 'tall'];

function TableCustomizer({ dimensions, setDimensions }) {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Customize your table</Typography>
            {['length', 'width', 'height'].map((dimension) => (
                <Box key={dimension} sx={{ mb: 3 }}>
                    <FormControl fullWidth>
                        <InputLabel id={`${dimension}-select-label`}>{dimension}</InputLabel>
                        <Select
                            labelId={`${dimension}-select-label`}
                            id={`${dimension}-select`}
                            value={dimensions[dimension]}
                            label={dimension}
                            onChange={(event) => setDimensions({ ...dimensions, [dimension]: event.target.value })}
                        >
                            {options.map((option) => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
