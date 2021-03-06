import React, { Component } from 'react';
import axios from "axios";

import './stylesheets/Feed.css';


class Post extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    console.log('POST RENDERING')
    console.log('POST TO RENDER', this.props.post)
    if(!this.props.post) return '';
    return(
      <div className="post-box">

        <div className="post-header">
          <img className="poster-pic" src={this.props.post.user.profile_image} alt="profile" />
          <div className="post-name-and-time">
            <div className="poster-name">{this.props.post.user.name} </div>
            <div className="post-time">{this.props.post.user.created_at}</div>
          </div>
        </div>
        <div className="post-body">
          <p className="post-text"> {this.props.post.content}</p>
      

        </div>
      </div>
    );

  }
}

export default Post;
