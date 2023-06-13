// import * as React, {useState} from "react";
// import { Button, MenuItem, Typography, Slider, Grid } from "@mui/material-next/Button";
// import { makeStyles } from '@material-ui/core/styles';
//
// const useStyle = makeStyle(theme => ({
//     root: {
//         padding: theme.spacing(2),
//     },
//     image: {
//         width: "100%",
//         height: "auto",
//     },
//     select: {
//         margin: theme.spacing(1),
//     },
// }));
//
// function tableDisplay() {
//     const classes = useStyle();
//     const [height, setHeight] = useState("short");
//     const [width, setWidth] = useState("short");
//     const [length, setLength] = useState("short");
//     const [rounded, setRounded] = useState(0);
//
//
//     const tableImages = {
//         short: {
//             short: "",
//             medium: "",
//             long: "",
//         },
//
//     medium: {
//             short: "",
//         medium: "",
//         long: "",
//     },
//     long: {
//             short: "",
//         medium: "",
//         long: "",
//     },
//     };
//
// return (
//     <Grid container direction={{window.innerWidth < 900 ? "column-reverse" : "row"}>
//         <Grid item xs={12} md={6}>
//         <img className={class.image} src={tableImages[height][width][length]} alt="Table preview" />
//     </Grid>
//         <Grid item xs={12} md={6}>
//         <Select className={classes.select} value={height} onChange={e => setHeight(e.target.value)}>
//         <Menu value="short">Krótkie</MenuItem>
//         <Menu value="medium">Średnie</MenuItem>
//         <Menu value="long">Długie</MenuItem>
//         </Select>
//         <Select className={classes.select} value={width} onChange={e => setWidth(e.target.value)}>
//
//
//
// )
//
//
//
// export default TableDisplay;


import React from "react";
import { Box } from "@mui/material";


function TableDisplay({ dimensions }) {
    const tableImageSrc =

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
      <img src={tableImageSrc} alt="Custom table" />
    </Box>
  );
}

export default TableDisplay;
