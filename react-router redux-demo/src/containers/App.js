import React, { Component, PropTypes } from 'react'
//import { connect } from 'react-redux'
//import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import Aside from '../components/Aside'

export default class App extends Component {
  render() {
    return (
      <div className="clearfix">
        <Aside />
        {this.props.children}
      </div>
    )
  }
}
