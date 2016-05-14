import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import selectSubreddit from '../actions'

export default class Aside extends Component {
  
  render() {
    const lists = ['good']
    return (
      <ul className="aside">
        {lists.map((i) =>
          <li><Link to="/good" selected='good'>{i}</Link></li>
        )}
      </ul>
    )
  }
}