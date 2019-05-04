import React from 'react'

import TaskInput from './components/TaskInput'
import TaskItem from './components/TaskItem'

export default class TodoApp extends React.Component {
  state = {
    tasks: [],
  }

  handleTaskSubmit = taskValue => {
    const currentTask = this.state.tasks
    const nextTasks = currentTask.concat(
      [
        {
          value: taskValue, checked: false,
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


  render() {
    const checkedTasksCount = this.state.tasks.filter(task => task.checked).length // loc ra task đã check
    return (
      <div>
        <h1 style={{ marginBottom: 24 }}>Todo App</h1>
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
