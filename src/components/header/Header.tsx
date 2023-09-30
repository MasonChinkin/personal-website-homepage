import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import DesktopContact from './DesktopContact'
import MobileContact from './MobileContact'
import classNames from 'classnames'

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const isMobile: boolean = window.innerWidth <= 768

  useEffect((): void => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 0 ? setScrolled(true) : setScrolled(false)
    })
  }, [setScrolled])

  const classes = classNames('nav-links', {
    'with-background': isMobile && scrolled,
  })

  return (
    <header>
      <DesktopContact />
      <MobileContact />
      <section className={classes}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          About
        </NavLink>
        <NavLink
          to="/d3"
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          D3 Projects
        </NavLink>
        <NavLink
          to="/other"
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          Other Projects
        </NavLink>
      </section>
    </header>
  )
}

export default Header
