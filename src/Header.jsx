import styles from './App.module.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Features from './components/Features'
import Contact from './components/Contact'
import React from 'react'

function Header() {

  return (
    <div className={styles.header}>
        <div>
            <h2 className={styles.headTitle}>Cover</h2>
        </div>
        <div className={styles.links}>
            <Link to="/home" className={styles.link_1} >Home</Link>
            <Link to="/features" className={styles.link_2} >Features</Link>
            <Link to="/contact" className={styles.link_3} >Contact</Link>
        </div>
    </div>
  )
}

export default Header
