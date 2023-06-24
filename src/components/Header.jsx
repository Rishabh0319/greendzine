import React from "react";
import logoImg from "../assets/company_logo.png";
import "./header.css";

const Header = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  return (
    <header className="header">
      <div className="logo-cont">
        <section className="logo">
          <img src={logoImg} alt="Greendzine Technologies" />
        </section>
        <h1 className="logo-title">Greendzine Technologies</h1>
      </div>
      <section className="search-cont">
        <input
          type="text"
          placeholder="search by first Name"
          onChange={handleSearch}
          value={searchTerm}
        />
      </section>
    </header>
  );
};

export default Header;
