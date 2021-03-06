import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import { IoNewspaperSharp } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosTrendingUp } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import { Tooltip } from '@material-ui/core'

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#003380',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open, })}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, { [classes.hide]: open, })}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            GitBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" className={clsx(classes.drawer, { [classes.drawerOpen]: open, [classes.drawerClose]: !open, })} classes={{ paper: clsx({ [classes.drawerOpen]: open, [classes.drawerClose]: !open, }), }}>
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List id="sidebar-components">
          <Link to="/dashboard" className="component-link">
            <Tooltip title={<div className="tooltip-title">Dashboard</div>} placement="right" arrow>
              <ListItem button key="Dashboard">
                <ListItemIcon>
                  {window.location.pathname === '/dashboard' || window.location.pathname === '/' ? <HomeIcon style={{ height: '24px', width: '24px' }} /> : <HomeOutlinedIcon style={{ height: '24px', width: '24px' }} />}
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Tooltip>
          </Link>
          <Link to="/weather" className="component-link">
            <Tooltip title={<div className="tooltip-title">Weather</div>} placement="right" arrow>
              <ListItem button key="Weather">
                <ListItemIcon>
                  {window.location.pathname === '/weather' ? <WbSunnyIcon style={{ height: '24px', width: '24px' }} /> : <WbSunnyOutlinedIcon style={{ height: '24px', width: '24px' }} />}
                </ListItemIcon>
                <ListItemText primary="Weather" />
              </ListItem>
            </Tooltip>
          </Link>
          <Link to="/news" className="component-link">
            <Tooltip title={<div className="tooltip-title">News</div>} placement="right" arrow>
              <ListItem button key="News">
                <ListItemIcon>
                  {window.location.pathname.includes('/news') ? <IoNewspaperSharp style={{ height: '24px', width: '24px' }} /> : <IoNewspaperOutline style={{ height: '24px', width: '24px' }} />}
                </ListItemIcon>
                <ListItemText primary="News" />
              </ListItem>
            </Tooltip>
          </Link>
          <Link to="/stocks" className="component-link">
            <Tooltip title={<div className="tooltip-title">Stocks</div>} placement="right" arrow>
              <ListItem button key="Stocks">
                <ListItemIcon>
                  {window.location.pathname === '/stocks' ? <IoMdTrendingUp style={{ height: '24px', width: '24px' }} /> : <IoIosTrendingUp style={{ height: '24px', width: '24px' }} />}
                </ListItemIcon>
                <ListItemText primary="Stocks" />
              </ListItem>
            </Tooltip>
          </Link>
          <Link to="/wellness" className="component-link">
            <Tooltip title={<div className="tooltip-title">Wellness</div>} placement="right" arrow>
              <ListItem button key="Wellness">
                <ListItemIcon>
                  {window.location.pathname === '/wellness' ? <WatchLaterIcon style={{ height: '22px', width: '22px' }} /> : <WatchLaterOutlinedIcon style={{ height: '22px', width: '22px' }} />}
                </ListItemIcon>
                <ListItemText primary="Wellness" />
              </ListItem>
            </Tooltip>
          </Link>
          <Link to="/affirmations" className="component-link">
            <Tooltip title={<div className="tooltip-title">Affirmations</div>} placement="right" arrow>
              <ListItem button key="Affirmations">
                <ListItemIcon>
                  {window.location.pathname === '/affirmations' ? <FavoriteIcon style={{ height: '22px', width: '22px' }} /> : <FavoriteBorderOutlinedIcon style={{ height: '22px', width: '22px' }} />}
                </ListItemIcon>
                <ListItemText primary="Affirmations" />
              </ListItem>
            </Tooltip>
          </Link>
        </List>
      </Drawer>
    </div>
  );
}