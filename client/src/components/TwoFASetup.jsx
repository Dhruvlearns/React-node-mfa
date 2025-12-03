import React, { useEffect, useState } from 'react';
import { setup2FA } from '../service/authApi';

const TwoFASetup = ({onSetupComplete}) => {
    const[message, setMessage]=useState("");
    const [response , setResponse ]=useState({});

    const fetchQRCode=async ()=>{
        const {data}=await setup2FA();
        setResponse(data);
        console.log(data);
    };

    useEffect(()=>{
        fetchQRCode();
    } , []); // run only once when the component is loaded

    const copyClipBoard=async ()=>{
        await navigator.clipboard.writeText(response.secret);
        setMessage("Secret copied to secure clipboard");
    };

    return (
        <div className="relative max-w-lg mx-auto">
            {/* Floating security icons around the component */}
            <div className="absolute -top-10 -left-10 text-green-400/30 animate-pulse">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,16.6 15.6,17 15,17H9C8.4,17 8,16.6 8,16V13C8,12.4 8.4,11.5 9,11.5V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,9.2 10.2,10V11.5H13.8V10C13.8,9.2 12.8,8.2 12,8.2Z"/>
                </svg>
            </div>
            
            <div className="absolute -top-6 -right-14 text-cyan-400/25 animate-bounce animation-delay-1000">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.81,4.47C17.73,4.47 17.65,4.45 17.58,4.41C15.66,3.42 14,3.87 12.46,3.41C11.5,3.12 10.63,2.91 9.33,3.21C6.44,3.87 4.5,6.18 4.5,8.83C4.5,11.2 5.71,13.97 6.89,16.72C7.39,17.9 7.32,19.23 6.71,20.36C6.66,20.45 6.66,20.56 6.71,20.65C6.76,20.74 6.85,20.8 6.95,20.8C7.04,20.8 7.13,20.76 7.18,20.69C7.91,19.4 8,17.9 7.4,16.54C6.18,13.67 4.9,10.79 4.9,8.83C4.9,6.61 6.57,4.66 9.03,4.09C10.14,3.84 10.87,4.01 11.71,4.26C13.37,4.74 15.26,4.23 17.39,5.33C17.5,5.38 17.63,5.34 17.68,5.23C17.73,5.12 17.69,4.99 17.58,4.94L17.81,4.47Z"/>
                </svg>
            </div>
            
            <div className="absolute top-32 -left-16 text-purple-400/30 animate-pulse animation-delay-2000">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12M12,17C12.5,17 13,17.07 13.5,17.21C15.53,15.94 17,13.66 17,11C17,7.69 14.31,5 11,5C7.69,5 5,7.69 5,11C5,13.66 6.47,15.94 8.5,17.21C9,17.07 9.5,17 10,17H12M12,2A8,8 0 0,1 20,10A8,8 0 0,1 12,18A8,8 0 0,1 4,10A8,8 0 0,1 12,2Z"/>
                </svg>
            </div>
            
            <div className="absolute bottom-16 -right-12 text-emerald-400/25 animate-bounce animation-delay-3000">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6,2V8H6V8L10,12L6,16V16H6V22H18V16H18V16L14,12L18,8V8H18V2H6M16,16.5V20H8V16.5L12,12.5L16,16.5M12,11.5L8,7.5V4H16V7.5L12,11.5Z"/>
                </svg>
            </div>

            {/* Binary code elements */}
            <div className="absolute -top-4 left-24 text-green-300/20 font-mono text-xs animate-pulse animation-delay-4000">
                2FA
            </div>
            <div className="absolute bottom-40 -left-8 text-cyan-300/20 font-mono text-xs animate-pulse animation-delay-5000">
                AUTH
            </div>
            <div className="absolute top-48 -right-6 text-purple-300/20 font-mono text-xs animate-pulse animation-delay-6000">
                TOTP
            </div>

            <div className='relative bg-gray-900/90 backdrop-blur-md border border-green-400/20 rounded-2xl shadow-2xl shadow-green-900/20 max-w-lg mx-auto overflow-hidden'>
                
                {/* Scanning line effects */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/60 to-transparent animate-pulse"></div>
                
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-400/40"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-400/40"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-400/40"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-400/40"></div>

                <div className='pt-8 pb-2'>
                    <div className="flex items-center justify-center mb-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-3"></div>
                        <h2 className='text-3xl text-center font-light text-cyan-400 tracking-wide'> 
                            TWO-FACTOR AUTHENTICATION
                        </h2>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse ml-3"></div>
                    </div>
                    <div className="text-center">
                        <span className="text-xs text-green-400/70 font-mono uppercase tracking-widest">SECURITY PROTOCOL INITIATED</span>
                    </div>
                </div>

                <hr className='border-cyan-400/30 mt-6 mb-6' />

                <p className='text-center text-gray-300 text-base font-light px-6'>
                    Initialize authenticator with quantum-encrypted QR matrix
                </p>

                <div className='p-8'>
                    {/* QR Code Container */}
                    <div className='flex justify-center mb-6'>
                        {response.qrCode ? (
                            <div className="relative p-4 bg-black/50 border border-green-400/30 rounded-xl">
                                {/* QR Code frame effect */}
                                <div className="absolute inset-2 border border-green-400/20 rounded-lg pointer-events-none">
                                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-green-400"></div>
                                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-green-400"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-green-400"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-400"></div>
                                </div>
                                
                                <img 
                                    src={response.qrCode} 
                                    alt='2FA Quantum Authentication Matrix' 
                                    className='rounded-lg shadow-lg shadow-green-900/30'
                                />
                                
                                {/* Scanning effect overlay */}
                                <div className="absolute inset-2 pointer-events-none">
                                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400/60 to-transparent animate-pulse"></div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center p-8 bg-black/50 border border-gray-600/30 rounded-xl">
                                <div className="flex flex-col items-center space-y-3">
                                    <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-green-400 text-sm font-mono">GENERATING MATRIX...</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Divider with OR text */}
                    <div className='flex items-center mt-6 mb-6'>
                        <div className='border-t border-cyan-400/30 flex-grow'></div>
                        <div className='text-cyan-400 text-sm font-mono font-light px-6 bg-gray-900/90'>
                            OR MANUAL KEY ENTRY
                        </div>    
                        <div className='border-t border-cyan-400/30 flex-grow'></div>
                    </div>    

                    {/* Secret key input */}
                    <div className='mb-8'>
                        {message && (
                            <div className="mb-4 p-3 bg-green-900/30 border border-green-500/50 rounded-lg">
                                <p className='text-green-400 text-sm flex items-center'>
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                                    </svg>
                                    SECURE TRANSFER: {message}
                                </p>
                            </div>
                        )}
                        
                        <label className='text-cyan-400 text-sm uppercase tracking-wider flex items-center mb-3'>
                            <svg className="w-4 h-4 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.5,2C4.84,2 3.5,3.34 3.5,5C3.5,6.66 4.84,8 6.5,8C8.16,8 9.5,6.66 9.5,5C9.5,3.34 8.16,2 6.5,2M9.91,8.5L22,20.59L20.59,22L18.5,19.91L16.09,22.32L13.27,19.5L15.68,17.09L8.5,9.91C7.84,9.97 7.18,9.84 6.56,9.53C5.2,8.9 4.44,7.37 5.07,6.01C5.7,4.65 7.23,3.89 8.59,4.52C9.95,5.15 10.71,6.68 10.08,8.04C9.77,8.66 9.37,9.12 9.91,8.5Z"/>
                            </svg>
                            Secret Authentication Key
                        </label>
                        
                        <div className="relative">
                            <input 
                                readOnly
                                defaultValue=""  
                                value={response.secret || ""}
                                className='w-full bg-black/50 border border-gray-600/50 rounded-lg p-4 text-green-400 font-mono text-sm cursor-pointer hover:border-cyan-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50'
                                onClick={copyClipBoard}
                                placeholder="Generating secure key..."
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400/60">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                                </svg>
                            </div>
                        </div>
                        
                        <p className="text-gray-400 text-xs mt-2 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                            </svg>
                            Click to copy to secure clipboard
                        </p>
                    </div>

                    {/* Continue button */}
                    <button 
                        onClick={onSetupComplete} 
                        className='w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-black font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3 shadow-lg shadow-cyan-900/30 border border-cyan-400/20'>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9"/>
                        </svg>
                        <span className="uppercase tracking-wider">
                            PROCEED TO VERIFICATION
                        </span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
                        </svg>
                    </button>
                </div>
                
                {/* Bottom scanning line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse animation-delay-2000"></div>
            </div>
        </div>
    );
};

export default TwoFASetup;