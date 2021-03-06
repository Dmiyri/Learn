import React from 'react';
import './ToDoList.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import {} from '../LocStorage'
import {saveState} from "../LocStorage";
import {restoreState} from "../LocStorage";


class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    componentDidMount() {
        let newState = restoreState();
        this.setState(newState, () => {
            this.state.tasks.map(t => {
                if (t.id >= this.newTaskId) {
                    this.newTaskId = t.id + 1;
                }
            })
        })
    }

    state = {
        tasks: [],
        filterValue: 'All',
    }
    newTaskId = 0;

    addTask = (newText) => {
        let newTask = {
            id: this.newTaskId++,
            title: newText,
            isDone: true,
            priority: 'high'
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks}, () => {
            saveState(this.state)
        })

    };
    deleteTask = (taskId) => {
        let updateTask = this.state.tasks.filter(t => {
            return t.id !== taskId
        })
        this.setState({tasks: updateTask}, () => {
            saveState(this.state)
        })
    }
    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue}, () => {
            saveState(this.state)
        })
    };
    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t;
            } else {
                return {...t, ...obj};
            }
        })
        this.setState({tasks: newTasks}, () => {
            saveState(this.state)
        })
    };
    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    };
    changeTitle = (taskId, newTitle) => {
        this.changeTask(taskId, {title: newTitle})
    };
    changePriority = (taskId, newStatus) => {
        this.changeTask(taskId, {priority: newStatus})
    }
    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks tasks={this.state.tasks.filter(t => {
                        switch (this.state.filterValue) {
                            case 'All':
                                return true;
                            case 'Active':
                                return t.isDone === false;
                            default:
                                return t.isDone === true;
                        }
                    })}
                                   changeStatus={this.changeStatus}
                                   changeTitle={this.changeTitle}
                                   changePriority={this.changePriority}
                                   deleteTask={this.deleteTask}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default ToDoList;

