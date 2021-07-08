import React from 'react'
import {useState, useEffect} from 'react'
import S from './cell.module.scss'

import picX from '../../images/X.png'
import picO from '../../images/O.png'

type CellProps = {
  pushed?: boolean
  value?: string
  index?: number
  onClick?: (id: number) => void
}

function Cell(props: CellProps) {
  const {
    pushed = false,
    value = 'none',
    index = 0,
    onClick,
  } = props

  const [X, setX] = useState(false)
  const [O, setO] = useState(false)

  useEffect(() => {
    switch (value) {
      case 'X': {
        setX(true)
        break
      }
      case 'O': {
        setO(true)
        break
      }
      default: {
        if (pushed) {
          console.error('push error')
        }
      }
    }
  })

  return (
    <div 
      className={S.cell}
      data-pushed={pushed}
      data-X={X}
      data-O={O}
      onClick={() => onClick(index)}
    >
      {X && <img src={picX} className={S.icon} />}
      {O && <img src={picO} className={S.icon} />}
    </div>
  )
}

export default Cell