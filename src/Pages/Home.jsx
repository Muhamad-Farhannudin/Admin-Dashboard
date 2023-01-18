import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import '../index.css'

export default function Home() {
  return (
    <div className='scrollbar-hide'>
      <Navbar />
      <Main />
    </div>
  )
}
