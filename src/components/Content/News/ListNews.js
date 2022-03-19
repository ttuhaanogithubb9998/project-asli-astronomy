import React from 'react';
import {Link} from 'react-router-dom';
import { latestNewsData } from '../../../data/latestNewsData'


function ListNews({pathGit}) {
    return (
        <div className="list-news">
            <h4 className="list-news-title">LATEST NEWS</h4>
            <div className="list-news-group">
                {latestNewsData.map((item) => {
                    return (
                        <Link to={`${pathGit}/news/${item.latest_new_item_id}`} key={item.latest_new_item_id}>
                            <div className="list-news-group-item" onClick={() => window.scroll(0, 0)}>
                                <img alt={item.latest_new_item_title} src={require(`../../../${item.src_img_item.slice(2)}`).default} />
                                <p>{item.latest_new_item_title}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default React.memo(ListNews);