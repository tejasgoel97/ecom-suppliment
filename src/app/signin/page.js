'use client'
import React, { useState } from 'react';
import signIn from "@/firebase/auth/signin"
import { useRouter } from 'next/navigation';
import { useAuthContext } from "@/context/AuthContext";



function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter()
  const { user } = useAuthContext()



  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset any previous error messages
    setError('');

    // Replace this with your login logic
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
    }
      try {
        alert(`Logged in as ${username}`);
        // Clear the form after successful login (optional)
        setUsername('');
        setPassword('');
        await signIn(username, password)
        router.back()
      } catch (error) {
        setError('Invalid username or password.');
      }

  };
  React.useEffect(() => {
    if (user !== null) router.push("/")
  }, [user])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-primary to-primary-lite">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div className="text-center mb-4">
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-lite text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Login
            </button>
          </div>
        </form>
        {error && (
          <div className="text-red-600 text-center bg-red-100 p-2 rounded-md">{error}</div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
