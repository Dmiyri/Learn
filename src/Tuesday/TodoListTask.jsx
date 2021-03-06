import React from 'react';
import './ToDoList.css';

class TodoListTask extends React.Component {


    state = {
        editMode: false,
    }

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };
    activateEditMode = () => {
        this.setState({editMode: true})
    };
    deactivateEditMode = () => {
        this.setState({editMode: false})
    };
    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };
    onDeleteClick = () => {
        this.props.deleteTask(this.props.task.id)
    }

    onPriorityChange = (e) => {
        this.props.changePriority(this.props.task.id, e.target.value)
    }

    render = (props) => {

        let classForChecked = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className={classForChecked}>
                <input type="checkbox"
                       checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                {this.state.editMode
                    ? <input onBlur={this.deactivateEditMode}
                             onChange={this.onTitleChanged}
                             autoFocus={true}
                             value={this.props.task.title}/>
                    : <span onClick={this.activateEditMode}>{this.props.task.id}-{this.props.task.title} </span>}
                - priority:
                <select value={this.props.task.priority} onChange={this.onPriorityChange}>
                    <option value='high'>high</option>
                    <option value='middle'>middle</option>
                    <option value='low'>low</option>
                </select>
                <button onClick={this.onDeleteClick}>X</button>
            </div>
        );
    }
}

export default TodoListTask;

