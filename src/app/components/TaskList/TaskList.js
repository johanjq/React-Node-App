import React from "react";

export const TaskList = ({ handleSubmit, deleteTask, handleChange, tasks, title, description }) => {
  return (
    <div>
      {/* HEADER */}
      <nav className="light-blue darken-4">
        <div className="container">
          <a className="brand-logo" href="/">
            MERN Stack
            </a>
        </div>
      </nav>
      {/* CONTENT */}

      <div className="container">
        <div className="row">
          <div className="col s5">
            <div className="card">
              <div className="card-content">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="text"
                        placeholder="Task Title"
                        value={title}
                        name="title"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        className="materialize-textarea"
                        type="text"
                        placeholder="Task Description"
                        value={description}
                        name="description"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button className="btn light-blue darken-4" type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col s7">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(task => {
                  return (
                    <tr key={task._id}>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>
                        <button className="btn light-blue darken-4" style={{ margin: "4px" }}><i className="material-icons Edit">edit</i></button>
                        <button onClick={() => deleteTask(task._id)} className="btn red darken-1"><i className="material-icons Delete">delete</i></button>
                      </td>
                    </tr>)
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
