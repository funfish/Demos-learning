import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import Posts from './Posts'

export default class MainSection extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { dispatch, posts, isFetching } = this.props
    console.log(this.props.params.tab);
    dispatch(selectSubreddit(this.props.params.tab))
    console.log(this.props.selectedSubreddit)
    dispatch(fetchPostsIfNeeded(this.props.params.tab))

    return (
      <div className="mainSection">
        {isFetching && posts.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && posts.length === 0 &&
          <h2>Empty.</h2>
        }
        {posts.length > 0 &&
          <div className="clearfix">
            <Posts posts={posts} />
          </div>
        }
      </div>
    )
  }
}
MainSection.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
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
    posts,
    isFetching,
  }
}


export default connect(
  mapStateToProps
)(MainSection)
