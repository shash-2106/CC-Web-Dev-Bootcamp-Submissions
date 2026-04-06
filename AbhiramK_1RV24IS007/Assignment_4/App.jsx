import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import FocusMode from './FocusMode';
import './index.css';
export default function App() {
  const [tasks, setTasks] = useState([]);

  // Load from LocalStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem('simple_tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // Save to LocalStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('simple_tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-200 p-4 md:p-10 font-sans text-gray-900">
        <div className="max-w-xl mx-auto">
          
          <nav className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6">
            <h1 className="text-xl font-bold text-blue-600">Productivity App</h1>
            <div className="flex gap-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Dashboard</Link>
              <Link to="/focus" className="text-gray-600 hover:text-purple-600 font-medium">Focus Mode</Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Dashboard tasks={tasks} setTasks={setTasks} />} />
            <Route path="/focus" element={<FocusMode tasks={tasks} />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}