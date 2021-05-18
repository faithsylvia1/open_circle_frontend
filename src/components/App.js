import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';

import './stylesheets/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('https://open-circle-server.herokuapp.com/logged_in',
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in && !this.state.isLoggedIn) {
        this.handleLogin(response)
      } else if (!response.data.logged_in && this.state.loggedInStatus){
        this.handleLogout()
      }
      console.log('logged in?', response);
    })
    .catch(error => console.log('api errors:', error))
  }

  //for logout button
  _handleClick = () => {
    axios.delete('https://open-circle-server.herokuapp.com/logout', {withCredentials: true}).then(response => {
    this.handleLogout();
    this.props.history.push('/')
   }).catch(error => console.log(error))
  }

  handleLogin = (data) => {
    console.log(data);
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
    console.log("loggedin status at logout", this.isLoggedIn)
  }

  render() {
    return (
      <Nav
          handleClick = { this._handleClick }
          handleLogin = { this.handleLogin }
          isLoggedIn = {this.state.isLoggedIn}
      />
    );
  }
}
export default App;
