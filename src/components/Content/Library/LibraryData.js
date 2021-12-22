import React from 'react';

function LibraryData({data}) {
    return (
        <div className = 'library-data'>
            <h4 className = 'library-data-title'>{data.product_item_title}</h4>
            <div className = 'library-data-img'>
                <img src = {require(`../../../${data.src_img_item.slice(2)}`).default} alt=""/>
                <p>{data.img_caption}</p>
            </div>
            <div className="library-data-description">
                {data.product_item_description.map((item,i)=>{
                    return (
                        <p key = {i}>{item}</p>
                    )
                })}
            </div>
            <div className="library-data-content">
                {data.interesting_facts.map((item,i)=>{
                    return <p key = {i}>{item}</p>
                })}
            </div>
        </div>
    );
}

export default React.memo(LibraryData);