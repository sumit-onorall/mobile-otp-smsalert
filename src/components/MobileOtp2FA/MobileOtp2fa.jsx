import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'e3ffa140-7c63-11ec-b9b5-0200cd936042';

const formStyles = {
   width: '600px',
   height: '600px',
};

const MobileOtp2fa = () => {
   const [name, setName] = useState('creator');
   const [phone, setPhone] = useState('');
   const [otp, setOtp] = useState('');
   const [session_id, setSession_id] = useState('');
   const [message, setMessage] = useState('');

   useEffect(() => {}, [name, phone]);

   const getOTP = async () => {
      const res = await axios.get(
         `https://2factor.in/API/V1/${API_KEY}/SMS/${phone}/AUTOGEN`
      );
      console.log(res.data);
      setSession_id(res.data.Details);
   };

   const verifyOTP = async () => {
      try {
         const res = await axios.get(
            `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${session_id}/${otp}`
         );
         console.log(res.data);
      } catch (error) {
         console.log('Error: ', error);
      }
   };

   return (
      <form style={formStyles}>
         <div className="input-control">
            <label htmlFor="name">name</label> <br />
            <input
               type="text"
               id="name"
               onChange={(e) => setName(e.target.value)}
            />
         </div>

         <div className="input-control">
            <label htmlFor="phone">Phone Number with country code:</label>{' '}
            <br />
            <input
               id="phone"
               type="text"
               onChange={(e) => setPhone(e.target.value)}
               placeholder="Phone Number..."
            />
         </div>

         <div className="input-control">
            <label htmlFor="otp">Enter OTP:</label>
            <br />
            <input
               id="otp"
               type="number"
               onChange={(e) => setOtp(e.target.value)}
               placeholder="Enter OTP here"
            />
         </div>

         <button onClick={getOTP} type="button">
            Get OTP
         </button>
         <button onClick={verifyOTP} type="button">
            Verify OTP
         </button>
      </form>
   );
};

export default MobileOtp2fa;
