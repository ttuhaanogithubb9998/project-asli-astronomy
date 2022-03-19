import React from 'react';
import { Link } from 'react-router-dom'
function NavbarItem({ item ,pathGit}) {

    const dropDown = (e) => {
        let parent;
        if (e.target.children.length > 0) {
            parent = e.target
            e.target.children[0].classList.toggle("icon-tr")
        } else {
            parent = e.target.parentElement;
            e.target.classList.toggle("icon-tr")
        }
        parent.parentElement.classList.toggle("item-toggle")
        parent.parentElement.children[1].classList.toggle("ul-toggle")

    }


    if (item.length > 2) {
        return (
            <div className="navbar-item navbar-item2" >
                <div onClick={(e) => dropDown(e)} >{item[0]} <i className="fa fa-angle-down"></i></div>
                <div className="navbar-item-ul">
                    {item.map((it, i) => {
                        if (i !== 0) {
                            return (
                                <Link onClick = {e=>window.scroll(0,0)} key={i} to={`${pathGit}/library/` + it.replace(" ", '_')}>
                                    <div className="navbar-item-ul-li">{it}</div>
                                </Link>
                            )
                        }
                        return ""
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <Link onClick = {e=>window.scroll(0,0)} to={(item[0] === 'Home' && `${pathGit}/Home`) || `${pathGit}/library/` + item[0].replace(' ', "_")}>
                <div className="navbar-item"> {item}</div>
            </Link>
        );
    }
}

export default NavbarItem;