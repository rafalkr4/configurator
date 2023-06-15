import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Typography, Box, FormControlLabel, Switch, Slider } from '@mui/material';

const minMaxMap = {
    length: {min: 65, max: 260},
    width: {min: 50, max: 130},
    height: {min: 50, max: 120}
};

const colors = ["#3E2723", "#4E342E", "#5D4037", "#6D4C41", "#795548", "#8D6E63", "#9E786D"];

function TableCustomizer({ dimensions, setDimensions }) {
    const handleSliderChange = (dimension, value) => {
        setDimensions({...dimensions, [dimension]: value});
    };

    const handleColorChange = (event) => {
        setDimensions({ ...dimensions, color: event.target.value });
    }



    const generateMarks = (min, max) => {
        let marks = [];
        for(let i = min; i <= max; i += 10){
            marks.push({value: i});
        }
        return marks;
    }

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Customize your table</Typography>
            {['length', 'width', 'height'].map((dimension) => (
                <Box key={dimension} sx={{ mb: 3 }}>
                    <Typography id="input-slider" gutterBottom>
                        {dimension}
                    </Typography>
                    <Slider
                        value={dimensions[dimension]}
                        min={minMaxMap[dimension].min}
                        max={minMaxMap[dimension].max}
                        onChange={(event, newValue) => handleSliderChange(dimension, newValue)}
                        aria-labelledby="input-slider"
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => `${value} cm`}
                        marks={generateMarks(minMaxMap[dimension].min, minMaxMap[dimension].max)}
                    />
                </Box>
            ))}
            <FormControl sx={{ mb: 3 }}>
                <InputLabel id="color-select-label"></InputLabel>
                <Select
                    labelId="color-select-label"
                    id="color-select"
                    value={dimensions.color || colors[0]}
                    onChange={handleColorChange}
                >
                    {colors.map((color, index) => (
                        <MenuItem key={index} value={color}>
                            {`Color ${index + 1}`}
                            <Box sx={{ width: 24, height: 24, ml: 1, backgroundColor: color }} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Box sx={{ mb: 3 }}>
                <FormControlLabel
                    control={<Switch checked={dimensions.rounded} onChange={(event) => setDimensions({ ...dimensions, rounded: event.target.checked })} />}
                    label={<Typography style={{color: dimensions.rounded ? "black" : "grey"}}>Rounded corners</Typography>}
                />
                <Typography variant="h6">Table dimensions: {dimensions.length} x {dimensions.width} x {dimensions.height} cm</Typography>
            </Box>

        </Box>
    );
}

export default TableCustomizer;
