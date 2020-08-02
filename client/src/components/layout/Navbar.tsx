import {
 createStyles,
 ListItemIcon,
 makeStyles,
 MenuList,
 Paper,
 Theme
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { logout } from '../../actions/session.actions';
import Logo from '../../assets/images/logo/logo1.svg';
import {
 StyledAboutNavIcon,
 StyledCartNavIcon,
 StyledContactNavIcon,
 StyledLoginNavIcon,
 StyledLogoutNavIcon,
 StyledProductsNavIcon,
 StyledRegisterNavIcon
} from '../global';
import { globalTheme } from '../global/globalTheme.styles';

const mapStateToProps = (state: any) => {
 return {
  loggedIn: Boolean(state.session.userId),
  session: state.session
 };
};

const mapDispatchToProps = (dispatch: any) => ({
 logout: () => dispatch(logout())
});

const appBarColorStyle = {
 background: globalTheme.FOURTH_COLOR
};

const useStyles = makeStyles((theme: Theme) =>
 createStyles({
  grow: {
   flexGrow: 1,
   background: globalTheme.FOURTH_COLOR,
   position: 'fixed',
   top: '0px',
   width: '100%',
   zIndex: 10000,
   marginBottom: '4rem',
   display: 'block'
  },
  menuButton: {
   marginRight: theme.spacing(2)
  },
  title: {
   display: 'none',
   [theme.breakpoints.up('sm')]: {
    display: 'block'
   }
  },
  inputRoot: {
   color: 'inherit'
  },
  inputInput: {
   padding: theme.spacing(1, 1, 1, 7),
   transition: theme.transitions.create('width'),
   width: '100%',
   [theme.breakpoints.up('md')]: {
    width: 200
   }
  },
  sectionDesktop: {
   display: 'none',
   position: 'absolute',
   right: '2rem',
   [theme.breakpoints.up('md')]: {
    display: 'flex'
   }
  },
  sectionMobile: {
   display: 'flex',
   position: 'absolute',
   right: '3rem',
   [theme.breakpoints.up('md')]: {
    display: 'none'
   }
  }
 })
);

interface Props {
 logout: () => void;
 loggedIn?: boolean;
 session?: any;
}

const NavbarComponent: React.FC<Props> = ({ logout, loggedIn, session }) => {
 // * NOTE Fetching unread messages
 const [unreadMessages, setUnreadMessages] = React.useState<any>([]);
 useEffect(() => {
  try {
   const fetchData = () => {
    axios
     .get(`/api/message`, { params: { userId: session.userId } })
     .then((res: AxiosResponse<any>) => {
      const {
       data: { success }
      }: any = res;
      if (success === true) {
       setUnreadMessages(res.data.unreadMessages);
      }
     })
     .catch((err: any) => {});
   };
   fetchData();
  } catch (error) {}
 }, [session.userId]);
 // * NOTE Navbar styles
 const classes = useStyles();
 const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
 const [
  mobileMoreAnchorEl,
  setMobileMoreAnchorEl
 ] = React.useState<null | HTMLElement>(null);
 const [mainAnchorEl, setMainAnchorEl] = React.useState<null | HTMLElement>(
  null
 );

 const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
 const isMainMenuOpen = Boolean(mainAnchorEl);

 const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handleMobileMenuClose = () => {
  setMobileMoreAnchorEl(null);
 };

 const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  setMobileMoreAnchorEl(event.currentTarget);
 };

 const handleMainMenuClose = () => {
  setMainAnchorEl(null);
 };

 const handleMainMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  setMainAnchorEl(event.currentTarget);
 };

 const mobileMenuId = 'primary-search-account-menu-mobile';
 const renderMobileMenu: React.ReactElement | null = loggedIn ? (
  <Paper>
   <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
    style={{ zIndex: 10001 }}
   >
    <NavLink to='/myprofile' style={{ color: 'black', textDecoration: 'none' }}>
     <MenuItem>
      <IconButton
       aria-label='account of current user'
       aria-controls='primary-search-account-menu'
       aria-haspopup='true'
       color='inherit'
      >
       <AccountCircle />
      </IconButton>
      <p>Profile</p>
     </MenuItem>
    </NavLink>
    <NavLink to='/logout' style={{ color: 'black', textDecoration: 'none' }}>
     <MenuItem onClick={logout}>
      <StyledLogoutNavIcon
       dim={'2rem'}
       style={{ padding: 'auto 4rem auto 0' }}
      />
      Logout
     </MenuItem>
    </NavLink>
   </Menu>
  </Paper>
 ) : null;

 const mainMenuId = 'primary-search-account-menu-main';
 const renderMainMenu: React.ReactElement = (
  <Menu
   anchorEl={mainAnchorEl}
   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
   id={mainMenuId}
   keepMounted
   transformOrigin={{ vertical: 'top', horizontal: 'right' }}
   open={isMainMenuOpen}
   onClose={handleMainMenuClose}
   style={{ zIndex: 10001 }}
  >
   <MenuList>
    <NavLink
     to='/products/1'
     style={{ color: 'black', textDecoration: 'none' }}
    >
     <MenuItem>
      <ListItemIcon>
       <StyledProductsNavIcon dim={'1.6rem'} />
      </ListItemIcon>
      <Typography>Product Details</Typography>
     </MenuItem>
    </NavLink>
    <NavLink
     to='/products/1'
     style={{ color: 'black', textDecoration: 'none' }}
    >
     <MenuItem>
      <ListItemIcon>
       <StyledProductsNavIcon dim={'1.6rem'} />
      </ListItemIcon>
      <Typography>Products</Typography>
     </MenuItem>
    </NavLink>
    <NavLink to='/cart' style={{ color: 'black', textDecoration: 'none' }}>
     <MenuItem>
      <ListItemIcon>
       <StyledCartNavIcon dim={'1.6rem'} />
      </ListItemIcon>
      <Typography>Cart</Typography>
     </MenuItem>
    </NavLink>
    <NavLink to='/about' style={{ color: 'black', textDecoration: 'none' }}>
     <MenuItem>
      <ListItemIcon>
       <StyledAboutNavIcon dim={'1.6rem'} />
      </ListItemIcon>
      <Typography>About</Typography>
     </MenuItem>
    </NavLink>
    <NavLink to='/checkout' style={{ color: 'black', textDecoration: 'none' }}>
     <MenuItem>Checkout</MenuItem>
    </NavLink>
    <NavLink to='/myprofile' style={{ color: 'black', textDecoration: 'none' }}>
     <MenuItem>My Profile</MenuItem>
    </NavLink>
    <NavLink to='/contact' style={{ color: 'black', textDecoration: 'none' }}>
     <MenuItem>
      <ListItemIcon>
       <StyledContactNavIcon dim={'1.6rem'} />
      </ListItemIcon>
      <Typography>Contact</Typography>
     </MenuItem>
    </NavLink>
    <NavLink to='/register' style={{ color: 'black', textDecoration: 'none' }}>
     <MenuItem>
      <ListItemIcon>
       <StyledRegisterNavIcon dim={'1.6rem'} />
      </ListItemIcon>
      <Typography>Register</Typography>
     </MenuItem>
    </NavLink>
    <NavLink to='/login' style={{ color: 'black', textDecoration: 'none' }}>
     <MenuItem>
      <ListItemIcon>
       <StyledLoginNavIcon dim={'1.6rem'} />
      </ListItemIcon>
      <Typography>Login</Typography>
     </MenuItem>
    </NavLink>
    <NavLink to='/admin' style={{ color: 'black', textDecoration: 'none' }}>
     <MenuItem>
      <ListItemIcon>
       <StyledLogoutNavIcon dim={'1.6rem'} />
      </ListItemIcon>
      <Typography>Admin panel</Typography>
     </MenuItem>
    </NavLink>
    <NavLink to='/messages' style={{ color: 'black', textDecoration: 'none' }}>
     <MenuItem>
      <ListItemIcon>
       <StyledLogoutNavIcon dim={'1.6rem'} />
      </ListItemIcon>
      <Typography>Messages</Typography>
     </MenuItem>
    </NavLink>
    <NavLink to='/logout' style={{ color: 'black', textDecoration: 'none' }}>
     <MenuItem onClick={logout}>
      <ListItemIcon>
       <StyledLogoutNavIcon dim={'1.6rem'} />
      </ListItemIcon>
      <Typography>Logout</Typography>
     </MenuItem>
    </NavLink>
   </MenuList>
  </Menu>
 );

 return (
  <header className={classes.grow}>
   <nav>
    <AppBar position='static' style={appBarColorStyle}>
     <Toolbar>
      <IconButton
       edge='start'
       className={classes.menuButton}
       color='inherit'
       aria-controls={mainMenuId}
       aria-label='open main menu'
       aria-haspopup='true'
       onClick={handleMainMenuOpen}
      >
       <MenuIcon />
      </IconButton>
      <NavLink to='/' style={{ color: 'white', textDecoration: 'none' }}>
       <Button color='default' style={{ color: 'white' }}>
        <img
         src={Logo}
         alt='logo'
         style={{ width: '3.5rem', height: '3.5rem' }}
        ></img>
        <Typography className={classes.title} variant='h6' noWrap>
         Ecommerce
        </Typography>
       </Button>
      </NavLink>
      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
       <div>
        <NavLink
         to='/logout'
         style={{ color: 'white', textDecoration: 'none' }}
        >
         <Button
          color='default'
          style={{ color: 'white', padding: '0.0625rem' }}
          onClick={logout}
         >
          <div style={{ display: 'inline', padding: '0.16rem' }}>
           <StyledLogoutNavIcon dim={'2.1rem'} />
          </div>
          <div style={{ display: 'inline', padding: '0.66rem' }}>Logout</div>
         </Button>
        </NavLink>
       </div>
       <div>
        <NavLink
         to='/register'
         style={{ color: 'white', textDecoration: 'none' }}
        >
         <Button
          color='default'
          style={{ color: 'white', padding: '0.0625rem' }}
         >
          <div style={{ display: 'inline', padding: '0.16rem' }}>
           <StyledRegisterNavIcon dim={'2.1rem'} />
          </div>
          <div style={{ display: 'inline', padding: '0.66rem' }}>Register</div>
         </Button>
        </NavLink>
       </div>
       <div>
        <NavLink to='/login' style={{ color: 'white', textDecoration: 'none' }}>
         <Button
          color='default'
          style={{ color: 'white', padding: '0.0625rem' }}
         >
          <div style={{ display: 'inline', padding: '0.16rem' }}>
           <StyledLoginNavIcon dim={'2.1rem'} />
          </div>
          <div style={{ display: 'inline', padding: '0.66rem' }}>Login</div>
         </Button>
        </NavLink>
       </div>
       <div>
        <NavLink
         to='/checkout'
         style={{ color: 'white', textDecoration: 'none' }}
        >
         <Button
          color='default'
          style={{ color: 'white', padding: '0.0625rem' }}
         >
          <div style={{ display: 'inline', padding: '0.66rem' }}>Checkout</div>
         </Button>
        </NavLink>
       </div>
       <div>
        <NavLink to='/about' style={{ color: 'white', textDecoration: 'none' }}>
         <Button
          color='default'
          style={{ color: 'white', padding: '0.0625rem' }}
         >
          <div style={{ display: 'inline', padding: '0.16rem' }}>
           <StyledAboutNavIcon dim={'2.1rem'} />
          </div>
          <div style={{ display: 'inline', padding: '0.16rem' }}>About</div>
         </Button>
        </NavLink>
       </div>
       <div>
        <NavLink
         to='/contact'
         style={{
          color: 'white',
          textDecoration: 'none',
          padding: '0.0625rem'
         }}
        >
         <Button
          color='default'
          style={{ color: 'white', padding: '0.0625rem' }}
         >
          <div style={{ display: 'inline', padding: '0.16rem' }}>
           <StyledContactNavIcon dim={'2.2rem'} />
          </div>
          <div style={{ display: 'inline', padding: '0.16rem' }}>Contact</div>
         </Button>
        </NavLink>
       </div>
       <div>
        <NavLink
         to='/products'
         style={{ color: 'white', textDecoration: 'none' }}
        >
         <Button color='default' style={{ color: 'white' }}>
          <div style={{ display: 'inline', padding: '0.16rem' }}>
           <StyledProductsNavIcon dim={'1.6rem'} />
          </div>
          <div style={{ display: 'inline', padding: '0.16rem' }}>Products</div>
         </Button>
        </NavLink>
       </div>
       <div>
        <NavLink
         to='/products/1'
         style={{ color: 'white', textDecoration: 'none' }}
        >
         <Button color='default' style={{ color: 'white' }}>
          <div style={{ display: 'inline', padding: '0.16rem' }}>
           <StyledProductsNavIcon dim={'1.6rem'} />
          </div>
          <div style={{ display: 'inline', padding: '0.16rem' }}>
           Product details
          </div>
         </Button>
        </NavLink>
       </div>
       <div style={{ margin: '0 6rem 0 0' }}>
        <NavLink to='/cart' style={{ color: 'white', textDecoration: 'none' }}>
         <Button color='default' style={{ color: 'white' }}>
          <div style={{ display: 'inline', padding: '0.16rem' }}>
           <StyledCartNavIcon dim={'1.5rem'} />
          </div>
          <div style={{ display: 'inline', padding: '0.16rem' }}>Cart</div>
         </Button>
        </NavLink>
       </div>
       <NavLink
        to='/messages'
        style={{ color: 'white', textDecoration: 'none' }}
       >
        <IconButton aria-label='show 4 new mails' color='inherit'>
         <Badge badgeContent={unreadMessages.length} color='secondary'>
          <MailIcon />
         </Badge>
        </IconButton>
       </NavLink>
       <NavLink
        to='/myprofile'
        style={{ color: 'white', textDecoration: 'none' }}
       >
        <IconButton
         edge='end'
         aria-label='account of current user'
         aria-haspopup='true'
         onClick={handleProfileMenuOpen}
         color='inherit'
        >
         <AccountCircle />
        </IconButton>
       </NavLink>
      </div>
      {loggedIn ? (
       <div className={classes.sectionMobile}>
        <NavLink
         to='/messages'
         style={{ color: 'black', textDecoration: 'none' }}
        >
         <MenuItem>
          <IconButton aria-label='show 4 new mails' color='inherit'>
           <Badge badgeContent={unreadMessages.length} color='secondary'>
            <MailIcon />
           </Badge>
          </IconButton>
         </MenuItem>
        </NavLink>
        <IconButton
         aria-label='show more'
         aria-controls={mobileMenuId}
         aria-haspopup='true'
         onClick={handleMobileMenuOpen}
         color='inherit'
        >
         <MoreIcon />
        </IconButton>
       </div>
      ) : null}
     </Toolbar>
    </AppBar>
    {renderMobileMenu}
    {renderMainMenu}
   </nav>
  </header>
 );
};

export const Navbar = withRouter(
 connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)
);
