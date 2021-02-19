import styles from './Navbar.module.scss'
import ActiveLink from '../ActiveLink/ActiveLink'

const NavMenu = () => {
  return (
    <ul className={styles.nav__menu}>
      <li className={styles.nav__menu__item}>
        <ActiveLink activeClassName='active' href='/about'>
          <a>Our Company</a>
        </ActiveLink>
      </li>
      <li className={styles.nav__menu__item}>
        <ActiveLink activeClassName='active' href='/locations'>
          <a>Locations</a>
        </ActiveLink>
      </li>
      <li className={styles.nav__menu__item}>
        <ActiveLink activeClassName='active' href='/contact'>
          <a>Contact</a>
        </ActiveLink>
      </li>
    </ul>
  )
}

export default NavMenu
