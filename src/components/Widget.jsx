import { useStyles } from "../styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

export default function Widget({data}){
    const { darkMode } = useContext(DarkModeContext);
    const classes = useStyles();
    return(
        <div className={darkMode ? classes.darkWidget : classes.widget}>
            <div className={classes.left}>
                <div className={classes.title2}>{data.title}</div>
                <div className={darkMode ? classes.darkCounter : classes.counter}>1000</div>
                <div className={darkMode ? classes.darkLink : classes.link}>{data.link}</div>
            </div>
            <div className={classes.right}>
                <div className={classes.percentage}><KeyboardArrowUpIcon /> 20%</div>
                <div className={classes.icon2}>{data.icon}</div>
            </div>
        </div>
    );
}