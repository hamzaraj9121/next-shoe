// import React from 'react'
// import Link from 'next/link'
// const Navbar = () => {
//   return (
// <div>
// <nav >
//   <ul className='d-flex gap-5 bg-secondary pt-3 px-3 py-3'>
//   <Link href={"/"} className='text-decoration-none text-dark'>Home</Link>
//          <Link  href={"/aboutus"}className='text-decoration-none text-dark'>About Us</Link>

//            <Link  href={"/createProduct"} className='text-decoration-none text-dark'>CreateAdd </Link>
//   </ul>
// </nav>
  
// </div>

// )
// }

// export default Navbar


import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
       <nav
    className="navbar bg-dark border-bottom border-body"
    data-bs-theme="dark"
  >
{/* <nav className="navbar navbar-expand-lg bg-body-tertiary "> */}
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Hamza's Shoe Store
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/createProduct">
          Create Product
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/aboutus">
           About Us
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    </header>
  );
}

export default Navbar;
