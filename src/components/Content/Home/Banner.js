import React from 'react';

import { latestNewsData } from '../../../data/latestNewsData'


function Banner({handleEventAction}) {
    return (
        <div className="banner">
            <div id="carouselId" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active banner-img">
                        <img src={require(`../../../img/banner/1.jpg`).default} alt="" onClick={()=>handleEventAction({name:"library",key:"Solar System"})} />
                    </div>
                    {latestNewsData.map((item, i) => {
                        if (i < 5) {

                            return (
                                <div key={i} className='carousel-item banner-img'>
                                    <img src={require(`../../../${item.src_img_item.slice(2)}`).default} alt="" onClick={()=>handleEventAction({name:"news",key:item.latest_new_item_id})}/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <p>{item.img_caption}</p>
                                    </div>
                                </div>
                            )
                        }
                        return ''
                    })}

                </div>
                <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Banner;