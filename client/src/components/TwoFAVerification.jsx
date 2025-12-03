import React, { useState } from 'react';
import { reset2FA, verify2FA } from '../service/authApi';

const TwoFAVerification = ({onVerifySuccess , onResetSuccess}) => {
    const[otp,setOtp]=useState("");
    const[error , setError]=useState("");
    const [message, setMessage] = useState("");

    const handleTokenVerification=async(e)=>{
        e.preventDefault();

        try {
            const {data}=await verify2FA(otp);
            onVerifySuccess(data);
                   
        } catch (error) {
            setOtp("");
            console.log("error is ", error.message);
            setError(error.message);
        }
     };

    const handleReset=async ()=>{
        try {
            const{data}=await reset2FA();
            onResetSuccess(data);
                  
        } catch (error) {
                console.log("error is ", error.message);
                setError("invalid OTP");
        }
    }

    return (
        <div className="relative max-w-md mx-auto">
            {/* Floating security icons around the component */}
            <div className="absolute -top-8 -left-8 text-green-400/30 animate-pulse">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1L9,7V9C9,10.1 9.9,11 11,11V14L13,12V11C14.1,11 15,10.1 15,9H21M11,16L12,17L13,16H21A2,2 0 0,1 23,18V20A2,2 0 0,1 21,22H3A2,2 0 0,1 1,20V18A2,2 0 0,1 3,16H11Z"/>
                </svg>
            </div>
            
            <div className="absolute -top-4 -right-12 text-cyan-400/25 animate-bounce animation-delay-1000">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M11,7H13V9H11V7M11,11H13V17H11V11Z"/>
                </svg>
            </div>
            
            <div className="absolute top-24 -left-14 text-emerald-400/30 animate-pulse animation-delay-2000">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                </svg>
            </div>
            
            <div className="absolute bottom-12 -right-10 text-green-400/25 animate-bounce animation-delay-3000">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
                </svg>
            </div>

            {/* Digital countdown and verification elements */}
            <div className="absolute -top-6 left-20 text-green-300/20 font-mono text-xs animate-pulse animation-delay-4000">
                TOTP
            </div>
            <div className="absolute bottom-24 -left-8 text-cyan-300/20 font-mono text-xs animate-pulse animation-delay-5000">
                OTP
            </div>
            <div className="absolute top-32 -right-8 text-emerald-300/20 font-mono text-xs animate-pulse animation-delay-6000">
                30s
            </div>

            <form onSubmit={handleTokenVerification} 
                  className='relative bg-gray-900/90 backdrop-blur-md border border-green-400/20 rounded-2xl shadow-2xl shadow-green-900/20 max-w-md mx-auto overflow-hidden'>
                
                {/* Scanning line effects */}
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
                            OTP VALIDATION
                        </h2>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-3"></div>
                    </div>
                    <div className="text-center">
                        <span className="text-xs text-cyan-400/70 font-mono uppercase tracking-widest">TIME-BASED VERIFICATION</span>
                    </div>
                </div>

                <hr className='border-green-400/30 mt-6 mb-6' />

                <p className='text-center text-gray-300 text-base font-light px-6'>
                    Input 6-digit temporal authentication code to complete security verification
                </p>

                <div className='p-8'>
                    {/* OTP Input Section */}
                    <div className='mb-6'>
                        <label className='text-green-400 text-sm uppercase tracking-wider flex items-center mb-3'>
                            <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                            </svg>
                            Time-based One-Time Password
                        </label>
                        <div className="relative">
                            <input 
                                value={otp}
                                onChange={(e)=>setOtp(e.target.value)}
                                className='w-full p-4 bg-black/50 border border-gray-600/50 rounded-lg text-green-400 placeholder-gray-500 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-all duration-300 text-center text-2xl font-mono tracking-widest'
                                placeholder='000000'
                                required
                                type="text"
                                maxLength="6"
                                pattern="[0-9]{6}"
                            />
                            {/* Input field timer indicator */}
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                        <p className="text-gray-400 text-xs mt-2 text-center flex items-center justify-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                            </svg>
                            Code refreshes every 30 seconds
                        </p>
                    </div>
                    
                    {/* Error/Success Messages */}
                    {error && (
                        <div className="mb-4 p-3 bg-red-900/30 border border-red-500/50 rounded-lg">
                            <p className='text-red-400 text-sm flex items-center'>
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"/>
                                </svg>
                                VERIFICATION FAILED: {error}
                            </p>
                        </div>
                    )}
                    
                    {message && (
                        <div className="mb-4 p-3 bg-green-900/30 border border-green-500/50 rounded-lg">
                            <p className='text-green-400 text-sm flex items-center'>
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                                </svg>
                                VERIFICATION SUCCESS: {message}
                            </p>
                        </div>
                    )}

                    {/* Verify Button */}
                    <button type='submit' 
                            className='w-full mb-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-black font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3 shadow-lg shadow-green-900/30 border border-green-400/20'>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9"/>
                        </svg>
                        <span className="uppercase tracking-wider">
                            VERIFY TOKEN
                        </span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9"/>
                        </svg>
                    </button>

                    {/* Reset Button */}
                    <button type='button'
                            onClick={handleReset}
                            className='w-full bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg shadow-red-900/30 border border-red-500/20'>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                        </svg>
                        <span className="uppercase tracking-wider">
                            RESET 2FA PROTOCOL
                        </span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,4V2C13.3,2.3 14.6,2.9 15.6,3.9L14.2,5.3C13.5,4.6 12.8,4.3 12,4M12,4A8,8 0 0,0 4,12H2A10,10 0 0,1 12,2M12,4V6A6,6 0 0,1 18,12H20A8,8 0 0,0 12,4Z"/>
                        </svg>
                    </button>

                    {/* Security notice */}
                    <div className="mt-6 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                        <p className="text-green-400 text-xs text-center flex items-center justify-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
                            </svg>
                            Security Protocol: Reset will disable current 2FA configuration
                        </p>
                    </div>
                </div>
                
                {/* Bottom scanning line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse animation-delay-2000"></div>
            </form>
        </div>
    );
};

export default TwoFAVerification;