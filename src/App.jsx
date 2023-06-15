import React, { useState } from 'react';
import { Button, Box, Container, Grid, TextField, Typography, FormControlLabel, Switch } from '@mui/material';
import TableCustomizer from './components/TableCustomizer';
import TableDisplay from './components/TableDisplay';
import SideTableDisplay from './components/SideTableDisplay';

function App() {
    const [dimensions, setDimensions] = useState({ length: 65, width: 50, height: 50, color: "#3E2723", rounded: false });
    const [serverMessage, setServerMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleGetQuote = async () => {
        try {
            const response = await fetch('http://localhost:3000/quotes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dimensions),
            });

            const jsonResponse = await response.json();

            if (response.ok) {
                console.log(jsonResponse);
                setServerMessage(jsonResponse.message);
                setErrorMessage(null);
            } else {
                console.error('Error:', response.status, response.statusText, jsonResponse.message);
                setErrorMessage(`Error: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage(`Error: ${error.toString()}`);
            setServerMessage(null);
        }
    };

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Grid container spacing={2} direction="row-reverse">
                    <Grid item xs={12} md={4}>
                        <TableCustomizer dimensions={dimensions} setDimensions={setDimensions} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                            <TableDisplay dimensions={dimensions} />
                            <SideTableDisplay dimensions={dimensions} />
                            <Button style={{ marginTop: '35px' }} variant="contained" onClick={handleGetQuote}>Get Quote</Button>
                            {serverMessage && <Typography color="success">{serverMessage}</Typography>}
                            {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default App;






