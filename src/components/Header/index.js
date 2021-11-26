import React from 'react'
import styles from './Header.module.css'

function Header ()  {
  return (
    <div className={styles.header}>
        <h1>Cheapterest</h1>
          <div className={styles.flexbutton}>
          <button className={styles.button} onClick="">home</button>
          <button className={styles.button} onClick="">Ajouter</button>
          </div>
    </div>
  )
}

export default Header
