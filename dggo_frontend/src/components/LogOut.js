import React from 'react';
import Button from '@material-ui/core/Button';
import Home from './Home'
import TabContainer from './TabContainer'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const LogOut = (props) => {
    return (
        <div>
            <Button color="inherit" onClick={props.handleLogOut}>Logout</Button> 
        </div>
    );
};

export default LogOut;