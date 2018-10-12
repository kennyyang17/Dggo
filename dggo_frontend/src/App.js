import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
// import Modal from './components/Modal';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import ButtonAppBar from './components/ButtonAppBar';
import TabContainer from './components/TabContainer';
import SimpleModal from './components/SimpleModal';


class App extends Component {
  state = {
    showModal: false,
    username: '',
    password: '',
    currentUser: {},
    isLoggedIn: false,
    open: false,
    party_size: '',
    date: '',
    time: '',
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleLogOut = () => {
    this.setState({ isLoggedIn: false });
    localStorage.clear()
  };

  componentDidMount() {
    const token = localStorage.token;
    fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          this.setState({
            currentUser: data
          });
        }
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: e.target[0].value,
          password: e.target[1].value     
        })
      })
      .then(resp => resp.json())
      .then(data_with_token => {console.log(data_with_token)
          // if(data_with_token === "Invalid username or password") {
          //   this.setState({
          //     isLoggedIn: false
          //   })
          // }
          if (!!data_with_token.jwt) {
            localStorage.token = data_with_token.jwt;
            this.setState(
              { 
              isLoggedIn: !this.state.isLoggedIn,    
            })
        } else {
          localStorage.token = "undefined"
        }
      })     
  }

  render() {
    console.log(this.state.currentUser);

  
    return (

      <div className="container">
         <ButtonAppBar loggedIn = {this.state.isLoggedIn} toggleModal={this.toggleModal} handleLoginSubmit={this.handleLoginSubmit} handleChange={this.handleChange} handleLogOut = {this.handleLogOut}/>
         <TabContainer/>
      </div>
   
      
    );
  }
}

export default App;
