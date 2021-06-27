import React from "react";
import {Card, CardContent, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";

const useStyles = makeStyles({
    root: {
        width: "50%",
        backgroundColor: "#16C79A",
        margin: "10px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3px"
    },
    title: {
        fontSize: 30
    }
});


function Header(){
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    Stack Overflow Questions
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Header;