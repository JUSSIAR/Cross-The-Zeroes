import React, { useEffect, useState } from 'react'
import S from './game-board.module.scss'

import Cell from '../cell/cell'

type CellType = {
  value: string
  pushed: boolean
}

type Board = CellType[]

const generateDefaultBoard = (): Board => {
  const result: Board = []
  for (let i: number = 0; i < 9; i++) {
    result.push({value: 'none', pushed: false})
  }
  return result
}

export default function GameBoard() {
  const [board, setBoard] = useState<Board>(generateDefaultBoard())
  const [count, setCount] = useState<number>(0)

  const onCellClick = (index: number) => {
    setBoard((oldBoard: Board) => oldBoard.reduce((
      acc: Board,
      cell: CellType,
      id: number
    ) => {
      if (id === index) {
        const char = (count & 1) ? 'O' : 'X'
        return [...acc, {value: char, pushed: true} as CellType]
      }
      return [...acc, cell]
    }, []))
    setCount((count) => ++count)
  }

  return (
    <div className={S.gameBoard}>
      {board.map((cell: CellType, index: number) => (
        <Cell
          value={cell.value} 
          pushed={cell.pushed}
          index={index}
          onClick={onCellClick}
        />
      ))}
    </div>
  )
}