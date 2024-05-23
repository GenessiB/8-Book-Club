import { NavLink } from "react-router-dom";

export default function StatsDashboard(){
    return (
        <div className="stats-dashboard">
            <img/>
            <button className="stats-dashboard__badge_button">Badges</button>
            <NavLink className="stats-dashboard__profile_button">View My Profile</NavLink>
            <h2>My Statistics</h2>
            <div className="stats-dashboard__chart"></div>
        </div>
    );
}