import React, { Component } from "react";
import axios from "axios";

const SERVER_URL = "https://open-circle-server.herokuapp.com/posts";

class SubmitPosts extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChangeContent = this._handleChangeContent.bind(this);
  }

  componentDidMount() {
    const fetchPosts = () => {
      axios.get(SERVER_URL).then((results) => {

        this.setState({ posts: results.data });
        setTimeout(fetchPosts, 30000);
      });
    };
  }






  _handleSubmit(event){
    event.preventDefault();
    axios
      .post(SERVER_URL, {
        post: {
          content: this.state.content,
          user_id: this.props.user.id
        },
      })

    this.setState({
      content: "",
    });
  }

  _handleChangeContent(event) {
    this.setState({ content: event.target.value });
  }


  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <p>
          <input
            type="text"
            onChange={this._handleChangeContent}
            value={this.state.content}
            placeholder="What's on your mind?"
          />
        </p>

        <input type="submit" value="Posts" onSubmit={this._handleSubmit} />

      </form>
    );
  }
}

export default SubmitPosts;
