import React from 'react';
import NavbarItem from './NavbarItem';
function Navbar() {
    const itemMenu = [
        ["Home"],
        ["Discover"],
        ["Solar System"],
        ["Star and Constellation", "Star", "Constellation"],
        ["Astronomical Works", "Space Probe", "Observatory"],
        ["Comets"],
        ["Astronomers"]
    ]
    const navbarToggle = (e) => {
        let parent;
        if (e.target.children.length > 0) {
            parent = e.target
        } else {
            parent = e.target.parentElement
        }
        parent.parentElement.children[0].classList.toggle("bg-toggle")
        parent.parentElement.children[2].classList.toggle("navbar-toggle")
        parent.parentElement.children[2].children[7].classList.toggle("close-toggle")

    }
    
    const navbarBurl = (e) => {
        e.target.parentElement.children[2].classList.toggle("navbar-toggle")
        e.target.parentElement.children[2].children[7].classList.toggle("close-toggle")
        e.target.classList.toggle("bg-toggle");
    }

    const navbarClose =(e)=>{
        e.target.parentElement.parentElement.children[2].classList.toggle("navbar-toggle")
        e.target.parentElement.parentElement.children[2].children[7].classList.toggle("close-toggle")
        e.target.parentElement.parentElement.children[0].classList.toggle("bg-toggle");
    }




    return (
        <div className="navbar-full">
            <div className="bg" onClick={(e) => navbarBurl(e)}></div>
            <div className="navbar-full-button" onClick={(e) => navbarToggle(e)} ><span ></span></div>
            <div className="navbar">
                {itemMenu.map((item, i) => {
                    return <NavbarItem key={i} item={item} />
                })}
                <div className="navbar-close" onClick={(e) => navbarClose(e)}></div>
            </div>
        </div>
    );
}

export default Navbar;