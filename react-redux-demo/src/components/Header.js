import React, { PropTypes, Component } from 'react'

class Header extends Component {
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      let text = e.target.value;
      if (text.length !== 0) {
        this.props.addTodo(text);
        e.target.value = '';
      }
    }
  }

  render() {
    return (
      <header className="header">
          <h1>todos</h1>
          <input
              onKeyUp={this.handleKeyUp.bind(this)}
              placeholder="What needs to be done?" />
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
