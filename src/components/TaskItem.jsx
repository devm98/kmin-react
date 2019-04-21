import React, { Component } from 'react'

export default class TaskItem extends Component {
    handleToggleCheck = () => {
        const currentChecked = this.props.checked
        this.props.onToggleChecked(!currentChecked)
    }
    
    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.handleToggleCheck}
                />{' '}
                {this.props.task.value}
                <span style={{cursor: 'pointer', float: 'right'}} onClick={this.props.onRemove}>[ remove ]</span>
            </div>
        )
    }
}