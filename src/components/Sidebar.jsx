import { useStyles } from "../styles";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import StoreIcon from "@material-ui/icons/Store";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@material-ui/icons/SettingsSystemDaydreamOutlined";
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

export default function Sidebar() {  
    const { darkMode, dispatch } = useContext(DarkModeContext);
    const classes = useStyles();  
    return(
        <div className={darkMode ? classes.darkSidebar : classes.sidebar}>
        <Link to="/" style={{ textDecoration: "none" }}>
        <div className={darkMode ? classes.darkSidebarTop : classes.sidebarTop}>
            <p>Admin</p>
        </div>
        </Link>
        <hr className={darkMode ? classes.darkHr : classes.hr}/>
        <div className={classes.sidebarMiddle}>
            <ul className={classes.ul}>
            <p className={classes.title}>MAIN</p>
            <Link to="/" style={{ textDecoration: "none" }}>
            <li  className={darkMode ? classes.darkLi : classes.li}>
                <DashboardIcon className={darkMode ? classes.darkIcon : classes.icon} />
                <span className={classes.span}>Dashboard</span>
            </li>
            </Link>
                <p className={classes.title}>LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
            <li  className={darkMode ? classes.darkLi : classes.li}>
                <PersonOutlineIcon className={darkMode ? classes.darkIcon : classes.icon} />
                <span className={classes.span}>Users</span>
            </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
            <li  className={darkMode ? classes.darkLi : classes.li}>
                <StoreIcon className={darkMode ? classes.darkIcon : classes.icon} />
                <span className={classes.span}>Products</span>
            </li>
            </Link>
            <li  className={darkMode ? classes.darkLi : classes.li}>
                <CreditCardIcon className={darkMode ? classes.darkIcon : classes.icon} />
                <span className={classes.span}>Orders</span>
            </li>
            <li  className={darkMode ? classes.darkLi : classes.li}>
                <LocalShippingIcon className={darkMode ? classes.darkIcon : classes.icon} />
                <span className={classes.span}>Delivery</span>
            </li>
                <p className={classes.title}>USEFUL</p>
            <li  className={darkMode ? classes.darkLi : classes.li}>
                <InsertChartIcon className={darkMode ? classes.darkIcon : classes.icon} />
                <span className={classes.span}>Stats</span>
            </li>
            <li  className={darkMode ? classes.darkLi : classes.li}>
                <NotificationsNoneIcon className={darkMode ? classes.darkIcon : classes.icon} />
                <span className={classes.span}>Notifications</span>
            </li>
                <p className={classes.title}>SERVICE</p>
            <li  className={darkMode ? classes.darkLi : classes.li}>
                <SettingsSystemDaydreamOutlinedIcon className={darkMode ? classes.darkIcon : classes.icon} />
                <span className={classes.span}>System Health</span>
            </li>
            <li  className={darkMode ? classes.darkLi : classes.li}>
                <AssessmentIcon className={darkMode ? classes.darkIcon : classes.icon} />
                <span className={classes.span}>Logs</span>
            </li>
            <li  className={darkMode ? classes.darkLi : classes.li}>
                <SettingsApplicationsIcon className={darkMode ? classes.darkIcon : classes.icon} />
                <span className={classes.span}>Settings</span>
            </li>
                <p className={classes.title}>USER</p>
            <li  className={darkMode ? classes.darkLi : classes.li}>
                <AccountCircleOutlinedIcon className={darkMode ? classes.darkIcon : classes.icon} />
                <span className={classes.span}>Profile</span>
            </li>
            <li  className={darkMode ? classes.darkLi : classes.li}>
                <ExitToAppIcon className={darkMode ? classes.darkIcon : classes.icon} />
                <span className={classes.span}>Logout</span>
            </li>
        </ul>
            </div>
            <div className={classes.sidebarBottom}>
                <div className={darkMode ? classes.darkWhite : classes.white} 
                onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className={darkMode ? classes.darkBlack : classes.black}
                onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    );
}