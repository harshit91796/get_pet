import React from 'react'
import styles from './header.module.css';
import { Pets, Search } from '@mui/icons-material';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
         <h1>logo</h1>
      </div>
      <div className={styles.topBarCenter}>
         <div className={styles.searchBar}>
         <Pets color='warning'/>
         <input placeholder='search for friend' className={styles.searchInput}/>
         </div>
       </div>
      
    </div>
  )
}

export default Header
