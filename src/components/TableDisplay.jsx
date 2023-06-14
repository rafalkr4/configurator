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


import React from 'react';
import { Box } from '@mui/material';

import shortTableImage from '../images/shortTableImage.png';
import mediumTableImage from '../images/mediumTableImage.png';
import tallTableImage from '../images/tallTableImage.png';
import roundedTableImage from '../images/roundedTableImage.png';

function TableDisplay({ dimensions }) {

    let tableImageSrc = '';

    if (dimensions.height === 'short' && dimensions.length === 'short' && dimensions.width === 'short') {
        tableImageSrc = shortTableImage;
    } else if (dimensions.height === 'medium' && dimensions.length === 'medium' && dimensions.width === 'medium') {
        tableImageSrc = mediumTableImage;
    } else if (dimensions.height === 'tall' && dimensions.length === 'tall' && dimensions.width === 'tall') {
        tableImageSrc = tallTableImage;
    } else if (dimensions.rounded) {
        tableImageSrc = roundedTableImage;
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
            <img src={tableImageSrc} alt="Custom table" />
        </Box>
    );
}

export default TableDisplay;

