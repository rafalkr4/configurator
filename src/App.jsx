// import React from 'react';
// import TableCustomizer from './components/TableCustomizer';
// import TableDisplay from './components/TableDisplay';
// import { Container, Grid, useMediaQuery, createTheme, ThemeProvider } from '@mui/material';
//
// function App() {
//   const [tableDimensions, setTableDimensions] = React.useState({
//     height: 'short',
//     length: 'short',
//     width: 'short',
//     rounded: false
//   });
//
//   const theme = createTheme({
//     breakpoints: {
//       values: {
//         xs: 0,
//         sm: 600,
//         md: 900,
//         lg: 1200,
//         xl: 1536,
//       },
//     },
//   });
//
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
//
//   return (
//       <ThemeProvider theme={theme}>
//         <Container maxWidth="lg">
//           <Grid container spacing={2} direction={isSmallScreen ? 'column-reverse' : 'row'}>
//             <Grid item xs={12} md={6}>
//               <TableCustomizer dimensions={tableDimensions} setDimensions={setTableDimensions} />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TableDisplay dimensions={tableDimensions} />
//             </Grid>
//           </Grid>
//         </Container>
//       </ThemeProvider>
//   );
// }
//
// export default App;

import React, { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import TableCustomizer from './components/TableCustomizer';
import TableDisplay from './components/TableDisplay';

function App() {
    const [dimensions, setDimensions] = useState({ length: 'short', width: 'short', height: 'short' });

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Grid container spacing={2} direction="row-reverse">
                    <Grid item xs={12} md={4}>
                        <TableCustomizer dimensions={dimensions} setDimensions={setDimensions} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TableDisplay dimensions={dimensions} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default App;

