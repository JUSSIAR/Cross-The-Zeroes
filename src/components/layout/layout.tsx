import React from 'react'
import S from './layout.module.scss'

type Props = {
  children: React.ReactNode
}

function Layout(props: Props) {
  return ( 
    <div className={S.layout}>
      {props.children}
    </div>
  )
}

export default Layout