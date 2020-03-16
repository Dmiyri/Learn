import React from 'react';
import './ToDoList.css';

class TodoListHeader extends React.Component {

    state={
        error: true,
        title:'',
    };

    onAddTaskClick = () => {
        let newText = this.state.title;
        this.state.title = '';
        if (newText===""){
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.addTask(newText);
        }
    };

    onEnterPress = (e) => {
        if (e.key === 'Enter') {
            return this.onAddTaskClick()
        }
    };

    onTitleChange=(e)=>{this.setState({error:false, title:e.currentTarget.value})};

    render = (props) => {
        let classForError = this.state.error ? "error" : "";
        return (

            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={classForError} type="text" placeholder="New task name"
                           onChange={this.onTitleChange}
                           onKeyPress={this.onEnterPress}
                           value={this.state.title}/>
                    <button onClick={this.onAddTaskClick} >Add</button>
                </div>
            </div>

        );
    }
}

export default TodoListHeader;

