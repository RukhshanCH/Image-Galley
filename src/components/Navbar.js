import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const loc = useLocation();
  return (
    <>
      <div className="filter-buttons">
        <Link className={`btn ${loc.pathname === '/' ? 'active' : ''}`} to={'/'} data-filter="all">All</Link>
        <Link className={`btn ${loc.pathname === '/nature' ? 'active' : ''}`} to={'/nature'} data-filter="nature">Nature</Link>
        <Link className={`btn ${loc.pathname === '/city' ? 'active' : ''}`} to={'/city'} data-filter="city">City</Link>
        <Link className={`btn ${loc.pathname === '/animals' ? 'active' : ''}`} to={'/animals'} data-filter="animals">Animals</Link>
      </div>
    </>
  )
}

export default Navbar
