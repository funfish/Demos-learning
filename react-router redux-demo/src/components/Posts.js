import React, { PropTypes, Component } from 'react'

export default class Posts extends Component {
  render() {
    return (
      <ul className="clearfix">
        {this.props.posts.map((post, i) =>
          <li key={i}>
            <div className="rightItem">
              <h3>{post.title}</h3>
              <p>
                <span>作者: { post.author.loginname }</span>
              </p>
              <p>
                <span>最后回复时间: { post.last_reply_at.replace('T',' ').split('.')[0] }</span>
                <b>回复/访问: { post.reply_count }/{ post.visit_count }</b>
              </p>            
            </div>
            <img  src={`${post.author.avatar_url||"../src/css/house.png"}`}/>
          </li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
}