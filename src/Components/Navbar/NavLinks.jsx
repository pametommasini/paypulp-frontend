import { NavLink } from 'react-router-dom'

const NavLinks = ({ width, accountType }) => {
  return (
    <div className={`nav-links ${width > 1000 ? 'nav-links-desktop' : 'nav-links-mobile'}`}>
      {!localStorage.getItem('token') && (
        <>
          <NavLink to="personal">
            <span>Personal</span>
          </NavLink>
          <NavLink to="business">
            <span>Business</span>
          </NavLink>
          <NavLink to="developer">
            <span>Developer</span>
          </NavLink>
          <NavLink to="qrpage">
            <span>QrPage</span>
          </NavLink>

          <NavLink to="help">
            <span>Help</span>
          </NavLink>
        </>
      )}
      {localStorage.getItem('token') && accountType === 'personal' && (
        <>
          <NavLink to="dashboard">
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="profile">
            <span>Profile</span>
          </NavLink>
          <NavLink to="/">
            <span>Placeholder</span>
          </NavLink>
          <NavLink to="help">
            <span>Help</span>
          </NavLink>
        </>
      )}
      {localStorage.getItem('token') && accountType === 'business' && (
        <>
          <NavLink to="dashboard">
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="profile">
            <span>Profile</span>
          </NavLink>
          <NavLink to="/">
            <span>Placeholder</span>
          </NavLink>
          <NavLink to="help">
            <span>Help</span>
          </NavLink>
        </>
      )}
    </div>
  )
}

export default NavLinks
