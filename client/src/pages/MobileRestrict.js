import React from 'react'

function MobileRestrict() {
  return (
    <div className='flex flex-col items-center gap-3 justify-center h-screen'>
        <h1 className='text-red-400 font-bold text-2xl'>Access Denied</h1>
        <p className='w-3/4 text-center'>You cannot access this page in Mobile devices. Use desktop only</p>
    </div>
  )
}

export default MobileRestrict