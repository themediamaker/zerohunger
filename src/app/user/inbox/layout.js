import React from 'react'
// import Mail from '@/layout/Mail/Mail'
import Mail from '../../../layout/Mail/Mail'

const layout = ({children}) => {
  return (
    <main>
      <div>
      <Mail/>
      </div>
    <div>
        {children}
    </div>
    </main>
  )
}

export default layout