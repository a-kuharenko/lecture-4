import React from 'react'
import MyDiv from './MyDiv'

class App extends React.Component {
  state = {
    todos: ['qweqwe', '123123123', 'qeiuqdhiud'],
    inputValue: ''
  }

  handleButtonClick = () => {
    this.setState(prev => ({
      todos: [...prev.todos, prev.inputValue],
      inputValue: ''
    }))
  }

  render() {

    return (
      <div>
        <input
          onChange={({ target }) =>
            this.setState({ inputValue: target.value })
          }
          value={this.state.inputValue}
        />
        <button
          onClick={this.handleButtonClick}
        >Add to-do</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li
              key={index}
            >{todo}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
