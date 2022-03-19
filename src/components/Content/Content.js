import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './Content.scss'


import Home from './Home/Home'
import Banner from './Home/Banner';
import Library from './Library/Library';
import News from './News/News';
import RandomNews from './News/RandomNews';
import ListNews from './News/ListNews';
import FormComment from './FormComment'
if (sessionStorage.getItem('path') === 'true') {
    sessionStorage.setItem('path', 'false')
}
if (!sessionStorage.getItem('path') === 'true') {
    document.location.pathname = '/project-asli-astronomy'
}
sessionStorage.setItem('path', 'true')


function Content({pathGit}) {
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
                    <Route path={pathGit + "/"} element={<Banner pathGit={pathGit} />} />
                    <Route path={pathGit + "/Home"} element={<Banner pathGit={pathGit} />} />
                </Routes>
            </div>
            <div className="content-2" >
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <Routes>
                            <Route path={pathGit + '/'} element={<Home pathGit={pathGit} />} />
                            <Route path={pathGit + '/*'} element={<div> trang web khong ton tai</div>} />
                            <Route path={pathGit + "/Home/*"} element={<Home pathGit={pathGit} />} />
                            <Route path={pathGit + "/library/*"} element={<Library pathGit={pathGit} />} />
                            <Route path={pathGit + "/news/*"} element={<News pathGit={pathGit} />} />
                        </Routes>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="content-2-right">
                            <FormComment />
                            <ListNews pathGit={pathGit} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-3">
                <RandomNews pathGit={pathGit} />
            </div>
        </div>
    );
}

export default Content;