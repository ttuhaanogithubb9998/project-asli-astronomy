import React from 'react';
import './News.scss';
import { latestNewsData } from '../../../data/latestNewsData';
function News({ keyId }) {
    const data = latestNewsData.find((item) => item.latest_new_item_id === keyId);
    
    return (
        <div className='news'>
            <h3 className='news-title'>{data.latest_new_item_title}</h3>
            <p className='news-author'>{data.latest_new_item_author}</p>
            <p className='news-time'>{data.latest_new_item_date}</p>
            <div className='news-img'>
                <img src={require(`../../../${data.src_img_item.slice(2)}`).default} alt="" />
                <p className='news-img-caption'>{data.img_caption}</p>
            </div>
            {data.latest_new_item_data.map((item, i) => {
                let src = require(`../../../${item.scr_img.slice(2)}`).default

                return (
                    <div key={i} className="news-data-item">
                        <h6>{item.title}</h6>
                        {src &&
                            <div className='news-data-item-img'>
                                <img src={src} alt="" />
                                <p className='news-data-item-img-caption'>{item.caption}</p>
                            </div>
                        }
                        <p>{item.data}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default News;