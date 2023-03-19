import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('context', user);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('logged out');
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-2xl normal-case" to='/'>Idea Auth</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <Link className='btn btn-ghost normal-case text-xl' to='/'>Home</Link>
                        <Link className='btn btn-ghost normal-case text-xl' to='/orders'>Orders</Link>
                        <Link className='btn btn-ghost normal-case text-xl' to='/login'>Login</Link>
                        <Link className='btn btn-ghost normal-case text-xl' to='/register'>Register</Link>
                    </ul>
                    {user?.email && <span>Welcome, {user.email}</span>}
                    {
                        user?.email ?
                            <button onClick={handleSignOut} className="btn btn-error btn-xs">Log Out</button>
                            : <Link to='/login'>
                                <button className="btn btn-sm">Log In</button>
                            </Link>
                        }
                </div>
            </div>
        </div>
    );
};

export default Header;