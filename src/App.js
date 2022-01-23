import logo from './logo.svg';
import './App.css';
import MobileOtp from './components/MobileOtpSMSAlert/MobileOtp';
import MobileOtp2fa from './components/MobileOtp2FA/MobileOtp2fa';

function App() {
   return (
      <div className="App">
         <h2>app</h2>

         {/* <MobileOtp /> */}
         <MobileOtp2fa />
      </div>
   );
}

export default App;
