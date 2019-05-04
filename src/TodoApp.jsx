import React from 'react'

import TaskInput from './components/TaskInput'
import TaskItem from './components/TaskItem'

export default class TodoApp extends React.Component {
  state = {
    tasks: [],
    listCount: 3,
    selectedListIdx: 0,
  }

  handleTaskSubmit = taskValue => {
    const currentTask = this.state.tasks
    const nextTasks = currentTask.concat(
      [
        {
          value: taskValue, checked: false,
          id: Date.now(),
          listIdx: this.state.selectedListIdx,
          checked: false,
        },
      ]
    )
    this.setState({ tasks: nextTasks })
  }

  handleTaskToggleChecked = (taskId, checked) => {
    const {tasks} = this.state

    const checkedTaskIdx = tasks.findIndex(task => task.id === taskId)

    tasks[checkedTaskIdx].checked = checked
    this.setState({tasks})
  }

  handleTaskRemove = taskId => {
    const { tasks } = this.state

    const removedTaskIdx = tasks.findIndex(task => task.id === taskId)
    tasks.splice(removedTaskIdx, 1)

    this.setState({ tasks })
  }

  handleAddList = () => {
    this.setState({ listCount: this.state.listCount + 1 })
  }
  handleRemoveList = () => {
    this.setState({ listCount: this.state.listCount - 1 })
    if(this.state.listCount <= 1){
      alert('Stop !')
      this.setState({ listCount: this.state.listCount = 1 })
    }
  }

  handleSelectList = idx => {
    this.setState({ selectedListIdx: idx })
  }

  render() {
    const tasks = this.state.tasks.filter(task => task.listIdx === this.state.selectedListIdx, ) 
    const checkedTasksCount = tasks.filter(task => task.checked).length
    return (
      <div>
        <h1 style={{ marginBottom: 24 }}>Todo App</h1>

        <ul>
          {new Array(this.state.listCount).fill('').map((val, idx) => {
            const tasks = this.state.tasks.filter(task => task.listIdx === idx, ) 
            const checkedTasksCount = tasks.filter(task => task.checked).length
            return(
            <li key={idx} onClick={() => this.handleSelectList(idx)} style={{
              fontWeight: idx === this.state.selectedListIdx ? 'bold' : 'normal',
              cursor: 'pointer',
            }}>
              List {idx + 1} {checkedTasksCount}/{tasks.length}{' '}
            </li>
          )})
          }
          <div style={{
            position: 'absolute',
            left: '200px',
            top: '70px'
          }}>
            <button onClick={this.handleAddList}>Add list</button>
            <button onClick={this.handleRemoveList}>Remove list</button>
          </div>
        </ul>
        <TaskInput onTaskSubmit={this.handleTaskSubmit} />
        {tasks.length ? (
          <div>
            Checked: {checkedTasksCount}/{tasks.length}{' '}
            {checkedTasksCount === tasks.length ? 'Done!' : null}
          </div>
        ) : (
            'No tasks yet!'
          )}
        <div style={{ marginTop: 24 }}>
          {
            tasks.map((task, idx) => (
              <TaskItem
                task={task}
                key={idx}
                checked={task.checked}
                onToggleChecked={checked => this.handleTaskToggleChecked(task.id, checked)}
                onRemove={() => this.handleTaskRemove(task.id)}
              />
            ))
          }
        </div>
      </div>
    )
  }
}
