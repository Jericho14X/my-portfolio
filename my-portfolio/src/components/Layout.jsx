import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav className="portfolio-nav">
        <div className="nav-group left-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
        </div>

        <div className="nav-logo">My Portfolio</div>
        <div className="nav-group right-nav">
          <Link to="/future">My Future Plan</Link>
          <Link to="/contact">Contacts</Link>
        </div>
      </nav>
      
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}