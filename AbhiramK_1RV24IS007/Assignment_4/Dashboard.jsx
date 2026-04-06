import { useState } from 'react';

// Sub-component for individual tasks
function TaskItem({ task, toggleTask, deleteTask }) {
  const priorityClass = `badge badge--${task.priority.toLowerCase()}`;

  return (
    <div className="task-item">
      <div className="task-main">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleTask(task.id)} 
          className="task-check"
        />
        <span className={task.completed ? "task-title is-done" : "task-title"}>
          {task.title}
        </span>
      </div>
      <div className="task-meta">
        <span className={priorityClass}>
          {task.priority}
        </span>
        <button onClick={() => deleteTask(task.id)} className="icon-button" aria-label="Delete task">
          ✕
        </button>
      </div>
    </div>
  );
}

// Main Dashboard Page
export default function Dashboard({ tasks, setTasks }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Normal');

  const addTask = (e) => {
    e.preventDefault();
    if (!title) return;
    const newTask = { id: Date.now(), title, priority, completed: false };
    setTasks([...tasks, newTask]);
    setTitle('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <section className="card">
      <div className="card-header">
        <h2 className="card-title">My Tasks</h2>
        <p className="card-subtitle">Keep the list small and actionable.</p>
      </div>
      
      <form onSubmit={addTask} className="task-form">
        <label className="field-group">
          <span className="field-label">Task</span>
          <input 
            className="field" 
            placeholder="Write your next task" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </label>
        <label className="field-group">
          <span className="field-label">Priority</span>
          <select 
            className="field field-select" 
            value={priority} 
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>High</option>
            <option>Normal</option>
            <option>Low</option>
          </select>
        </label>
        <button type="submit" className="btn btn-primary">
          Add task
        </button>
      </form>

      <div className="task-list">
        {tasks.length === 0 ? <p className="empty-state">No tasks yet. Add one and keep going.</p> : null}
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        ))}
      </div>
    </section>
  );
}