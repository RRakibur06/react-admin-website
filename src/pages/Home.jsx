import { Box, Grid } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import { useStyles } from "../styles";
import { data } from "../data";
import Featured from "../components/Featured";
import Chart from "../components/Chart";
import List from "../components/List";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

export default function Home() { 
    const { darkMode } = useContext(DarkModeContext);
    const classes = useStyles();
        
    return(
        <div className={darkMode ? classes.darkHome : classes.home}>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={10}>
                    <Navbar />
                    <div style={{margin:20, display:"flex", flexDirection:"row", justifyContent:"space-between", gap:10}}>
                        {data.map((data)=>(
                            <Box flexGrow={1}><Widget data={data}/></Box>
                        ))}
                    </div>
                    <div style={{margin:20, display:"flex", flexDirection:"row", gap:10}}>
                        <div style={{width:"30%"}}>
                            <Featured />
                        </div>
                        <div style={{width:"70%"}}>
                            <Chart aspect={2.15} title={"Last 6 Months (Revenue)"}/>
                        </div>
                    </div>
                    <div style={{margin:20}}>
                        <div className={ darkMode ? classes.dark : classes.table} >
                            <div style={{fontSize: "16px",color: "gray",marginBottom: 15}}>
                                Latest Transactions
                            </div>
                            <List />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}