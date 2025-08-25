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
        <form onSubmit={handleTokenVerification} className='bg-white rounded-lg shadow-md max-w-sm  mx-auto'>
        <div className='pt-6'>
            <h2 className='text-3xl text-center font-extralight'> 
        VALIDATE OTP
            </h2>
        </div>

        <hr className='text-gray-200 mt-6 mb-6' />

        <p className='text-center text-gray-600 text-lg font-light'>
           Please Enter 6-digit time based OTP to verify 2FA authentication 
        </p>

        <div className='p-6'> 
        <div>
            <label className='text-gray-600 text-sm '>
                TOTP </label>
                <input 
                label="TOTP" 
                 value={otp}
                 onChange={(e)=>setOtp(e.target.value)}
                className='w-full p-2 border rounded mt-2 '
                placeholder='Enter your TOTP'
                required
                type="text"
           
                />
        </div>
     
       
        {error && <p className='text-red-500 text-sm mb-3'> {error}</p>}
        {message && <p className='text-green-600 text-sm mb-3'> {message}</p>}

       
        <button type='submit' 
        className='w-full bg-blue-500 text-white py-2 rounded-md '
        >
      verify the TOTP
         
         </button>

    <button type='button' 
        className='w-full bg-slate-500 text-white py-2 rounded-md mb-3 '
        onClick={handleReset}
        >
      RESET 2FA
         
         </button>
  
        </div>
    </form>
    );
};

export default TwoFAVerification;