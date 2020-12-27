import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@material-ui/core'

const drawerWidth = 240;

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
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Gitboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/dashboard" className="component-link">
            <Tooltip title={<div style={{ fontSize: "15px", fontWeight: "400" }}>Dashboard</div>} placement="right" arrow>
              <ListItem button key="Dashboard">
                <ListItemIcon>
                  <HomeSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Tooltip>
          </Link>
          <Link to="/weather" className="component-link">
            <Tooltip title={<div style={{ fontSize: "15px", fontWeight: "400" }}>Weather</div>} placement="right" arrow>
              <ListItem button key="Weather">
                <ListItemIcon>
                  <WbSunnyIcon />
                </ListItemIcon>
                <ListItemText primary="Weather" />
              </ListItem>
            </Tooltip>
          </Link>
          <Link to="/news" className="component-link">
            <Tooltip title={<div style={{ fontSize: "15px", fontWeight: "400" }}>News</div>} placement="right" arrow>
              <ListItem button key="News">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faNewspaper} style={{ height: '24px', width: '24px' }} />
                </ListItemIcon>
                <ListItemText primary="News" />
              </ListItem>
            </Tooltip>
          </Link>
          <Link to="/stocks" className="component-link">
            <Tooltip title={<div style={{ fontSize: "15px", fontWeight: "400" }}>Stocks</div>} placement="right" arrow>
              <ListItem button key="Stocks">
                <ListItemIcon>
                <FontAwesomeIcon icon={faChartLine} style={{ height: '24px', width: '24px' }} />
                </ListItemIcon>
                <ListItemText primary="Stocks" />
              </ListItem>
            </Tooltip>
          </Link>
          <Link to="/wellness" className="component-link">
            <Tooltip title={<div style={{ fontSize: "15px", fontWeight: "400" }}>Wellness</div>} placement="right" arrow>
              <ListItem button key="Wellness">
                <ListItemIcon>
                  <DonutLargeIcon />
                </ListItemIcon>
                <ListItemText primary="Wellness" />
              </ListItem>
            </Tooltip>
          </Link>
          <Link to="/affirmations" className="component-link">
            <Tooltip title={<div style={{ fontSize: "15px", fontWeight: "400" }}>Wellness</div>} placement="right" arrow>
              <ListItem button key="Affirmations">
                <ListItemIcon>
                  <FavoriteIcon />
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