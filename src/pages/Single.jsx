import { Grid } from "@material-ui/core";
import Chart from "../components/Chart";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import List from "../components/List";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";
import { useStyles } from "../styles";

export default function Single() {
    const { darkMode } = useContext(DarkModeContext);
    const classes = useStyles();
    return(
        <div  className={darkMode ? classes.darkSingle : ""}>
            <Grid container>
                <Grid item xs={2}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={10}>
                    <Navbar/>
                    <div style={{margin:20, display:"flex", flexDirection:"row", gap:20}}>
                        <div className={darkMode ? classes.darkInfo : classes.info}>
                            <p style={{position:"absolute",top:0,right:0,padding: "5px",fontSize: "12px",color: "#7451f8",backgroundColor: "#7551f818",cursor: "pointer",borderRadius: "0px 0px 0px 5px",}}>
                                Edit</p>
                            <h1 style={{fontSize: "16px",color: "lightgray", marginBottom: "20px",margin: 20}}>Information</h1>
                            <div style={{display:"flex", height:"80%", gap:12}}>
                                <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" 
                                style={{width: "100px",height: "100px",borderRadius: "50%",objectFit: "cover",marginLeft: 20}}/>
                                <ul style={{listStyle:"none", color:"#555"}}>
                                    <li style={{marginBottom:"10px", fontSize:"26px", fontWeight:800}}>Jane Doe</li>
                                    <li style={{marginBottom:"10px", fontSize:"14px"}}><b>Email:</b> janedoe@gmail.com</li>
                                    <li style={{marginBottom:"10px", fontSize:"14px"}}><b>Phone:</b> +1 2345 67 89</li>
                                    <li style={{marginBottom:"10px", fontSize:"14px"}}><b>Address:</b>  Elton St. 234 Garden Yd. NewYork</li>
                                    <li style={{marginBottom:"10px", fontSize:"14px"}}><b>Country:</b> USA</li>
                                </ul>
                            </div>
                        </div>
                        <div  style={{width:"70%"}}>
                            <Chart aspect={3/1} title={"Last 6 Months (Spending)"}/>
                        </div>
                    </div>
                    <div className={darkMode ? classes.darkInfoTable : classes.infoTable}>
                        <div style={{fontSize: "16px",color: "gray",marginBottom: 15}}>
                            Last Transactions
                        </div>
                        <List />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

