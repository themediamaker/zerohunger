"use client"
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

 export const PaymentContext = createContext()
 export const PaymentContextProvider = ({children}) => {
    const [gold,setgold]=useState(false)
    const [primegold,setprimegold]=useState(false)
    const [primeplatinum,setprimeplatinum]=useState(false)
  return (
    <PaymentContext values={{gold,setgold,primegold,setprimegold,primeplatinum,setprimeplatinum}}>
{children}
    </PaymentContext>
  )
}

