import React, { FC } from 'react';

import { Link } from 'react-router-dom';

const Header: FC = () => {

    const PAGELINKS = [
        {
            name: 'History',
            url: '/history'
        },
        {
            name: 'About',
            url: '/about'
        }
    ];

    const renderPageLinks: any = () => {
        return PAGELINKS.map((link, index) => {
            return (
                <li key={link.name + index}>
                    <Link to={link.url} className="text-light ml-3">
                        {link.name}
                    </Link>
                </li>
            )
        });
    }

    return(
        <nav className='navbar-dark bg-dark pb-2 pt-2'>
            <div className='container'>
                <div className='row'>
                    <div className="col-12">
                        <div className=" d-flex justify-content-between">
                            <div className="navbar-brand">
                                <Link to="/" className="text-light"><strong>Rekorder</strong>lite</Link>
                            </div>
                            <ul className="text-light list-unstyled d-flex align-items-center mb-0">
                                {renderPageLinks()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;