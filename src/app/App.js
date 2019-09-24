import React, { PureComponent } from "react";
import { TaskList } from './components/TaskList/TaskList';

export class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            tasks: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    fetchTasks() {
        fetch('/api/tasks')
            .then(res => res.json())
            .then(data => {
                this.setState({ tasks: data });
                console.log(this.state.tasks)
            });
    }
    componentDidMount() {
        this.fetchTasks();
    }

    handleSubmit(e) {
        fetch("/api/tasks", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                M.toast({ html: 'Task Saved' });
                this.setState({ title: '', description: '' });
                this.fetchTasks();
            })
            .catch(error => console.log(error));
        e.preventDefault();
    }

    deleteTask(id) {
        if (confirm('Are you sure you want to delete it?')) {
            fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    M.toast({ html: "Task Deleted" });
                    this.fetchTasks();
                })
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <TaskList handleSubmit={this.handleSubmit} handleChange={this.handleChange} deleteTask={this.deleteTask} {...this.state} />
        )
    }
}
