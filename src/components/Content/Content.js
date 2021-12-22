import React from 'react';
import './Content.scss'


import Home from './Home/Home'
import Banner from './Home/Banner';
import Library from './Library/Library';
import News from './News/News';
import RandomNews from './News/RandomNews';
import ListNews from './News/ListNews';
import FormComment from './FormComment'



function Content({ action, handleEventAction,itemKey }) {
    let _action = JSON.parse(action);
    return (
        <div className="content">
            <div className="content-1">
                {_action.key === "Home" && <Banner handleEventAction={handleEventAction}/>}
            </div>
            <div className="content-2">
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        {_action.key === "Home" &&
                            <Home handleEventAction={handleEventAction} />
                        }
                        {_action.name === "library" && _action.key !== "Home" && <Library action={_action.key} itemKey={itemKey} />}
                        {_action.name === "news" && _action.key !== "Home" && <News keyId={_action.key} />}
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="content-2-right">
                            <FormComment />
                            <ListNews handleEventAction={handleEventAction}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-3">
                <RandomNews handleEventAction={handleEventAction} />
            </div>
        </div>
    );
}

export default React.memo(Content);