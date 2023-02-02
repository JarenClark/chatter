import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
//import UserContext from '../lib/Store'
//import { supabase, fetchUserRoles } from 'lib/Store'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
