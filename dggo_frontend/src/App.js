import React, { Component } from 'react';
import './App.css';
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
         <ButtonAppBar loggedIn = {this.state.isLoggedIn} 
         handleLoginSubmit={this.handleLoginSubmit} 
         handleChange={this.handleChange} 
         handleLogOut = {this.handleLogOut} />
         
         <TabContainer/>
      </div>
   
      
    );
  }
}

export default App;
