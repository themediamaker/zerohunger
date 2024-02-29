import React from 'react'
// import {AuthContextProvider} from '@/Context/AuthContext'
import {AuthContextProvider} from '../../Context/AuthContext'

 const layout = ({children}) => {
  return (
    <div>
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
        </div>
  )
}
export default layout
