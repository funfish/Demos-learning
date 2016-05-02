import React, { PropTypes, Component } from 'react'

class Header extends Component {
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      let text = e.target.value;
      if (text.length !== 0) {
        if (text.match(/\w+/g)[0] !== '') {
          this.props.addTodo(text);
          e.target.value = '';
        }
      }
    }
  }

  render() {
    return (
      <header className="heads">
          <h1>Todos</h1>
          <input className="newInput"
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
