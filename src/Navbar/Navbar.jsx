import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <div id='logo'>Logo</div>
            <button  id='analysis_btn'> Analysis</button>
            <button id='profile_btn'>Profile</button>
        </nav>
    );
}

export default Navbar;