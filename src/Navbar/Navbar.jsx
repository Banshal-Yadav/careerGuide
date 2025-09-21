import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Navbar() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    return (
        <nav className='navbar'>
            <Link to="/" id='logo'>SkillSync</Link>
            <div className='nav-buttons'>
                <button onClick={() => navigate("/")} id='analysis_btn'>Home</button>
                <button onClick={() => navigate("/AssessmentPg")} id='analysis_btn'>Analysis</button>
                
                {user && (
                    user.isAnonymous ? (
                        <>
                            <Link to="/profile" className='profile_btn_link'>
                                <button id='analysis_btn'>Profile</button>
                            </Link>
                            <button onClick={() => navigate('/login')} id='profile_btn'>Login / Sign Up</button>
                        </>
                    ) : (
                        // this view for registered users 
                        <>
                            <Link to="/profile" className='profile_btn_link'>
                                <button id='profile_btn'>Profile</button>
                            </Link>
                            <button onClick={logout} id='logout_btn'>Logout</button>
                        </>
                    )
                )}
            </div>
        </nav>
    );
}

export default Navbar;