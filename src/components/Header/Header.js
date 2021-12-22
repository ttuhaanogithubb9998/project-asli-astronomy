import './Header.scss';

import React from 'react';
import Navbar from './Navbar/Navbar'
import Search from './Search';

function Header({handleEventAction}) {
    return (
        <div className="header">
            <Search
                handleEventAction = {handleEventAction}
                email={"Ausy.asli@gmai.com"}
                phone = {"142.857.9999"}
            />
            <Navbar handleEventAction = {handleEventAction} />
        </div>
    );
}

export default React.memo(Header);