import React from 'react';
import {Routes, Route} from 'react-router-dom'

import './Content.scss'


import Home from './Home/Home'
import Banner from './Home/Banner';
import Library from './Library/Library';
import News from './News/News';
import RandomNews from './News/RandomNews';
import ListNews from './News/ListNews';
import FormComment from './FormComment'



function Content() {
    // let action = window.location.pathname
    // console.log("action")
        // if(action === "Home"&&window.innerWidth<766) {
        //     document.querySelector('.content-2').style.overflowX = 'hidden';
        // }else{
        //     document.querySelector('.content-2').style.overflowX = '';
        // }

    return (
        <div className="content">
            <div className="content-1">
                <Routes>
                    <Route path = "/Home/*" element={<Banner />}/>
                    <Route path = "/" element={<Banner />}/>
                </Routes>
            </div>
            <div className="content-2" >
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <Routes>
                            <Route path ={"/"}  element = {<Home  />}/>
                            <Route path ={"/Home/*"}  element = {<Home  />}/>
                            <Route path ={"/library/*"} element = {<Library  />}/>
                            <Route path ={"/news/*"} element = {<News />}/>
                            <Route path='/*' element = {<div>trang web khong ton tai</div>}/>
                        </Routes>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="content-2-right">
                            <FormComment />
                            <ListNews />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-3">
                <RandomNews  />
            </div>
        </div>
    );
}

export default Content;