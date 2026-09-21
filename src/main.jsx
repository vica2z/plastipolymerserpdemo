import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

// The ERP shell is a compatibility layer that mounts a legacy DOM application
// inside React. Avoid React.StrictMode's development-only effect replay here,
// because the legacy shell registers document/window event listeners.
createRoot(document.getElementById('root')).render(<App />)
