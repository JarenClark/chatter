import { useState } from 'react'
import { Inter } from '@next/font/google'
import { supabase } from '../lib/Store'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (type, username, password) => {
    try {
      const { error, data: { user } } =
        type === 'LOGIN'
          ? await supabase.auth.signInWithPassword({ email: username, password })
          : await supabase.auth.signUp({ email: username, password })
      // If the user doesn't exist here and an error hasn't been raised yet,
      // that must mean that a confirmation email has been sent.
      // NOTE: Confirming your email address is required by default.
      if (error) {
        alert('Error with auth: ' + error.message)
      } else if (!user) alert('Signup successful, confirmation mail should be sent soon!')
    } catch (error) {
      console.log('error', error)
      alert(error.error_description || error)
    }
  }

  return (
    <>
      <div className='flex justify-center items-center w-screen h-screen'>
        <div className="bg-gray-900 p-8 w-full max-w-md rounded-xl">
          <form>
            <div className='mb-4'>
              <label htmlFor="username" className="block mb-2">Email</label>
              <input
                type="text"
                className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                placeholder="Your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor='password' className="block mb-2">Password</label>
              <input
                type="password"
                className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <a
                onClick={(e) => {
                  e.preventDefault()
                  handleLogin('SIGNUP', username, password)
                }}
                href={'/channels'}
                className="bg-indigo-700 hover:bg-teal text-white py-2 px-4 rounded text-center transition duration-150 hover:bg-indigo-600 hover:text-white"
              >
                Sign up
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  handleLogin('LOGIN', username, password)
                }}
                href={'/channels'}
                className="border border-indigo-700 text-indigo-700 py-2 px-4 rounded w-full text-center transition duration-150 hover:bg-indigo-700 hover:text-white"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
