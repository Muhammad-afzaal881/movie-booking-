import './Navbar.css'
function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>CineMax</h1>
        <p>Book your movie tickets now</p>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </header>
  );
}

export default Navbar;
