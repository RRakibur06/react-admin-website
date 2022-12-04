import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles (theme => ({
    sidebar:{
        borderRight: "0.5px solid rgb(230, 227, 227)",
        minHeight: "100%",
        backgroundColor: "white",
    },
    sidebarTop:{
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "25px",
        color: "#236bde"
    },
    ul:{
        listStyle: "none",
        margin : 0,
        padding: 0
    },
    title:{
        fontSize: "10px",
        color: "#999",
        marginTop: "15px",
        marginBottom: "5px"
    },
    hr:{
        height: 0,
        border: "0.5px solid rgb(230, 227, 227)"
    },
    sidebarMiddle:{
        paddingLeft: "10px",
    },
    li:{
        display: "flex",
        alignItems: "center",
        padding: "5px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#d4e8fa",
        }
    },
    icon :{
        fontSize: "18px",
        color: "#236bde",
    },
    span:{
        fontSize: "13px",
        color: "#888",
        marginLeft: "10px",
    },
    sidebarBottom:{
        display: "flex",
        alignItems: "center",
        margin: "10px"
    },
    white:{
        width: "20px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid #236bde",
        cursor: "pointer",
        margin: "5px",
        backgroundColor: "white"
    },
    black:{
        width: "20px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid #236bde",
        cursor: "pointer",
        margin: "5px",
        backgroundColor: "black"
    },
    widget:{
        display: "flex",
        justifyContent: "space-between",
        height: 100,
        padding: "10px",
        boxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.15)",
        borderRadius: "10px",
    },
    left:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    right:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
     },
    title2:{
        fontSize: "14px",
        color: "#a0a0a0"
      },
    counter: {
        fontSize: "28px",
      },
    link: {
        width: "max-content",
        fontSize: "12px",
        borderBottom: "1px solid gray",
      },
    percentage: {
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        color: "green",
      },
    icon2: {
        alignSelf: "flex-end",
    },
    darkHome: {
        backgroundColor: "#111"
    },
    darkWidget: {
        display: "flex",
        justifyContent: "space-between",
        height: 100,
        padding: "10px",
        boxShadow: "2px 4px 10px 1px gray",
        borderRadius: "10px",
    },
    darkCounter: {
        color: "#a0a0a0",
        fontSize: "28px",
    },
    darkLink: {
        color: "#a0a0a0",
        width: "max-content",
        fontSize: "12px",
        borderBottom: "1px solid gray",
    },
    dark: {
        padding: 20, 
        boxShadow: "2px 4px 10px 1px gray"
    },
    table: {
        padding: 20, 
        boxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.15)"
    },
    darkSidebar: {
        backgroundColor: "#111",
    },
    darkHr:{
        height: 0,
        border: "0.5px solid gray"
    },
    darkLi:{
        display: "flex",
        alignItems: "center",
        padding: "5px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#E0E0E0",
        },
        color: "gray"
    },
    darkIcon :{
        fontSize: "18px",
        color: "gray",
    },
    darkSidebarTop:{
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "25px",
        color: "gray"
    },
    darkWhite:{
        width: "20px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid gray",
        cursor: "pointer",
        margin: "5px",
        backgroundColor: "white"
    },
    darkBlack:{
        width: "20px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid gray",
        cursor: "pointer",
        margin: "5px",
        backgroundColor: "black"
    },
    darkList: {
        backgroundColor: "#111",
        height : "100vh"
    },
    darkDataGrid: {
        color: "gray",
        //fontSize: "20px"
    },
    darkButton: {
        padding:"5px", 
        borderRadius: "5px", 
        color: "gray",
        border: "1px dotted gray",
        cursor: "pointer",
        marginRight:10
    },
    viewButton: {
        padding:"5px", 
        borderRadius: "5px", 
        color: "darkblue",
        border: "1px dotted rgba(0, 0, 139, 0.596)",
        cursor: "pointer",
        marginRight:10
    },
    deleteButton: {
        padding:"5px", 
        borderRadius: "5px", 
        color: "crimson",
        border: "1px dotted rgba(220, 20, 60, 0.6)",
        cursor: "pointer",
    },
    darkNew : {
        backgroundColor: "#111",
        height : "100vh"
    },
    newInput: {
        width:"100%", 
        border:"none", 
        borderBottom:"1px solid gray"
    },
    darkInput: {
        width:"100%", 
        border:"none", 
        borderBottom:"1px solid gray",
        backgroundColor: "transparent",
        color: "gray"
    },
    darkLabel: {
        color: "gray"
    },
    darkSingle: {
        backgroundColor: "#111"
    },
    info: {
        position:"relative",
        width:"30%", 
        height:"290px", 
        borderRadius:"5px", 
        boxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.15)"
    },
    darkInfo: {
        position:"relative",
        width:"30%",
        height:"290px", 
        borderRadius:"5px", 
        boxShadow: "2px 4px 10px 1px gray"
    },
    infoTable: {
        margin:20, 
        padding: 20, 
        boxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.15)", 
        borderRadius:"5px"
    },
    darkInfoTable: {
        margin:20, 
        padding: 20, 
        boxShadow: "2px 4px 10px 1px gray", 
        borderRadius:"5px"
    },
}));

export {useStyles};