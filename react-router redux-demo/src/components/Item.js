import React, { PropTypes, Component } from 'react'

export default class Item extends Component {
  render() {
    const { data } = this.props
    return ({
      <p>{data.title}</p>
      <p>{data.author.loginname}</p>    
    })
  }
}

Item.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
}