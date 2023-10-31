import React from 'react'
import styles from './navbar.module.css';
import { Home, Message, Person, Queue } from '@mui/icons-material';

function Navbar() {
  return (
    <div className={styles.container}>
       <Home/>
       <Queue/>
       <Message/>
       <Person/>
    </div>
  )
}

export default Navbar
