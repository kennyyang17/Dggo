import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

  render() {
    console.log(this.props)
    const { classes } = this.props;

    return (
      <div>
        <Typography gutterBottom></Typography>
        <Button color = "inherit" onClick={this.handleOpen}>Login</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}>
          
          <div style={getModalStyle()} className={classes.paper}>

            <form onSubmit={this.props.handleLoginSubmit} >
                <h1>Login Page</h1>
                <label for="uname"><b></b></label><br></br>
                <input type="text" placeholder="Enter Username" name="uname" required> 
                </input>

                <label for="psw"><b></b></label><br></br>
                <input type="password" placeholder="Enter Password" name="psw" required>
                </input>

                <br></br><Button variant="contained" color="secondary" className={classes.button} type="submit">Login</Button> 
              
          </form>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;