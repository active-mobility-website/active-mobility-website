import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import activeLogo from '../../images/ActiveLogo.png';
import '../../css/Navbar.css';

const HeaderLogo = styled.img`
    height: 90px;
    margin-right: 20px;
`;

const pages = [
    {
        displayName: 'About Us',
        extension: '/AboutUs'
    },
    {
        displayName: 'Products',
        extension: '/Products'
    },
    {
        displayName: 'Contact Us',
        extension: '/ContactUs'
    }
];
const settings = ['Cart ~ 0 Items'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to={"/"}>
                        <HeaderLogo src={activeLogo} />
                    </Link>
                    

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu bar"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon style={{ color: "white" }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block',  md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link style={{ textDecoration: "none" }} to={page.extension}>
                                    <MenuItem key={page.extension} onClick={handleCloseNavMenu}>
                                    
                                        <Typography  textAlign="center">
                                        {page.displayName}
                                        </Typography>
                                    
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                                <Button
                                    key={page.extension}
                                    component={Link}
                                    to={page.extension}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.displayName}
                                </Button>
                            
                        ))}
                    </Box>
                    
                    <Box sx={{ flexGrow: 0 }} style={{marginRight: "10px"}}>
                        <Tooltip title="Email Us">
                            <Link style={{ textDecoration: "none", color: 'white' }} to={"mailto:dino@activemobility.ca"}>
                                <IconButton sx={{ p: 0 }}>
                                    <EmailIcon style={{ color: "white" }} />
                                </IconButton>
                            </Link>
                                

                                

                            
                        </Tooltip>
                        
                    </Box>
                    <Box className="navbar-email-text-container">
                        <Link style={{ textDecoration: "none", color: 'white' }} to={"mailto:dino@activemobility.ca"}>
                            <Typography textAlign="center">
                                dino@activemobility.ca
                            </Typography>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

/*
 * 
 * <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open cart">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <ShoppingCartIcon style={{color:"white"}} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <Link style={{ textDecoration: "none" }} to={"/Cart"}>
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
 * */
export default Navbar;