'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">Chunga Secondary School Portal</h1>
        
        <div className="space-y-4">
          <button
            onClick={() => signIn('google')}
            className="w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Continue with Google
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-500">Or sign in with email</span>
            </div>
          </div>

          <input
            type="email"
            placeholder="student@chunga.edu.zm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
          />
          <button
            onClick={() => signIn('credentials', { email, password, redirect: true, callbackUrl: '/notes' })}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
