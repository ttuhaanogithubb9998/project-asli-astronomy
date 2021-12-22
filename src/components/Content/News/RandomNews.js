import React from 'react';
import {latestNewsData} from '../../../data/latestNewsData'



function RandomNews({handleEventAction}) {
    const arr = [];
    let number;
    let check;
    for(let i=0;i<12;i++){
        do{
            number = Math.floor((Math.random()*(latestNewsData.length-1)));
            check = arr.some(a=>a===number);
        }while(check);
        arr.push(number);
    }

    return (
        <div className="random-news row">
            {arr.map(i=>{
                let item = latestNewsData[i];
                return (
                    <div key={i} className="col-md-3 col-sm-6 col" >
                        <div className="card text-left">
                          <img src={require(`../../../${item.src_img_item.slice(2)}`).default}  alt="" onClick={()=>handleEventAction({name:"news",key:item.latest_new_item_id})}/>
                          <div className="card-body">
                            <p className="card-text">{item.latest_new_item_title}</p>
                          </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default RandomNews;