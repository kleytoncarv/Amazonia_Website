import React from 'react';

function Header() {
  return (
    <header>
      <h2 className="logo">Amazônia</h2>
      <nav className="navigation">
        <a href="#" className="active">Home</a>
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="https://github.com/kleytoncarv">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
