import './Navbar.css'
// importing link for navigation
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className='navbar'>
            <Link to="/" id='logo'>SkillSync</Link>
            <div className='nav-buttons'>
                <button onClick={() => navigate("/AssessmentPg")} id='analysis_btn'>analysis</button>
                <Link to="/profile" className='profile_btn_link'>
                    <button id='profile_btn'>profile</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
