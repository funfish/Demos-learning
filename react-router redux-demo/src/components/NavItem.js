import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

let NavItem = React.createClass({
  getInitialState() {
    return { hovered: false }
  },
  onMouseOverHandler() {
    this.setState({ hovered: true })
  },
  onMouseOutHandler() {
    this.setState({ hovered:false });
  },
  style() {
    if (this.state.hovered) {
      return { backgroundColor: "red" }
    } else {
      return { backgroundColor: "#eee" }
    }
  },
  render() {
    const { item } = this.props
    return (
      <li onMouseOver={this.onMouseOverHandler} onMouseOut={this.onMouseOutHandler} style={this.style()}><Link to={`/${item}`}>{item}</Link></li>
    )
  }
})
export default NavItem