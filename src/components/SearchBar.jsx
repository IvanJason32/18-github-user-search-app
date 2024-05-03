import { useThemeContext } from "../hooks/useThemeContext";
import "./SearchBar.css";
import icon_search from "../assets/icon-search.svg";
import { useRef } from "react";

const SearchBar = ({ onUserNameChange, isFound }) => {
  const { isDark } = useThemeContext();
  const refInputUsername = useRef();
  
  const handleClick = async () => {
    const username = refInputUsername.current.value; 
    if (username !== "") {
        onUserNameChange(username);
    }
  };

  return (
    <div className={`searchBar_container ${isDark ? "dark" : "light"}`}>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="search-element">
          <img src={icon_search} alt="icono de busqueda" />
          <input
            className={`input-username ${isDark ? "dark" : "light"}`}
            type="text"
            name="user"
            id="user"
            ref={refInputUsername}
            placeholder="Search GitHub username…"
          />
        </div>
        <div className="search-element2">
          {isFound.err && <p className="error-alert">No results</p>}
          <button className="btn-search" onClick={handleClick}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
