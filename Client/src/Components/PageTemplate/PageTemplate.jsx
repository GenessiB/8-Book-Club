import { NavLink } from "react-router-dom";
import StatsDashboard from "../StatsDashboard/StatsDashboard";

export default function PageTemplate({ children }) {
  return (
    <div className="pagetemplate">
      <header>
        <img className="logo" src="/logo2.png" />
        <div className="searchbar-placeholder"></div>
        {/* searchbar component */}
        <nav>
          <ul>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Feed</NavLink>
            </li>
            <li>
              <NavLink>Clubs</NavLink>
            </li>
            <li>
              <NavLink>Bookshelf</NavLink>
            </li>
          </ul>
        </nav>
        <button>
          <img className="profile-photo" />
        </button>{" "}
        {/*should open drop down menu option to view profile or logout */}
      </header>
      <div className="pagetemplate__body">
        <div className="pagetemplate__content">{children}</div>
      </div>
    </div>
  );
}
