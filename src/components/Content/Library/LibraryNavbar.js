import React from 'react';
import { Link } from 'react-router-dom'
function LibraryNavbar({ data, path }) {
    const dropDown = (e) => {
        let parent;
        if (e.target.children.length > 0) {
            parent = e.target.parentElement;
        } else {
            parent = e.target.parentElement.parentElement
        }
        parent.children[0].classList.toggle("button-toggle")
        parent.children[1].classList.toggle("group-toggle")
    }
    return (
        <div className='library-navbar'>
            <div className="library-navbar-button " onClick={e => dropDown(e)}>
                <div className="library-navbar-button-group left">
                </div>
                <div className="library-navbar-button-group right">
                </div>
            </div>
            <div className="library-navbar-group ">
                {data.product__data.map((item, i) => {
                    return (
                        <div key={i} className='library-navbar-item' >
                            <Link to={`/library/${path}/${item.product_item_id}`} onClick = {e=>window.scroll(0,0)}>
                                <span >{i + 1 + ". " + item.product_item_title}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default React.memo(LibraryNavbar);