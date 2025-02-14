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
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavLink {
  text: string;
  href: string;
  icon?: React.ReactNode;
}

interface NavbarProps {
  logo?: string;
  brandName?: string;
  links?: NavLink[];
  isResponsive?: boolean;
  theme?: 'light' | 'dark';
  onLinkClick?: (link: NavLink) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  logo,
  brandName = 'Brand',
  links = [],
  isResponsive = true,
  theme = 'light',
  onLinkClick
}) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleLinkClick = (link: NavLink): void => {
    if (onLinkClick) {
      onLinkClick(link);
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        bgcolor: theme === 'light' ? '#ffffff' : '#1f2937',
        color: theme === 'light' ? '#000000' : '#ffffff',
        boxShadow: 1
      }}
      elevation={1}
    >
      <Container maxWidth={false} >
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
                    <Typography textAlign="center">
                      {link.icon && <span className="menu-icon">{link.icon}</span>}
                      {link.text}
                    </Typography>
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
                sx={{ 
                  my: 2, 
                  color: 'inherit', 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 1
                }}
              >
                {link.icon}
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