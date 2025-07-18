

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Lock, Loader, AlertCircle } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function EvaluatorLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const successMessage = location.state?.message;


  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (evaluator.status == 'main') {
  //     // If not approved, redirect to AverageProjectsList page by default
  //     navigate('/average-projects');
  //   } else {
  //      try {
  //     const response = await axios.post('https://hackathon-backend-w6z7.onrender.com/api/evaluator/login', credentials);
  //     const evaluator = response.data.evaluator;

  //     localStorage.setItem('evaluatorToken', response.data.token);
  //     localStorage.setItem('evaluatorId', evaluator._id);
  //     localStorage.setItem('evaluatorName', evaluator.username);
  //     localStorage.setItem('evaluatorUserName', evaluator.phone);
  //     localStorage.setItem('evaluatorDetails', JSON.stringify(evaluator));

  //     // Check approval status (adjust the field name as per your backend)
    
  //   } catch (err: any) {
  //     // If error from backend (403 = pending approval)
  //     if (err.response && err.response.data && err.response.data.message) {
  //       setError(err.response.data.message); // Show message from backend
  //     } else {
  //       setError('An unexpected error occurred. Please try again.');
  //     }
  //   }
  //     // Approved evaluators go to their dashboard
  //     navigate('/evaluator-dashboard');
  //   }

   
  // };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post('https://hackathon-backend-w6z7.onrender.com/api/evaluator/login', credentials);
    const evaluator = response.data.evaluator;

    localStorage.setItem('evaluatorToken', response.data.token);
    localStorage.setItem('evaluatorId', evaluator._id);
    localStorage.setItem('evaluatorName', evaluator.username);
    localStorage.setItem('evaluatorUserName', evaluator.phone);
    localStorage.setItem('evaluatorDetails', JSON.stringify(evaluator));

navigate('/evaluator-dashboard');
    // if (evaluator.status === 'main') {
    //   // If status is 'main', redirect to average projects page
    //   navigate('/average-projects');
    // } else {
    //   navigate('/evaluator-dashboard');
    // }
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.message) {
      // If error from backend (e.g., 403 = pending approval)
      setError(err.response.data.message); // Show message from backend
      toast.error(err.response.data.message); // Show toast notification
    } else {
      setError('An unexpected error occurred. Please try again.');
    }
  }
};



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Evaluator Login</h2>
        <p className="mt-2 text-center text-sm text-gray-600">Sign in to access your evaluator dashboard</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {successMessage && (
            <div className="mb-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-green-700">{successMessage}</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-md">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <p className="ml-3 text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  className="pl-10 block w-full border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  className="pl-10 block w-full border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
              </div>
            </div> */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  autoComplete="off"
                  required
                  className="pl-10 block w-full border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={credentials.username}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,10}$/.test(value)) {
                      setCredentials({ ...credentials, username: value });
                    }
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  autoComplete="off"
                  required
                  className="pl-10 block w-full border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={credentials.password}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,10}$/.test(value)) {
                      setCredentials({ ...credentials, password: value });
                    }
                  }}
                />
              </div>
            </div>



            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-3" />
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Not registered yet?</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => navigate('/evaluator-register')}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Register as an evaluator
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

    </div>
  );
}
