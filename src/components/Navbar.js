function Navbar() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
           <b> CineMax</b>
            <p className="mb-0 text-white">Book your movie tickets now</p>
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
