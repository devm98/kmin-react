import React, {Component} from 'react'

export default class TaskItem extends Component {
    render(){
        return(
            <div>
                <input type="checkbox" />{this.props.task}
            </div>
            ) 
        }
}