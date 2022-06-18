import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

function Schedule() {
  const {logout} = useContext(AuthContext)
  return (
    <>
    <div>Schedule</div>
    <button onClick={logout}>logout</button>
    </>
  )
}

export default Schedule