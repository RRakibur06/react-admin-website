import { makeStyles } from '@material-ui/core/styles';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

const useStyles = makeStyles((theme) => ({
    chart:{
        boxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.15)",
        padding: 10,
        borderRadius: 5,
    },
    title:{
        fontSize: "16px",
        color: "gray",
        marginBottom: 5
    },
    chartGrid:{
        stroke: "#e4e1e1"
    },
    darkChart:{
        boxShadow: "2px 4px 10px 1px gray",
        padding: 10,
        borderRadius: 5,
    },
    darkChartGrid:{
        stroke: "rgba(228, 228, 228, 0.219)"
    }
}));

const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];

export default function Chart({aspect, title}){
    const { darkMode } = useContext(DarkModeContext);
    const classes = useStyles();
    
    return(
        <div className={darkMode ? classes.darkChart : classes.chart}>
            <div className={classes.title}>{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
            <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
            <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" className={darkMode ? classes.darkChartGrid : classes.chartGrid} />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="Total"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#total)"
            />
            </AreaChart>
        </ResponsiveContainer>
        </div>
    );
}