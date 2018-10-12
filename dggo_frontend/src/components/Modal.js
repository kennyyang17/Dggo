import React, { Component } from 'react';
import BackDrop from './BackDrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.showModal !== this.props.showModal;
  }

  render() {
    return (
      <React.Fragment>
        <BackDrop showModal={this.props.showModal} toggleModal={this.props.toggleModal} />
        <div
          className="Modal"
          style={{
            transform: this.props.showModal
              ? 'translateY(0)'
              : 'translateY(-1000vh)',
            opacity: this.props.showModal ? '1' : '0'
          }}
        >
          {this.props.children}
          
          <form onSubmit={this.props.handleLoginSubmit}>
                <h1>Login Page</h1>
                <label for="uname"><b></b></label><br></br>
                <input type="text" placeholder="Enter Username" name="uname" required> 
                </input>

                <label for="psw"><b></b></label><br></br>
                <input type="password" placeholder="Enter Password" name="psw" required>
                </input>

                <br></br><button type="submit">Login</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;