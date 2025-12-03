import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {register , loginUser} from "../service/authApi";

export default function LoginForm({onLoginSuccess}) {
    const [isRegister, setIsRegister]=useState(false);
    const [username , setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [confirmPassword , setConfirmPassword]=useState("");
    const [error , setError]=useState("");
    const [message , setMessage]=useState("");

    const handleLogin= async(e)=>{
        e.preventDefault();

    // CRITICAL: Clear ALL previous states first
        setError("");
        setMessage("");

        try {
            const {data}=await loginUser(username , password);

            setMessage(data.message);
            setUsername("");
            setPassword("");
            setError("");
             onLoginSuccess(data);
           
        } catch (error) {
            console.log("=== LOGIN ERROR ===");
            console.log("Error object:", error);
            console.log("Error message:", error.message);
            console.log("Error response:", error.response);
            console.log("Error response data:", error.response?.data);
            console.log("Error status:", error.response?.status);
            setUsername("");
            setPassword("");
            setMessage("");
    
            setError("Invalid user login credentials");
        }
    };

    const handleRegister=async(e)=>{
        e.preventDefault(); //prevents refreshing page on submit

        // Clear previous messages
             setError("");
             setMessage("");
        try {
            const {data}=await register(username , password);

            setIsRegister(false);
            setMessage(data.message);
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            setError("");
            
        } catch (error) {
            console.log("THE ERROR IS ",error.message);
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            setMessage("");
            setError("something went wrong during user registration");
        }
    };

    const handleRegisterToggle=()=>{
        setIsRegister(!isRegister);
        setError("");
        setMessage("");
    };

    return (
        <div className="relative max-w-md mx-auto">
            {/* Floating security icons around the form */}
            <div className="absolute -top-8 -left-8 text-green-400/30 animate-pulse">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
                </svg>
            </div>
            
            <div className="absolute -top-4 -right-12 text-cyan-400/25 animate-bounce animation-delay-1000">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.5,2C4.84,2 3.5,3.34 3.5,5C3.5,6.66 4.84,8 6.5,8C8.16,8 9.5,6.66 9.5,5C9.5,3.34 8.16,2 6.5,2M9.91,8.5L22,20.59L20.59,22L18.5,19.91L16.09,22.32L13.27,19.5L15.68,17.09L8.5,9.91C7.84,9.97 7.18,9.84 6.56,9.53C5.2,8.9 4.44,7.37 5.07,6.01C5.7,4.65 7.23,3.89 8.59,4.52C9.95,5.15 10.71,6.68 10.08,8.04C9.77,8.66 9.37,9.12 9.91,8.5Z"/>
                </svg>
            </div>
            
            <div className="absolute top-20 -left-12 text-purple-400/30 animate-pulse animation-delay-2000">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,16.6 15.6,17 15,17H9C8.4,17 8,16.6 8,16V13C8,12.4 8.4,11.5 9,11.5V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,9.2 10.2,10V11.5H13.8V10C13.8,9.2 12.8,8.2 12,8.2Z"/>
                </svg>
            </div>
            
            <div className="absolute bottom-10 -right-8 text-emerald-400/25 animate-bounce animation-delay-3000">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.81,4.47C17.73,4.47 17.65,4.45 17.58,4.41C15.66,3.42 14,3.87 12.46,3.41C11.5,3.12 10.63,2.91 9.33,3.21C6.44,3.87 4.5,6.18 4.5,8.83C4.5,11.2 5.71,13.97 6.89,16.72C7.39,17.9 7.32,19.23 6.71,20.36C6.66,20.45 6.66,20.56 6.71,20.65C6.76,20.74 6.85,20.8 6.95,20.8C7.04,20.8 7.13,20.76 7.18,20.69C7.91,19.4 8,17.9 7.4,16.54C6.18,13.67 4.9,10.79 4.9,8.83C4.9,6.61 6.57,4.66 9.03,4.09C10.14,3.84 10.87,4.01 11.71,4.26C13.37,4.74 15.26,4.23 17.39,5.33C17.5,5.38 17.63,5.34 17.68,5.23C17.73,5.12 17.69,4.99 17.58,4.94L17.81,4.47Z"/>
                </svg>
            </div>

            {/* Binary code elements */}
            <div className="absolute -top-2 left-32 text-green-300/20 font-mono text-xs animate-pulse animation-delay-4000">
                1101
            </div>
            <div className="absolute bottom-32 -left-6 text-cyan-300/20 font-mono text-xs animate-pulse animation-delay-5000">
                0101
            </div>

            <form onSubmit={isRegister ? handleRegister : handleLogin} 
                  className='relative bg-gray-900/90 backdrop-blur-md border border-green-400/20 rounded-2xl shadow-2xl shadow-green-900/20 max-w-md mx-auto overflow-hidden'>
                
                {/* Scanning line effect at top */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/60 to-transparent animate-pulse"></div>
                
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-400/40"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-400/40"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-400/40"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-400/40"></div>

                <div className='pt-8 pb-2'>
                    <div className="flex items-center justify-center mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
                        <h2 className='text-3xl text-center font-light text-green-400 tracking-wide'> 
                            {isRegister ? "CREATE ACCOUNT" : "SECURE LOGIN"}
                        </h2>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-3"></div>
                    </div>
                </div>

                <hr className='border-green-400/30 mt-6 mb-6' />

                <p className='text-center text-gray-300 text-base font-light px-4'>
                    {isRegister ? 
                        "Initialize new security profile"
                        : "Authenticate credentials required"
                    }
                </p>

                <div className='p-8'> 
                    <div className='mb-6'>
                        <label className='text-green-400 text-sm uppercase tracking-wider flex items-center'>
                            <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                            Username
                        </label>
                        <input 
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            className='w-full p-3 bg-black/50 border border-gray-600/50 rounded-lg mt-3 text-green-400 placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-all duration-300'
                            placeholder='Enter security identifier'
                            required
                            type="text"
                        />
                    </div>
                    
                    <div className='mb-6'>
                        <label className='text-green-400 text-sm uppercase tracking-wider flex items-center'>
                            <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
                            </svg>
                            Password
                        </label>
                        <input 
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)}
                            className='w-full p-3 bg-black/50 border border-gray-600/50 rounded-lg mt-3 text-green-400 placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-all duration-300'
                            placeholder='Enter access key'
                            required
                            type='password'
                        />
                    </div>
                    
                    {isRegister && (
                        <div className='mb-6'>
                            <label className='text-green-400 text-sm uppercase tracking-wider flex items-center'>
                                <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
                                </svg>
                                Confirm Password
                            </label>
                            <input 
                                value={confirmPassword}
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                                className='w-full p-3 bg-black/50 border border-gray-600/50 rounded-lg mt-3 text-green-400 placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-all duration-300'
                                placeholder='Verify access key'
                                required
                                type='password'
                            />
                        </div>
                    )}
                    
                    {error && (
                        <div className="mb-4 p-3 bg-red-900/30 border border-red-500/50 rounded-lg">
                            <p className='text-red-400 text-sm flex items-center'>
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"/>
                                </svg>
                                ACCESS DENIED: {error}
                            </p>
                        </div>
                    )}
                    
                    {message && (
                        <div className="mb-4 p-3 bg-green-900/30 border border-green-500/50 rounded-lg">
                            <p className='text-green-400 text-sm flex items-center'>
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                                </svg>
                                ACCESS GRANTED: {message}
                            </p>
                        </div>
                    )}

                    <button type='submit' 
                            className='w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-black font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg shadow-green-900/30 border border-green-400/20'>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"/>
                        </svg>
                        <span className="uppercase tracking-wider">
                            {isRegister ? "Initialize Profile" : "Authenticate"}
                        </span>
                    </button>
                    
                    <p className='pt-6 text-center text-gray-400 text-sm'>
                        {isRegister ? "Security profile exists?" : "New security profile required?"}   
                        <Link to="" 
                              onClick={handleRegisterToggle}
                              className="text-cyan-400 hover:text-cyan-300 ml-2 transition-colors duration-300 underline">
                            {isRegister ? "LOGIN" : "CREATE ACCOUNT"}
                        </Link>
                    </p>
                </div>
                
                {/* Bottom scanning line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse animation-delay-2000"></div>
            </form>
        </div>
    )
}