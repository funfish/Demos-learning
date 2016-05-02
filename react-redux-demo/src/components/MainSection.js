import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

class MainSection extends Component {
  render () {
    const { todos, actions } = this.props
    return (
      <ul>
        {todos.map(todo =>
          <li className={classnames({
          completed: todo.completed
        })}>
            <input type="checkbox" className="checkbox" onChange={() => actions.completeItem(todo.id)} />
            <lable>
              {todo.text}
            </lable>
            <button className="delete" onClick={() => actions.deleteItem(todo.id)}/>
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