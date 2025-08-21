import { Link } from "react-router-dom";
import "./styles/nav.css"; // import external css

export default function Nav() {
    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-logo">
                    <Link to="/">ig-analytics</Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/follow-back">Followers</Link></li>
                    <li><Link to="/docs">Docs</Link></li>
                </ul>
            </div>
        </nav>
    );
}
