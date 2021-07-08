import React from 'react'
import S from './content.module.scss'

type ContentProps = {
  children?: React.ReactNode,
}

export default function Content({children}: ContentProps) {
  return (
    <div className={S.content}>
      {children}
    </div>
  )
}