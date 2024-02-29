"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import MatchesProvider from '../Context/matches/index'
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import DashboardProvider from '../Context/dashboard/DashboardProvider'
import { ImageDataProvider } from '../Context/imageContext/ImageDataProvider'
import { StateProvider } from '../Context/StateContext'
import reducer, { initialState } from '../Context/StateReducers'
import Head from 'next/head';
import { ProfileProvider } from '../Context/profileContext/ProfileProvider'
import RequestProvider from '../Context/RequestContext/RequestProvider'
import DisableRightClickInspect from '../../src/Components/DisableRightClickInspect ';
// import { Providers } from '@/Redux/provider'
// import { Provider } from 'react-redux'
// import { store } from '@/Redux/store'

const inter = Inter({ subsets: ['latin'] })
export function RootLayout({ children }) {
  // const router = useRouter();
  // const currentPath = router.pathname;

  // console.log(currentPath);
  return (
    <html lang="en">
      <Head>
        <title>Whatsapp</title>
        <link rel='shortcut icon' href='/favicon.png'></link>
        {/* <Link href></Link> */}
      </Head>
      <body className={inter.className}>
        {/* <Provider store={store}> */}
        <StateProvider initialState={initialState || {}} reducer={reducer}>
          <RequestProvider>
            <DashboardProvider>
              <MatchesProvider>
                <ImageDataProvider>
                  <ProfileProvider>
                    {children}
                    <DisableRightClickInspect/>
                  </ProfileProvider>
                </ImageDataProvider>
              </MatchesProvider>
            </DashboardProvider>
          </RequestProvider>
        </StateProvider>
        {/* </Provider> */}
      </body>
    </html>
  )
}

export default RootLayout