import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../../stylesheets/Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: ''
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const {email, password} = this.state
    let user = {
        email: email,
        password: password
      }

    axios.post('https://open-circle-server.herokuapp.com/login', {user}, {withCredentials: true}).then(response => {
      if (response.data.logged_in) {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    }).catch(error => console.log('api errors:', error));
  };

  redirect = () => {
    this.props.history.push('/feed')
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map((error) => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    );
  }

  render () {
    const {email, password} = this.state
    return (
      <div>
        <h1 className="home_header"> Welcome to the Login page!</h1>
        <form onSubmit={this.handleSubmit}>
         <input
           placeholder="email"
           type="text"
           name="email"
           value={email}
           onChange={this.handleChange}
         />
         <input
           placeholder="password"
           type="password"
           name="password"
           value={password}
           onChange={this.handleChange}
         />
        <button placeholder="submit" type="submit">
           Log In
         </button>
         <div>
           or <Link to='/signup'>Not a member? Sign up!</Link>
         </div>

        </form>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}

export default Login