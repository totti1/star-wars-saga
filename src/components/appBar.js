import * as React from 'react';

// import { styled, alpha } from '@mui/material/styles';
import { 
    AppBar, 
    Box, 
    Toolbar, 
    IconButton, 
    Typography, 
    // InputBase, 
    Badge, 
    MenuItem, 
    Menu  
} from '@mui/material';

// import SearchIcon from '@mui/icons-material/Search';
import ViewListIcon from '@mui/icons-material/ViewList';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

export default function PrimaryAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [page, setPage] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  // const [searchTerm, setSearchTerm]=React.useState("")

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const open = Boolean(page);
  const handleClick = (event) => {
    setPage(event.currentTarget);
  };
  const handleClose = () => {
    setPage(null);
  };

  // const handleOnChange = () => {
  //   window.location=`/search-results/${searchTerm}`;
  // }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        component={Link}
        to= "/list/1"
      >
        <IconButton 
            size="large" 
            color="inherit"
        >
          <ViewListIcon />
        </IconButton>
        <p>Lister</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={3} color="error">
            <ScheduleIcon />
          </Badge>
        </IconButton>
        <p>Last Visited</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'black' }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, }}
            component={Link}
            to= "/"
          >
            <img 
                style={{ 'object-contain':'contain', 'height': '50px'  }}
                alt='logo'
                src="data:image/png;base64,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" 
            />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            
          </Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <IconButton sx={{color: 'white'}} onClick={handleOnChange}>
              <SearchIcon />
            </IconButton>
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton 
                size="large" 
                color="inherit"
                component={Link}
                to= "/list/1"
            >
              <ViewListIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}

            >
              <ScheduleIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Menu
          id="basic-menu"
          anchorEl={page}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {props.lastVisitedData.map((item, index)=>{
            return (
              <MenuItem key={index} onClick={()=> window.location=`/single/character/${item.id}`}>{item.charData.name}</MenuItem>
            )})}
        </Menu>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
