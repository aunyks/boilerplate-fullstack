import React, { Component } from 'react'

export default class extends Component {
  static getInitialProps({ req }) {
    if (req) {
      //require('../utils/email')
      console.log('LOGGING FROM SERVER SIDE')
      return { postId: req.query.id }
    }
    /*
      // if this page is linked to via a next/link
      // then this'll work
      console.log('LOGGING FROM CLIENT SIDE')
      return {
        postId: 2 // client side computed
      }
    */
  }

  render() {
    return (
      <div>
        <h1>My blog post #{this.props.postId}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    )
  }
}
