import React from 'react';
import './ToDoList.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = (props) => {

     let tasksElements= this.props.tasks.map( task=> <TodoListTask task={task}
                                                                   changeStatus={this.props.changeStatus}
                                                                   changeTitle={this.props.changeTitle}
                                                                   changePriority={this.props.changePriority}
                                                                   deleteTask={this.props.deleteTask}/>)

        return (
                    <div className="todoList-tasks">
                        {tasksElements}
                    </div>

        );
    }
}

export default TodoListTasks;

