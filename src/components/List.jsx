import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {rows} from "../data";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  img:{
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    marginRight: "10px",
    objectFit: "cover",
  },
  darkTable: {
    minWidth: 650,
    backgroundColor: "#111",
  },
  darkTableCell: {
    color: "gray"
  }
});

export default function List() {
  const { darkMode } = useContext(DarkModeContext);
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={darkMode ? classes.darkTable : classes.table} aria-label="simple table">
        <TableHead>
           <TableRow>
            <TableCell className={darkMode ? classes.darkTableCell : ""}>Tracking ID</TableCell>
            <TableCell className={darkMode ? classes.darkTableCell : ""}>Product</TableCell>
            <TableCell className={darkMode ? classes.darkTableCell : ""}>Customer</TableCell>
            <TableCell className={darkMode ? classes.darkTableCell : ""}>Date</TableCell>
            <TableCell className={darkMode ? classes.darkTableCell : ""}>Amount</TableCell>
            <TableCell className={darkMode ? classes.darkTableCell : ""}>Payment Method</TableCell>
            <TableCell className={darkMode ? classes.darkTableCell : ""}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={darkMode ? classes.darkTableCell : ""}>{row.id}</TableCell>
              <TableCell className={darkMode ? classes.darkTableCell : ""}>
                <div style={{display:"flex", alignItems:"center"}}>
                  <img src={row.img} alt="" className={classes.img}/>
                  {row.product}
                </div>
              </TableCell>
              <TableCell className={darkMode ? classes.darkTableCell : ""}>{row.customer}</TableCell>
              <TableCell className={darkMode ? classes.darkTableCell : ""}>{row.date}</TableCell>
              <TableCell className={darkMode ? classes.darkTableCell : ""}>{row.amount}</TableCell>
              <TableCell className={darkMode ? classes.darkTableCell : ""}>{row.method}</TableCell>
              <TableCell className={darkMode ? classes.darkTableCell : ""}>
              {   row.status==="Approved" ?
                  <span style={{color:"green",padding: "5px",borderRadius: "5px", backgroundColor:"rgba(0, 128, 0, 0.151)"}}>
                    {row.status}</span> :
                  <span style={{color:"goldenrod",padding: "5px",borderRadius: "5px", backgroundColor:"rgba(189, 189, 3, 0.103)"}}>
                    {row.status}</span> }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}