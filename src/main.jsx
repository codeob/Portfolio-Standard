// Import React's StrictMode for development checks
import { StrictMode } from 'react'
// Import createRoot to render the React app
import { createRoot } from 'react-dom/client'
// Import global CSS styles
import './index.css'
// Import the main App component
import App from './App.jsx'
// Create the root element and render the app

// Wrap the app in StrictMode for additional development warnings
createRoot(document.getElementById('root')).render(
// Render the main App component
  <StrictMode>
    <App />
  </StrictMode>,
)
