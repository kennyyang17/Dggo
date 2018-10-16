import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import TabContainer from './components/TabContainer';
import SimpleModal from './components/SimpleModal';
import SimpleTabs from './components/TabContainer';
import Home from './components/Home'


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
    isSignedUp: false,
    user: {}
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleLogOut = () => {
    this.setState({ isLoggedIn: false,
    isSignedUp: false });
    // debugger
    localStorage.clear();
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
            user: data
          });
        }
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignUpSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            user_name: e.target[0].value,
            password: e.target[1].value     
          }
        })
      })
      .then(resp => resp.json())
      .then(data_with_token => {console.log(data_with_token)
    
        if (!!data_with_token.jwt) {
          localStorage.token = data_with_token.jwt;
          this.setState(
            { 
            currentUser: data_with_token.user,
            isSignedUp: !this.state.isSignedUp   
          })
      } else {
        localStorage.token = "undefined"
      }
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

          if (!!data_with_token.jwt) {
            localStorage.token = data_with_token.jwt;
            this.setState(
              { 
              currentUser: data_with_token.user,
              isLoggedIn: !this.state.isLoggedIn  
            })
        } else {
          localStorage.token = "undefined"
        }
      })     
  }

  // handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('clicked')
  //     fetch('http://localhost:3000/reservations', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         party_size: e.target[0].value,
  //         date: e.target[1].value,
  //         time: e.target[2].value
  //       })
  //     })
  //     .then(resp => resp.json())
  //     .then(data => { 
  //       console.log(data)
  //       if (!data.error) {
  //         this.setState({
  //           currentUser: data
  //         });
  //       }      
  //     })
  // }

  render() {
    console.log(this.state.user);
    console.log(this.state.currentUser);
  
    return (

      <div className="container">
         <ButtonAppBar 
            loggedIn = {this.state.isLoggedIn} 
            handleLoginSubmit={this.handleLoginSubmit} 
            handleChange={this.handleChange} 
            handleLogOut = {this.handleLogOut}  
            signedUp = {this.state.isSignedUp}
            handleSignUpSubmit={this.handleSignUpSubmit}
         />
         <TabContainer
            handleFormSubmit = {this.handleFormSubmit}
            currentUser = {this.state.currentUser}
         />
     
      
      </div>

     
      
    );
  }
}

export default App;
