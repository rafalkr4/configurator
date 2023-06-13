import React, { useState } from 'react';
import { Slider, Typography, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function TableCustomizer({ dimensions, setDimensions }) {
  const [errors, setErrors] = useState({});

  const validate = (property, value) => {
    if (!value) {
      setErrors(prev => ({
        ...prev,
        [property]: 'This field is required'
      }));
    } else {
      setErrors(prev => ({
        ...prev,
        [property]: ''
      }));
    }
  };

  const handleChange = (property) => (event) => {
    const value = event.target.value;
    validate(property, value);
    setDimensions({
      ...dimensions,
      [property]: value
    });
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h6" gutterBottom>Customize your table</Typography>
      <Box sx={{ mb: 1 }}>
        <FormControl fullWidth>
          <InputLabel>Height</InputLabel>
          <Select value={dimensions.height} onChange={handleChange('height')}>
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="short">Short</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="tall">Tall</MenuItem>
          </Select>
        </FormControl>
        {errors.height && <Typography color="error">{errors.height}</Typography>}
      </Box>

      // Similar blocks for Length and Width here

      <Box sx={{ mt: 1 }}>
        <Typography id="rounded-slider" gutterBottom>Rounded Corners</Typography>
        <Slider
          valueLabelDisplay="auto"
          min={0}
          max={1}
          step={1}
          value={dimensions.rounded ? 1 : 0}
          onChange={(_, value) => setDimensions({ ...dimensions, rounded: Boolean(value) })}
        />
      </Box>
    </Box>
  );
}

export default TableCustomizer;
