import React from 'react';
import Modal from './Modal'

class LoginButton extends React.Component {

    render() {
      return (
        <div>
             <button onClick={this.props.toggleModal}>Login</button>
        </div>
      );
    }
  }


export default LoginButton;