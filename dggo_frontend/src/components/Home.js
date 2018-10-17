import React from 'react';


const Home = (props) => {
  console.log(props)
  return (
    <div className="jumbotron">
      <h1> Home Page </h1>
      <h1> WELCOME {props.currentUser.user_name} </h1>
    </div>
  );
}

export default Home;
