import React from 'react';

import { Link } from 'react-router-dom';

const Header: React.FC = () => {

    return(
        <nav className='navbar-dark bg-dark pb-2 pt-2'>
            <div className='container'>
                <div className='row'>
                    <div className="col-12">
                        <div className=" d-flex justify-content-between">
                            <div className="navbar-brand">
                                <Link to="/"><strong>Rekorder</strong>lite</Link>
                            </div>
                            <ul className="text-light list-unstyled d-flex align-items-center mb-0">
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;