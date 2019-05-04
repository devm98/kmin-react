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
        },
      ]
    )
    this.setState({ tasks: nextTasks })
  }
  handleTaskToggleChecked = (taksIdx, checked) => {
    const currentTask = this.state.tasks

    currentTask[taksIdx].checked = checked

    this.setState({ tasks: currentTask })
  }
  handleTaskRemove = taskIdx => {
    const currentTasks = this.state.tasks

    currentTasks.splice(taskIdx, 1)

    this.setState({ tasks: currentTasks })
  }
  handleAddList = () => {
    this.setState({ listCount: this.state.listCount + 1 })
  }
  handleSelectList = idx => {
    this.setState({ selectedListIdx: idx })
  }

  render() {
    const checkedTasksCount = this.state.tasks.filter(task => task.checked).length // loc ra task đã check
    return (
      <div>
        <h1 style={{ marginBottom: 24 }}>Todo App</h1>

        <ul>
          {new Array(this.state.listCount).fill('').map((val, idx) => (
            <li key={idx} onClick={() => this.handleSelectList(idx)} style={{
              fontWeight:
                idx === this.state.selectedListIdx ? 'bold' : 'normal',
              cursor: 'pointer',
            }}>
              List {idx + 1}
            </li>
          ))
          }
          <button onClick={this.handleAddList}>Add list</button>
        </ul>
        <TaskInput onTaskSubmit={this.handleTaskSubmit} />
        {this.state.tasks.length ? (
          <div>
            Checked: {checkedTasksCount}/{this.state.tasks.length}{' '}
            {checkedTasksCount === this.state.tasks.length ? 'Done!' : null}
          </div>
        ) : (
            'No tasks yet!'
          )}
        <div style={{ marginTop: 24 }}>
          {
            this.state.tasks.map((task, idx) => (
              <TaskItem
                task={task}
                key={idx}
                checked={task.checked}
                onToggleChecked={checked => this.handleTaskToggleChecked(idx, checked)}
                onRemove={() => this.handleTaskRemove(idx)}
              />
            ))
          }
        </div>
      </div>
    )
  }
}
