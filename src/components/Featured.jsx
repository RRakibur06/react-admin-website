import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

const useStyles = makeStyles((theme) => ({
    featured:{
        boxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.15)",
        padding: 10,
        borderRadius: 5
    },
    top:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "gray",
    },
    title:{
        fontSize: "16px",
    },
    circle:{
        height: 100,
        width: 100
    },
    bottom:{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
    },
    title2:{
        color: "gray",
    },
    amount:{
        fontSize: "30px",
    },
    desc:{
        fontSize: "12px",
        color: "gray",
        textAlign: "center",
    },
    summary:{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    item:{
        textAlign: "center",
    },
    itemTitle:{
        fontSize: "14px",
        color: "gray",
    },
    itemResult:{
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        fontSize: "14px",
    },
    darkAmount:{
        fontSize: "30px",
        color: "gray"
    },
    darkFeatured:{
        boxShadow: "2px 4px 10px 1px gray",
        padding: 10,
        borderRadius: 5
    },
}));

export default function Featured (){
    const { darkMode } = useContext(DarkModeContext);
    const classes = useStyles();
    return(
        <div className={darkMode ? classes.darkFeatured : classes.featured}>
            <div className={classes.top}>
                <div className={classes.title}>Total Revenue</div>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className={classes.bottom}>
                <div className={classes.circle}>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </div>
                <p className={classes.title2}>Total sales made today</p>
                <p className={darkMode ? classes.darkAmount : classes.amount}>$420</p>
                <p className={classes.desc}>
                    Previous transactions processing. Last payments may not be included.
                </p>
                <div className={classes.summary}>
                <div className={classes.item}>
                    <div className={classes.itemTitle}>Target</div>
                    <div className={classes.itemResult}>
                    <KeyboardArrowDownIcon fontSize="small" style={{color:"red"}}/>
                    <div className={classes.resultAmount} style={{color:"red"}}>$12.4k</div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.itemTitle}>Last Week</div>
                    <div className={classes.itemResult}>
                    <KeyboardArrowUpOutlinedIcon fontSize="small" style={{color:"green"}}/>
                    <div className={classes.resultAmount} style={{color:"green"}}>$12.4k</div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.itemTitle}>Last Month</div>
                    <div className={classes.itemResult}>
                    <KeyboardArrowDownIcon fontSize="small" style={{color:"red"}}/>
                    <div className={classes.resultAmount} style={{color:"red"}}>$12.4k</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}