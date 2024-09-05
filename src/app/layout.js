'use client'

import './globals.css'

// import Header from '../Layout/Comman/Header'
// import Footer from '../Layout/Comman/Footer'


export default function RootLayout({ children }) {
  return (
  
    <>
    <html>
      <body>
      {children}
      </body>
    </html>
    {/* <Header/> */}
  
    {/* <Footer/> */}
    </>
  )
}
