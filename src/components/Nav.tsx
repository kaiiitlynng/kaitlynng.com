import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const pages = [
  { to: '/', label: 'Work', end: true },
  { to: '/more', label: '&more' },
  { to: '/about', label: 'about' },
]

const socials = [
  { href: 'https://github.com/kaiiitlynng', label: 'github' },
  { href: '#', label: 'linkedin' },
  { href: '#', label: 'resume' },
  { href: 'mailto:kaitlyn.g.ng@gmail.com', label: 'email' },
]

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.group}>
          {pages.map((page) => (
            <NavLink
              key={page.to}
              to={page.to}
              end={page.end}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
            >
              {page.label}
            </NavLink>
          ))}
        </div>
        <div className={styles.group}>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={styles.externalLink}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
