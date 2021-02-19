import { useState } from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { navVariants, navItemVariants } from '../../utils/animations'
import ActiveLink from '../ActiveLink/ActiveLink'
import NavMenu from './NavMenu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={`${styles.nav__container} container`}>
        <Link href='/'>
          <a className={styles.nav__logo}>
            <img
              src='/assets/shared/desktop/logo-dark.png'
              alt='Designo logo'
            />
          </a>
        </Link>
        <div
          className={
            isOpen
              ? `${styles.nav__hamburger} ${styles.nav__hamburger_open}`
              : `${styles.nav__hamburger}`
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src='/assets/shared/mobile/icon-hamburger.svg' alt='Menu icon' />
        </div>
        <motion.ul
          className={styles.nav__mobile}
          animate={isOpen ? 'open' : 'closed'}
          variants={navVariants}
          initial={false}
        >
          <motion.li
            className={styles.nav__mobile__item}
            variants={navItemVariants}
          >
            <ActiveLink activeClassName='active' href='/about'>
              <a>Our Company</a>
            </ActiveLink>
          </motion.li>
          <motion.li
            className={styles.nav__mobile__item}
            variants={navItemVariants}
          >
            <ActiveLink activeClassName='active' href='/locations'>
              <a>Locations</a>
            </ActiveLink>
          </motion.li>
          <motion.li
            className={styles.nav__mobile__item}
            variants={navItemVariants}
          >
            <ActiveLink activeClassName='active' href='/contact'>
              <a>Contact</a>
            </ActiveLink>
          </motion.li>
        </motion.ul>
        <NavMenu />
      </div>
    </nav>
  )
}

export default Navbar
