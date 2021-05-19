import React, { Component } from 'react';
import axios from "axios";
import '../stylesheets/CircleNav.css';

// const SERVER_URL = "https://open-circle-server.herokuapp.com";
const SERVER_URL = "localhost:3001";

class CircleNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: [],
    };
  }

  componentDidMount() {
    const fetchCircles = () => {
      // console.log(this.props.user.id)
      axios.get(SERVER_URL).then((results) => {
        // console.log("results", results);
        this.setState({ circles: results.data });
        setTimeout(fetchCircles, 4000);
      });
    };
  // fetchCircles();
  }

  render () {
    // console.log("mycircles",this.state.circles)
    return (
      <div>
        <h1>Circle Nav Here</h1>
      </div>

    );
  }
}

export default CircleNav
