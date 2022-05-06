import React, { ReactNode } from 'react'
import Header from './Header'

interface LayoutProps {
  children: ReactNode;
}
function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <div className='container-wrapper'>
      <Header />
        <div>{children}</div>
    </div>
  )
}

export default Layout