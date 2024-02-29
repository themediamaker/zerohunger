"use client"
import React from 'react'
// import { PaymentContextProvider } from '@/Context/PaymentContext'

const layout = ({children}) => {
  return (
    <div>
        {/* <PaymentContextProvider> */}
        {children}
        {/* </PaymentContextProvider> */}
    </div>
  )
}

export default layout