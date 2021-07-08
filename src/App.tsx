import React from 'react'
import './App.css'

import Header from './components/header/header'
import Layout from './components/layout/layout'
import Content from './components/content/content'
import GameBoard from './components/game-board/game-board'

function App() {
  return (
    <React.StrictMode>
      <Header/>
      <Layout>
        <Content>
          <GameBoard/>
        </Content>
      </Layout>
    </React.StrictMode>
  )
}

export default App
