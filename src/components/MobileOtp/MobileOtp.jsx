import React, { useEffect, useState } from 'react';

const API_KEY = '61ed71535711f';

const formStyles = {
   width: '600px',
   height: '600px',
};

const MobileOtp = () => {
   const [name, setName] = useState('creator');
   const [phone, setPhone] = useState('');
   const [otp, setOtp] = useState('');
   const [message, setMessage] = useState('');

   useEffect(() => {}, [name, phone]);

   const getOTP = async () => {
      const requestOptions = {
         method: 'POST',
         redirect: 'follow',
      };

      fetch(
         `http://www.smsalert.co.in/api/mverify.json?apikey=${API_KEY}&sender=VIEWIT&mobileno=${phone}&template=Hello%20${name},%20Your%20OTP%20is%20[otp%20length=%224%22]`,
         requestOptions
      )
         .then((response) => response.text())
         .then((result) => console.log(result))
         .catch((error) => console.log('error', error));
   };

   const verifyOTP = async () => {
      const requestOptions = {
         method: 'POST',
         redirect: 'follow',
      };

      fetch(
         `http://www.smsalert.co.in/api/mverify.json?apikey=${API_KEY}&mobileno=${phone}&code=${otp}`,
         requestOptions
      )
         .then((response) => response.text())
         .then((result) => {
            console.log(result);
            console.log('OTP Verified Successfully!');
         })
         .catch((error) => console.log('error', error));
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
               placeholder="Phone Number..."
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

export default MobileOtp;
