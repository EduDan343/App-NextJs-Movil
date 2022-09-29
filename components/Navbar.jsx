import React from 'react'
import styles from './Navbar.module.css'
import { BiSearchAlt2, BiUserCircle } from "react-icons/bi"

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <h2 className="Navbar titulo">TYERRA</h2>
      <div className={styles.search}>
        {/* <input placeholder='Buscar' /> */}

        <BiSearchAlt2 className={styles.icon} />

        {/* <h4>Perfil</h4> */}
        <BiUserCircle className={styles.icon2} />
      </div>
    </nav>
  );
}

export default Navbar