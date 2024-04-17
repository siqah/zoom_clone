import React, { ReactNode } from 'react'


import Sidebar  from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "YOOM",
  description: "VIDEO CALLING APP ",
  icons: {
    icon: '/icons/logo.svg'
  }
};HomeLayout

function HomeLayout({ children} : {children: React.ReactNode}) {
  return (
    <main className='relative'>
      <Navbar/>
      <div className='flex'>
      <Sidebar/>
      <section
       className='flex min-h-screen flex-1 flex-col px-6 pd-6 pt-28 max-md:pd-14 sm:px-14'>
            <div className='w-full'>
              {children}
            </div>
        </section>
      </div>
        
    </main>
  )
}

export default HomeLayout