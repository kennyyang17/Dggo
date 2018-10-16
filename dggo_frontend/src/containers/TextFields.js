import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


class TextFields extends React.Component {
  state = {
    party_size: '',
    date: '',
    time: '',
    startDate: moment()
  };

  handleChange = (name, date) => event => {
    this.setState({
      [name]: event.target.value,
      startDate: date
    });
  };

  render() {
    const { classes, handleFormSubmit } = this.props;
    console.log(this.props)
    return (
      <form className={classes.container} onSubmit= {handleFormSubmit} enoValidate autoComplete="off">
        <TextField
          id="standard-party-size"
          label="Party Size"
          className={classes.textField}
          value={this.state.name}
          margin="normal"
        />
         <TextField
          id="standard-party-size"
          label="Date"
          className={classes.textField}
          value={this.state.name}
          margin="normal"
        />
         <TextField
          id="standard-party-size"
          label="Time"
          className={classes.textField}
          value={this.state.name}
          margin="normal"
        />
        {/* <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          includeTimes={[moment().hours(17).minutes(0), moment().hours(18).minutes(30), moment().hours(19).minutes(30)], moment().hours(17).minutes(30)}
          dateFormat="LLL"
        /> */}
    <Button type="submit">Submit</Button>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);