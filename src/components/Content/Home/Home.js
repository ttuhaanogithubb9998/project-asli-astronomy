import React from 'react';
import './Home.scss';

import { latestNewsData } from '../../../data/latestNewsData'

function Home({handleEventAction}) {
    return (
        <div className="home">
            <h1 className="title">PROMINENT</h1>
            {latestNewsData.map((item, i) => {
                if (i < 5) {
                    return (
                        <div key={i} className='home-prominent-item'>
                            <h3 className='home-prominent-item-title' onClick={()=>handleEventAction({name:"news",key:item.latest_new_item_id})}>{item.latest_new_item_title}</h3>
                            <p className='home-prominent-item-time'>{item.latest_new_item_date}</p>
                            <div className='home-prominent-item-img'>
                                <img src={require(`../../../${item.src_img_item.slice(2)}`).default} alt="" onClick={()=>handleEventAction({name:"news",key:item.latest_new_item_id})}/>
                                <p className='home-prominent-item-img-caption'>{item.img_caption}</p>
                            </div>
                            <p className='home-prominent-item-description'>{item.latest_new_item_data[0].data[0]}...</p>
                        </div>
                    )
                }
                else return ''
            })}
        </div>
    );
}

export default Home;