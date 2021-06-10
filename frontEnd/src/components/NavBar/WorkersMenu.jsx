import React from "react";
import { makeStyles } from '@material-ui/core';
import Box from "./Box";
import WorkersList from "../../pages/WorkersList";
import Navbar from "./NavBar";

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))

const WorkersMenu = () => {
    const classes = useStyle()
    const [abrir, setAbrir] = React.useState(false)
    const accionAbrir = () => {
        setAbrir(!abrir)
    }

  return (
    <div className={classes.root}>
        <Navbar  accionAbrir={accionAbrir}/>

        <Box variant='temporary'
                    open ={abrir}
                    onClose={accionAbrir} /> 

        <div className={classes.content}>
            <div className={classes.toolbar}></div>
            <WorkersList />
        </div>   
    </div>
  );
};

export default WorkersMenu;