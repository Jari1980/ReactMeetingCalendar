import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ManageMeetings from './components/ManageMeetings'
import 'bootstrap/dist/css/bootstrap.css'
import { MeetingProvider } from './components/context'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MeetingProvider>
      <ManageMeetings />
    </MeetingProvider>
  </StrictMode>,
)
