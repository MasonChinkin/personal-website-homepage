import { useState, useEffect, FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Location } from 'history'
import DesktopContact from './DesktopContact'
import MobileContact from './MobileContact'
import classNames from 'classnames'

const Header: FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const isMobile: boolean = window.innerWidth <= 768

  const checkActive = (match: null, location: Location): boolean => {
    if (!location) return false
    return location.pathname === '/'
  }

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
        <NavLink activeClassName="selected" to="/" isActive={checkActive}>
          Home
        </NavLink>
        <NavLink activeClassName="selected" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="selected" to="/d3">
          D3 Projects
        </NavLink>
        <NavLink activeClassName="selected" to="/other">
          Other Projects
        </NavLink>
      </section>
    </header>
  )
}

export default Header
