import React from 'react'
import { checkUser } from '@/lib/checkUser'

export default function Navbar() {
  const user = checkUser();
  return (
    <div>
      <h1>Navbar</h1>
    </div>
  )
}
