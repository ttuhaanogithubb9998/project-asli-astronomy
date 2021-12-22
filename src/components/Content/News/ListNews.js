import React from 'react';

import {latestNewsData} from '../../../data/latestNewsData'


function ListNews({handleEventAction}) {
    return (
        <div className="list-news">
            <h4 className="list-news-title">LATEST NEWS</h4>
            <div className="list-news-group">
                {latestNewsData.map((item)=>{
                    return(
                        <div key={item.latest_new_item_id} className="list-news-group-item" onClick={()=>handleEventAction({name:'news',key:item.latest_new_item_id})}>
                            <img alt={item.latest_new_item_title} src={require(`../../../${item.src_img_item.slice(2)}`).default} />
                            <p>{item.latest_new_item_title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default React.memo(ListNews);