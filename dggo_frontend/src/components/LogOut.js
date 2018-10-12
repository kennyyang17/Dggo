import React from 'react';
import Button from '@material-ui/core/Button';

const LogOut = (props) => {
    return (
        <div>
            <Button color="inherit" onClick={props.handleLogOut}>Logout</Button> 
        </div>
    );
};

export default LogOut;