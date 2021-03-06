import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import circlelogo from '../images/ciircle.gif';


import '../stylesheets/CircleNav.css';

class CircleNav extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log("mycircles in circlenav state",this.props.circles)
    return (
      <div className='circle-nav'>
        {this.props.circles.map((circle)=>(
          <Link to={`/feed/${circle.id}`}>
            <img onClick={()=>this.props.circleClick(circle.id)} className="circle-pic" src={circle.image} alt="profile" />
          </Link>
        ))}
      </div>

    );
  }
}

export default CircleNav
