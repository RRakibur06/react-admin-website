import { Button, Grid } from "@material-ui/core";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { useState } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";
import { useStyles } from "../styles";

export default function New({inputs, title}) {
    const { darkMode } = useContext(DarkModeContext);
    const classes = useStyles();
    const [file, setFile] = useState("");

    return(
        <div className={darkMode ? classes.darkNew : ""}>
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={10}>
                    <Navbar/>
                    <h2 style={{margin:20, color:"lightGray"}}>{title}</h2>
                    <div style={{display:"flex", height:400, margin:20}}>
                        <div style={{width:"30%", display:"flex", justifyContent:"center"}}>
                            <img src={file
                            ? URL.createObjectURL(file)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="x" style={{height:100, width:100, borderRadius:"50%", border:"1px solid gray", objectFit:"cover"}} />
                        </div>
                        <div style={{width:"70%", display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
                            <div style={{width:"40%"}}>
                                <label htmlFor="file" style={{display:"flex", alignItems:"center", cursor:"pointer", color: "gray"}}>
                                    Image: <AttachFileIcon />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }}
                                onChange={(e) => setFile(e.target.files[0])} />
                            </div>
                            {inputs.map((input)=>(
                                <div style={{width:"40%"}} key={inputs.id}>
                                    <label className={darkMode ? classes.darkLabel : ""}>{input.label}</label>
                                    <input className={darkMode ? classes.darkInput : classes.newInput} type={input.type} placeholder={input.placeholder}></input>
                                </div>
                            ))}
                            <Button style={{width:"160px", height:"40px"}} variant="contained" color="primary">Send</Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}