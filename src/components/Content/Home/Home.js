import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom'
import { latestNewsData } from '../../../data/latestNewsData'

function Home() {

    const scroll = () => {
        window.scroll(0, 0)
    }
    return (
        <div className="home">
            <h1 className="title">PROMINENT</h1>
            {latestNewsData.map((item, i) => {
                if (i < 5) {
                    return (
                        <div key={i} className='home-prominent-item'>
                            <Link to={`/news/${item.latest_new_item_id}`} onClick={() => scroll()}>
                                <h3 className='home-prominent-item-title' >{item.latest_new_item_title}</h3>
                            </Link>
                            <p className='home-prominent-item-time'>{item.latest_new_item_date}</p>
                            <div className='home-prominent-item-img'>
                                <Link to={`/news/${item.latest_new_item_id}`} onClick={() => scroll()}>
                                    <img src={require(`../../../${item.src_img_item.slice(2)}`).default} alt="" />
                                </Link>
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