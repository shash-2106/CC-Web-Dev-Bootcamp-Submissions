import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from '../Dashboard'
import FocusMode from '../FocusMode'
import './index.css'

function App() {
  const [tasks, setTasks] = useState<any[]>([])

  // Load from LocalStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem('simple_tasks')
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }, [])

  // Save to LocalStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('simple_tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <BrowserRouter>
      <div className="app">
        <div className="app-shell">
          <header className="app-header">
            <div className="brand">
              <p className="brand-kicker">Today</p>
              <h1 className="brand-title">Productivity App</h1>
              <p className="brand-subtitle">Plan your work, focus on one thing, finish well.</p>
            </div>
            <nav className="nav">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link${isActive ? ' is-active' : ''}`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/focus"
                className={({ isActive }) =>
                  `nav-link${isActive ? ' is-active' : ''}`
                }
              >
                Focus Mode
              </NavLink>
            </nav>
          </header>

          <main className="app-main">
            <Routes>
              <Route path="/" element={<Dashboard tasks={tasks} setTasks={setTasks} />} />
              <Route path="/focus" element={<FocusMode tasks={tasks} />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
