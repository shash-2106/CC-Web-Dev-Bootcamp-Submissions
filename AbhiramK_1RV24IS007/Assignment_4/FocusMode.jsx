import { useState } from 'react';

export default function FocusMode({ tasks }) {
  const [focusedTask, setFocusedTask] = useState(null);
  
  const pendingTasks = tasks.filter(t => !t.completed);

  const pickRandomTask = () => {
    if (pendingTasks.length === 0) return;
    const randomIndex = Math.floor(Math.random() * pendingTasks.length);
    setFocusedTask(pendingTasks[randomIndex]);
  };

  return (
    <section className="card focus-card">
      <div className="card-header">
        <h2 className="card-title">Focus Mode</h2>
        <p className="card-subtitle">Let the app pick a single next step.</p>
      </div>

      {focusedTask ? (
        <div className="focus-panel">
          <p className="focus-kicker">Your mission</p>
          <h3 className="focus-title">{focusedTask.title}</h3>
          <span className="focus-pill">Priority: {focusedTask.priority}</span>
          <button onClick={() => setFocusedTask(null)} className="link-button">
            Pick something else
          </button>
        </div>
      ) : (
        <button 
          onClick={pickRandomTask}
          disabled={pendingTasks.length === 0}
          className="btn btn-primary btn-large"
        >
          {pendingTasks.length === 0 ? "You're all done!" : "Pick a task"}
        </button>
      )}
    </section>
  );
}