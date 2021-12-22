import React from 'react';

function LibraryNavbar({ data, handleKey }) {
    const dropDown = (e) => {
        let parent;
        if(e.target.children.length > 0) {
            parent = e.target.parentElement;
        }else{
            parent = e.target.parentElement.parentElement
        }
        parent.children[0].classList.toggle("button-toggle")
        parent.children[1].classList.toggle("group-toggle")
    }
    return (
        <div className='library-navbar'>
            <div className="library-navbar-button " onClick={e=>dropDown(e)}> 
                <div className="library-navbar-button-group left">
                </div>
                <div className="library-navbar-button-group right">
                </div>
            </div>
            <div className="library-navbar-group ">
                {data.product__data.map((item, i) => {
                    return (
                        <div key={i} className='library-navbar-item' >
                            <span onClick={() => handleKey(item.product_item_id)}>{i + 1 + ". " + item.product_item_title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default React.memo(LibraryNavbar);