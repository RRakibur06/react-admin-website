import React, { useContext } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import FullscreenExitOutlinedIcon from "@material-ui/icons/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import image from "../aron-smith.jpg";
import { Avatar } from '@material-ui/core';
import { DarkModeContext } from "../context/darkModeContext";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: alpha('#c0e2fa', 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    bottom: 5,
    border: "0.5px solid lightgray"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#236bde'
  },
  inputRoot: {
    color: '#236bde',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  icons: {
    color: '#236bde',
  },
  eng:{
    color: '#236bde', 
    fontSize:"15px"
  },
  appBar:{
    backgroundColor:"white"
  },
  darkNavbar:{
    backgroundColor:"#111",
    height:"50px"
  },
  darkSearchIcon : {
      color : "gray",
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  darkEng : {
      color : "gray",
      fontSize:"15px"
  },
  darkIcons : {
      color : "gray"
  },
  darkInputRoot : {
    color : "gray"
  }
}));

export default function Navbar() {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar className={darkMode ? classes.darkNavbar : classes.appBar} position="static" style={{height:"50px"}} elevation={0}>
        <Toolbar>
          <div className={classes.search}>
            <div className={darkMode ? classes.darkSearchIcon : classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: darkMode ? classes.darkInputRoot : classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              className={darkMode ? classes.darkIcons : classes.icons}
            >
              <LanguageOutlinedIcon />
            <p className={darkMode ? classes.darkEng : classes.eng}>ENG</p>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              className={darkMode ? classes.darkIcons : classes.icons}
              onClick={() => dispatch({ type: "TOGGLE" })}
            >
              {darkMode ? <WbSunnyIcon /> : <NightsStayOutlinedIcon />}
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              className={darkMode ? classes.darkIcons : classes.icons}
            >
              <FullscreenExitOutlinedIcon />
            </IconButton>
          <IconButton aria-label="show 17 new notifications" className={darkMode ? classes.darkIcons : classes.icons}>
              <Badge badgeContent={17} color="secondary">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 4 new mails" className={darkMode ? classes.darkIcons : classes.icons}>
              <Badge badgeContent={4} color="secondary">
                <ChatBubbleOutlineOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              className={darkMode ? classes.darkIcons : classes.icons}
            >
              <ListOutlinedIcon />
            </IconButton> 
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              className={darkMode ? classes.darkIcons : classes.icons}
            >
              <Avatar alt="Remy Sharp" src={image} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

