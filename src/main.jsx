import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ManageMeetings from './components/ManageMeetings'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ManageMeetings />
  </StrictMode>,
)
