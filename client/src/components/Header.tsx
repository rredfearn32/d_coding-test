import React from 'react';

const Header: React.FC = () => {

    return(
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <div className='row'>
                    <div className="col-12">
                        <div className="navbar-brand">
                            <strong>Rekorder</strong>lite
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;