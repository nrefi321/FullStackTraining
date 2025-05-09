import Navbar from '@/components/front/Navbar'
import Footer from '@/components/front/Footer'
import { Outlet } from 'react-router'

export default function MainLayout(){
  return (
    <>
      <Navbar />
        <div>
          <Outlet />
        </div>
      <Footer />
    </>
  )
}
