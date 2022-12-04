import { DataGrid } from '@material-ui/data-grid';
import { useState } from 'react';
import { userRows, userColumns } from '../data';
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";
import { useStyles } from "../styles";
import { Link } from 'react-router-dom';

export default function DataTable() {
  const { darkMode } = useContext(DarkModeContext);
  const [data, setData] = useState(userRows);
  const classes = useStyles();
  const path = window.location.pathname;

  const handleDelete = (id) =>{
    setData(data.filter(
      (item)=> item.id !== id
    ))
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`${path}/123`} style={{ textDecoration: "none" }}>
              <span className={darkMode ? classes.darkButton : classes.viewButton}>
                View</span>
            </Link>
            <span className={darkMode ? classes.darkButton : classes.deleteButton}
              onClick={()=>handleDelete(params.row.id)}
            >Delete</span>
          </div>
        );
      },
    },
  ]
  return (
    <div style={{ height: 500, margin: 20,}}>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
        style={{color:"gray"}}
      />
    </div>
  );
}

