import React, { PropTypes, Component } from 'react';

class MainSection extends Component {
  render () {
    const { todos, actions } = this.props
    return (
      <ul>
        {todos.map(todo =>
          <li>
            <lable>
              {todo.text}
            </lable>
          </li>
        )}
      </ul>
    )
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection