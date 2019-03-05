import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <br />

          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>

          <br />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
