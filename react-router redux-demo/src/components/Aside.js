import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import NavItem from './NavItem'

export default class Aside extends Component {
  
  render() {
    const lists = ['good', 'share', 'ask', 'job']
    return (
      <ul className="aside">
        {lists.map((item,i) =>
          <NavItem key={i} item={item} />
        )}
      </ul> 
    )
  }
}