import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul className="navbar nav me-auto mb-2 mb-lg-0">
                    <li className='nav-item me-2'>
                        <Link to="./Home"  style={{ color: 'Black' }} >Home</Link>
                    </li>
                    <li>
                        <Link to="./About"  style={{ color: 'Black' }} >About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;