import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Button, Grid } from "@material-ui/core";
import Datatable from "../components/Datatable";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";
import { useStyles } from "../styles";
import { Link } from "react-router-dom";

export default function List() {
    const { darkMode } = useContext(DarkModeContext);
    const classes = useStyles();
    const path = window.location.pathname;

    return(
        <div className={darkMode ? classes.darkList : ""}>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={10}>
                    <Navbar />
                    <Link to={`${path}/new`}>
                        <Button variant="contained" color="default" style={{marginLeft: "89%", marginTop: 12}}>Add New</Button>
                    </Link>
                    <Datatable />
                </Grid>
            </Grid>
        </div>
    );
}