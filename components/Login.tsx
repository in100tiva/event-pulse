import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center items-center py-10 px-4">
          <div className="layout-content-container flex flex-col w-full max-w-md flex-1">
            
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-4xl">heart_check</span>
                <h1 className="text-3xl font-bold tracking-tight text-white">EventPulse</h1>
              </div>
            </div>

            <div className="bg-[#1a2c20] p-8 rounded-xl shadow-lg border border-border-dark">
              <h2 className="text-white tracking-light text-[28px] font-bold leading-tight text-center pb-2 pt-1">
                Sign in to your account
              </h2>

              <div className="flex justify-center pt-6 pb-4">
                <div className="flex w-full gap-3 flex-col items-stretch">
                  <button 
                    onClick={handleLogin}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-gray-800 text-white text-sm font-medium leading-normal tracking-[0.015em] w-full border border-gray-700 hover:bg-gray-700 transition-colors"
                  >
                    <svg className="mr-2" fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25C22.56 11.45 22.49 10.68 22.36 9.92H12.27V14.16H18.15C17.91 15.63 17.11 16.89 15.91 17.72V20.24H19.53C21.46 18.49 22.56 15.63 22.56 12.25Z" fill="#4285F4"></path>
                      <path d="M12.27 23C15.14 23 17.58 22.05 19.53 20.24L15.91 17.72C14.96 18.39 13.73 18.77 12.27 18.77C9.57001 18.77 7.24001 16.94 6.34001 14.4H2.60001V16.99C4.54001 20.61 8.11001 23 12.27 23Z" fill="#34A853"></path>
                      <path d="M6.34 14.4C6.1 13.73 5.96 12.99 5.96 12.22C5.96 11.45 6.1 10.71 6.34 10.04V7.45H2.6C1.96 8.85 1.54 10.47 1.54 12.22C1.54 13.97 1.96 15.59 2.6 16.99L6.34 14.4Z" fill="#FBBC05"></path>
                      <path d="M12.27 5.67C13.82 5.67 15.22 6.22 16.27 7.2L19.62 3.86C17.58 1.99 15.14 1 12.27 1C8.11001 1 4.54001 3.39 2.60001 7.45L6.34001 10.04C7.24001 7.5 9.57001 5.67 12.27 5.67Z" fill="#EA4335"></path>
                    </svg>
                    <span className="truncate">Continue with Google</span>
                  </button>
                  <button 
                    onClick={handleLogin}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-gray-800 text-white text-sm font-medium leading-normal tracking-[0.015em] w-full border border-gray-700 hover:bg-gray-700 transition-colors"
                  >
                    <svg className="mr-2" fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.417 4.86 20.164 8.84 21.486C9.485 21.602 9.69 21.218 9.69 20.895C9.69 20.601 9.68 19.89 9.675 19.018C6.98 19.61 6.33 17.72 6.33 17.72C5.755 16.225 4.965 15.86 4.965 15.86C3.815 15.085 5.055 15.1 5.055 15.1C6.315 15.19 7.025 16.37 7.025 16.37C8.15 18.255 9.965 17.73 10.63 17.43C10.74 16.645 11.06 16.12 11.41 15.82C8.815 15.515 6.055 14.535 6.055 10.6C6.055 9.33 6.51 8.31 7.235 7.555C7.11 7.25 6.75 6.225 7.355 4.77C7.355 4.77 8.41 4.435 10.59 5.86C11.605 5.58 12.68 5.435 13.75 5.43C14.82 5.435 15.895 5.58 16.91 5.86C19.09 4.435 20.145 4.77 20.145 4.77C20.75 6.225 20.39 7.25 20.265 7.555C20.99 8.31 21.445 9.33 21.445 10.6C21.445 14.545 18.68 15.515 16.08 15.82C16.51 16.2 16.895 16.93 16.895 18.01C16.895 19.53 16.88 20.72 16.88 21.015C16.88 21.34 17.085 21.61 17.74 21.485C21.72 20.16 24.58 16.415 24.58 12C24.58 6.477 20.103 2 13.79 2C13.21 2 12.615 2 12 2Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                    <span className="truncate">Continue with GitHub</span>
                  </button>
                </div>
              </div>

              <p className="text-gray-400 text-sm font-normal leading-normal py-3 text-center">or continue with</p>

              <div className="flex flex-col gap-4 py-3">
                <label className="flex flex-col">
                  <span className="text-white text-sm font-medium leading-normal pb-2">Email</span>
                  <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-600 bg-background-dark focus:border-primary h-12 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" placeholder="Enter your email address" type="email" />
                </label>
                <label className="flex flex-col">
                  <span className="text-white text-sm font-medium leading-normal pb-2">Password</span>
                  <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-600 bg-background-dark focus:border-primary h-12 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" placeholder="Enter your password" type="password" />
                </label>
              </div>

              <div className="flex justify-end pt-2 pb-4">
                <a className="text-sm font-medium text-primary hover:text-primary/80 transition-colors" href="#">Forgot Password?</a>
              </div>

              <button 
                onClick={handleLogin}
                className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
              >
                <span className="truncate">Sign In</span>
              </button>

              <p className="text-gray-400 text-sm font-normal leading-normal pt-6 text-center">
                Don't have an account? <a className="font-medium text-primary hover:text-primary/80 transition-colors" href="#">Sign up</a>
              </p>
            </div>
            <p className="text-gray-400 text-xs text-center mt-8 max-w-sm mx-auto">
              Participants can join events without an account. Registration is for organizers only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;