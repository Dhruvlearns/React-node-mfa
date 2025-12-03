import { StrictMode } from "react"
import { createRoot } from 'react-dom/client'
import './index.css'  // ← Make sure this line exists
import router from "./routes"
import { RouterProvider } from "react-router-dom"
import { SessionProvider } from "./context/SessionContext"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Dark matrix-style background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-32 left-40 w-56 h-56 bg-gradient-to-r from-purple-500/20 to-indigo-600/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Digital grid pattern */}
      <div className="absolute inset-0 opacity-20" 
           style={{
             backgroundImage: `linear-gradient(rgba(0,255,150,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,150,0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>
      
      {/* Floating security icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Lock icons */}
        <div className="absolute top-16 left-16 text-green-400/30 animate-bounce animation-delay-1000">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 10h2V7a4 4 0 1 1 8 0v3h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM10 7a2 2 0 1 1 4 0v3h-4V7z"/>
          </svg>
        </div>
        
        {/* Shield icon */}
        <div className="absolute top-32 right-20 text-cyan-400/40 animate-pulse animation-delay-3000">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,16.6 15.6,17 15,17H9C8.4,17 8,16.6 8,16V13C8,12.4 8.4,11.5 9,11.5V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,9.2 10.2,10V11.5H13.8V10C13.8,9.2 12.8,8.2 12,8.2Z"/>
          </svg>
        </div>
        
        {/* Key icon */}
        <div className="absolute bottom-40 left-24 text-purple-400/35 animate-bounce animation-delay-2000">
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.5,2C4.84,2 3.5,3.34 3.5,5C3.5,6.66 4.84,8 6.5,8C8.16,8 9.5,6.66 9.5,5C9.5,3.34 8.16,2 6.5,2M9.91,8.5L22,20.59L20.59,22L18.5,19.91L16.09,22.32L13.27,19.5L15.68,17.09L8.5,9.91C7.84,9.97 7.18,9.84 6.56,9.53C5.2,8.9 4.44,7.37 5.07,6.01C5.7,4.65 7.23,3.89 8.59,4.52C9.95,5.15 10.71,6.68 10.08,8.04C9.77,8.66 9.37,9.12 9.91,8.5Z"/>
          </svg>
        </div>
        
        {/* Fingerprint icon */}
        <div className="absolute top-64 left-72 text-emerald-400/30 animate-pulse animation-delay-4000">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.81,4.47C17.73,4.47 17.65,4.45 17.58,4.41C15.66,3.42 14,3.87 12.46,3.41C11.5,3.12 10.63,2.91 9.33,3.21C6.44,3.87 4.5,6.18 4.5,8.83C4.5,11.2 5.71,13.97 6.89,16.72C7.39,17.9 7.32,19.23 6.71,20.36C6.66,20.45 6.66,20.56 6.71,20.65C6.76,20.74 6.85,20.8 6.95,20.8C7.04,20.8 7.13,20.76 7.18,20.69C7.91,19.4 8,17.9 7.4,16.54C6.18,13.67 4.9,10.79 4.9,8.83C4.9,6.61 6.57,4.66 9.03,4.09C10.14,3.84 10.87,4.01 11.71,4.26C13.37,4.74 15.26,4.23 17.39,5.33C17.5,5.38 17.63,5.34 17.68,5.23C17.73,5.12 17.69,4.99 17.58,4.94L17.81,4.47M12,5.5C11.27,5.5 10.58,5.61 9.89,5.83C7.77,6.5 6.25,8.21 6.25,10.16C6.25,12.24 7.34,14.75 8.4,17.23C8.91,18.37 8.82,19.65 8.17,20.73C8.11,20.83 8.15,20.96 8.25,21.02C8.35,21.08 8.48,21.04 8.54,20.94C9.32,19.68 9.42,18.17 8.8,16.82C7.7,14.24 6.65,11.86 6.65,10.16C6.65,8.64 7.9,7.25 9.64,6.69C11.58,6.08 13.85,6.08 15.79,6.69C17.53,7.25 18.78,8.64 18.78,10.16C18.78,11.86 17.73,14.24 16.63,16.82C16.01,18.17 16.11,19.68 16.89,20.94C16.95,21.04 17.08,21.08 17.18,21.02C17.28,20.96 17.32,20.83 17.26,20.73C16.61,19.65 16.52,18.37 17.03,17.23C18.09,14.75 19.18,12.24 19.18,10.16C19.18,8.21 17.66,6.5 15.54,5.83C14.85,5.61 14.16,5.5 13.43,5.5H12Z"/>
          </svg>
        </div>
        
        {/* Additional security icons scattered */}
        <div className="absolute bottom-20 right-40 text-green-400/25 animate-bounce animation-delay-5000">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
          </svg>
        </div>
        
        <div className="absolute top-80 right-64 text-blue-400/30 animate-pulse animation-delay-6000">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.5,4V6.5H4V4H6.5V2.5H4C3.17,2.5 2.5,3.17 2.5,4M22,20V22H20V20H22M22,18H20V20C20.83,20 21.5,19.33 21.5,18H22M4,20V18H2V20C2,20.83 2.67,21.5 3.5,21.5V20H4M18,20V22H20V20H18M16,20V22H18V20H16M14,20V22H16V20H14M12,20V22H14V20H12M10,20V22H12V20H10M8,20V22H10V20H8M6,20V22H8V20H6M2,16V18H4V16H2M2,14V16H4V14H2M2,12V14H4V12H2M2,10V12H4V10H2M4,8V10H2V8H4M22,2V4H20V2H22M18,2V4H20V2H18M16,2V4H18V2H16M14,2V4H16V2H14M12,2V4H14V2H12M10,2V4H12V2H10M8,2V4H10V2H8M20,8V6H22V8H20M20,10V8H22V10H20M20,12V10H22V12H20M20,14V12H22V14H20M20,16V14H22V16H20"/>
          </svg>
        </div>
        
        {/* Binary code floating elements */}
        <div className="absolute top-48 left-80 text-green-300/20 font-mono text-xs animate-pulse animation-delay-1000">
          01001
        </div>
        <div className="absolute bottom-60 right-20 text-cyan-300/20 font-mono text-xs animate-pulse animation-delay-3000">
          11010
        </div>
        <div className="absolute top-72 right-80 text-purple-300/20 font-mono text-xs animate-pulse animation-delay-2000">
          10110
        </div>
      </div>
      
      {/* Scanning line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/60 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse animation-delay-2000"></div>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="w-full max-w-6xl mx-auto px-4">
          <SessionProvider>
            <div className="backdrop-blur-md bg-gray-900/80 border border-green-400/20 rounded-2xl shadow-2xl shadow-green-900/20 p-8 relative overflow-hidden">
              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/10 shadow-inner shadow-cyan-400/10"></div>
              
              {/* Content wrapper */}
              <div className="relative z-10">
                <RouterProvider router={router}/>
              </div>
              
              {/* Corner accent elements */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-green-400/40"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-green-400/40"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-green-400/40"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-green-400/40"></div>
            </div>
          </SessionProvider>
        </div>
      </div>
      
      {/* Status indicator */}
      <div className="absolute top-6 right-6 flex items-center space-x-2 text-green-400/70 text-sm font-mono">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span>SECURE</span>
      </div>
    </div>
  )
}

export default App