'use client'
import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset any previous error messages
    setError('');

    // Replace this with your login logic
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
    } else if (username !== 'demo' || password !== 'password') {
      setError('Invalid username or password.');
    } else {
      alert(`Logged in as ${username}`);
      // Clear the form after successful login (optional)
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500">
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="text-center mb-4">
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
