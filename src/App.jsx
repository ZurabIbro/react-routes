import styles from './App.module.css'
import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'


function App() {

  return (
    <div className={styles.app}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
