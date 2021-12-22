import React from 'react';

function NavbarItem({ item, handleEventAction }) {

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
                                <div
                                    key={i}
                                    className="navbar-item-ul-li"
                                    onClick={() => handleEventAction({name:"library",key:it})}
                                >
                                    {it}
                                </div>
                            )
                        }
                        return ""
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div className="navbar-item" onClick={() => handleEventAction({name:"library",key:item[0]})}>
                {item}
            </div>
        );
    }
}

export default NavbarItem;