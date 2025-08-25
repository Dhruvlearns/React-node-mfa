import { StrictMode } from "react"
import { createRoot } from 'react-dom/client'
import './index.css'  // ← Make sure this line exists
import router from "./routes"
import { RouterProvider } from "react-router-dom"
import { SessionProvider } from "./context/SessionContext"

function App() {
  
  return (
  <div className="bg-blue-900 h-screen">
    <div className="flex justify-center items-center h-screen text-black"> 
    <SessionProvider>
    <RouterProvider router={router}/>
    </SessionProvider>
    
    
     </div>
  </div>
  
  )
}

export default App
