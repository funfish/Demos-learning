import React, { Component, PropTypes } from 'react'
//import { connect } from 'react-redux'
//import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import Aside from '../components/Aside'

export default class App extends Component {
  render() {
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
    return (
      <div>
        <Aside />
        {this.props.children}
      </div>
    )
  }
}
/*
App.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}


export default connect(
  mapStateToProps
)(App)
*/