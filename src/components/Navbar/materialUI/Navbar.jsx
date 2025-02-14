import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({
  logo,
  brandName = 'Brand',
  links = [],
  isResponsive = true,
  theme = 'light',
  onLinkClick
}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLinkClick = (link) => {
    if (onLinkClick) {
      onLinkClick(link);
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar 
      position="static" 
      color={theme === 'light' ? 'default' : 'primary'}
      elevation={1}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            {logo ? (
              <Avatar
                src={logo}
                alt={`${brandName} logo`}
                sx={{ width: 40, height: 40 }}
              />
            ) : (
              <Avatar
                src="/api/placeholder/40/40"
                alt="Placeholder logo"
                sx={{ width: 40, height: 40 }}
              />
            )}
          </Box>

          {/* Desktop Brand Name */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {brandName}
          </Typography>

          {/* Mobile Menu */}
          {isResponsive && isMobile && (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
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
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {links.map((link) => (
                  <MenuItem 
                    key={link.text} 
                    onClick={() => handleLinkClick(link)}
                  >
                    <Typography textAlign="center">{link.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {/* Mobile Logo & Brand */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}>
            {logo ? (
              <Avatar
                src={logo}
                alt={`${brandName} logo`}
                sx={{ width: 40, height: 40 }}
              />
            ) : (
              <Avatar
                src="/api/placeholder/40/40"
                alt="Placeholder logo"
                sx={{ width: 40, height: 40 }}
              />
            )}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {brandName}
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {links.map((link) => (
              <Button
                key={link.text}
                onClick={() => handleLinkClick(link)}
                sx={{ my: 2, color: 'inherit', display: 'block' }}
              >
                {link.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;