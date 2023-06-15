import React, { useState } from 'react';
import { Button, Box, Container, Grid, TextField, Typography, FormControlLabel, Switch, Snackbar, Alert } from '@mui/material';
import TableCustomizer from './components/TableCustomizer';
import TableDisplay from './components/TableDisplay';
import SideTableDisplay from './components/SideTableDisplay';

function App() {
    const [dimensions, setDimensions] = useState({ length: 65, width: 50, height: 50, color: "#3E2723", rounded: false });
    const [serverMessage, setServerMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);

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
                setOpenSnackbar(true);
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

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Container>
            <Box sx={{ my: 4, bgcolor: "#F5F5F5", border: "2px solid black", borderRadius: "5px", p: 5, boxShadow: "0px 2px 4px black" }}>
                <Grid container spacing={2} direction="row-reverse">
                    <Grid item xs={12} md={4}>
                        <TableCustomizer dimensions={dimensions} setDimensions={setDimensions} handleGetQuote={handleGetQuote} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', minHeight: '600px' }}>
                            <Box sx={{ minHeight: '200px' }}>
                                <TableDisplay dimensions={dimensions} />
                            </Box>
                            <Box sx={{ minHeight: '200px' }}>
                                <SideTableDisplay dimensions={dimensions} />
                            </Box>
                            {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                            <Snackbar
                                open={openSnackbar}
                                autoHideDuration={6000}
                                onClose={handleCloseSnackbar}
                            >
                                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                                    {serverMessage}
                                </Alert>
                            </Snackbar>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default App;
