import React from 'react';
import { latestNewsData } from '../../../data/latestNewsData'
import { Link } from 'react-router-dom'


function RandomNews({pathGit}) {
    const arr = [];
    let number;
    let check;
    for (let i = 0; i < 12; i++) {
        do {
            number = Math.floor((Math.random() * (latestNewsData.length - 1)));
            check = arr.some(a => a === number);
        } while (check);
        arr.push(number);
    }

    return (
        <div className="random-news row">
            {arr.map(i => {
                let item = latestNewsData[i];
                return (
                    <div key={i} className="col-md-3 col-sm-6 col" >
                        <Link to={`${pathGit}/news/${item.latest_new_item_id}`}>
                            <div className="card text-left">
                                <img src={require(`../../../${item.src_img_item.slice(2)}`).default} alt="" onClick={() => window.scroll(0, 0)} />
                                <div className="card-body">
                                    <p className="card-text">{item.latest_new_item_title}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default RandomNews;