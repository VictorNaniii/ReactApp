import React from 'react'
import TodoItem from 'components/TodoItem'
function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <TodoItem id="12" completed={true} title="First To do" />
    </div>
  )
}

export default App
