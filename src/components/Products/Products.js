import React from 'react';
import { Typography, Paper, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../css/Typography.css';
import '../../css/MainProductDisplay.css';
import trirideLogo from '../../images/Triride-Logo.png';
import freedomTraxLogo from '../../images/Freedom-Trax.png';
import pushLoxLogo from '../../images/PushLox.PNG';

const Products = () => {
    const content = <>
        <div>
            {buildProductLineLinkBlock()}
            <br />
            <Typography className="left-center-on-screen-size" variant="h6">
                For inquiries about purchasing these products, email <Link to={"mailto:dino@activemobility.ca"}>dino@activemobility.ca</Link>
            </Typography>
        </div>
    </>;
    return content;
};


const buildProductLineLinkBlock = () => {
    return (
        <>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="h5">
                Explore The Products
            </Typography>
            <Box className="main-product-display-container">
                {buildProductPaper("Triride", trirideLogo, "Explore Triride", "https://www.trirideitalia.com/en/")}
                {buildProductPaper("FreedomTrax", freedomTraxLogo, "See FreedomTrax", "https://freedomtrax.com/")}
                {buildProductPaper("PushLox", pushLoxLogo, "Look At PushLox", "https://www.pushlox.com/")}
            </Box>
        </>
    );
};

const buildProductPaper = (productName, imgSrc, buttonText, linkSrc) => {
    return (
        <>

            <Paper
                className="main-product-display-paper"
                sx={{
                    backgroundColor: "lightgray.main"
                }}
                elevation={5}
            >
                <div className="main-product-image-container">
                    <Link style={{ textDecoration: "none" }} to={linkSrc}>
                        <Paper
                            className="main-product-display-paper"
                            style={{ width: "80%", margin: "0px auto" }}
                            elevation={8}
                        >
                            <img src={imgSrc} />
                        </Paper>
                    </Link>
                </div>
                <div className="main-product-name-and-button-container">
                    <Link style={{ textDecoration: "none", margin: "auto" }} to={linkSrc}>
                        <Typography variant="h4" className="main-product-display-name">
                            {productName}
                        </Typography>
                    </Link>
                    <span className="main-product-display-button-container">
                        <Button className="main-product-display-button" variant="contained" href={linkSrc}
                            sx={{
                                backgroundColor: "primary.light"
                            }}
                        >
                            {buttonText}
                        </Button>
                    </span>
                </div>
            </Paper>
        </>
    );
};

export default Products;