import React, { createContext } from 'react'
import { useContext } from 'react'
export const DashboardContext = createContext()
export const DashboardContextProvider = ({children}) => {
   
    const data = "sandeep"
  return (
    <div>
<DashboardContext.Provider value={{data}}>
{children}
</DashboardContext.Provider>
    </div>
  )
}
