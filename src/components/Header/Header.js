import './Header.scss';

import React from 'react';
import Navbar from './Navbar/Navbar'
import Search from './Search';

function Header({pathGit}) {
    return (
        <div className="header">
            <Search
                email={"Ausy.asli@gmai.com"}
                phone = {"142.857.9999"}
                pathGit = {pathGit}
            />
            <Navbar pathGit = {pathGit} />
        </div>
    );
}

export default React.memo(Header);