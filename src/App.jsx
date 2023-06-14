import React from 'react';
import TableCustomizer from './components/TableCustomizer';
import TableDisplay from './components/TableDisplay';
import { Container } from '@mui/material';

function App() {
  const [tableDimensions, setTableDimensions] = React.useState({
    height: 'short',
    length: 'short',
    width: 'short',
    rounded: false
  });

  return (
    <Container maxWidth="sm">
      <TableDisplay dimensions={tableDimensions} />
      <TableCustomizer dimensions={tableDimensions} setDimensions={setTableDimensions} />
    </Container>
  );
}
export default App;
