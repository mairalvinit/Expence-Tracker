import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles'

const CustomSnackbar = ({open ,setOpen}) => {
    const classes = useStyles();

    const handleClose = (event,reason)=>{
            if(reason === 'clickaway') return;
            setOpen(false);
    }

    return (
        <div className={classes.root}>
            <Snackbar
            anchorOrigin = {{vertical : 'bottom' , horizontal : 'left'}}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" elevation={6} variant="filled">
                    Transition successfully created
                </Alert>
            </Snackbar>
        </div>
    )
}

export default CustomSnackbar
