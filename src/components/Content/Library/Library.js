import React from 'react';
import './Library.scss';
import { useParams, Routes, Route } from "react-router-dom";
import { libraryData } from '../../../data/libraryData'

import LibraryNavbar from './LibraryNavbar';
import LibraryContent from './LibraryContent';




function Library() {
    let action = useParams()['*'];
    if (action.includes('/')) {
        action = action.slice(0, action.indexOf('/'))
    }
    const data = libraryData.find(item => item.product_id === action.replace('_', ' '));

    if (data === undefined) {
        window.location.pathname = '/notfound';
        return ''
    }

    return (
        <div className="library">
            <div className="row">
                <div className="col-md-4 ">
                    <LibraryNavbar data={data} path={action} />
                </div>
                <div className="col-md-8 ">
                    <Routes>
                        <Route path={`/${action}`} element={<LibraryContent data={data.product__data[0]} />} />
                        {data.product__data.map(item => {
                            return <Route key={item} path={`/${action}/${item.product_item_id}`} element={<LibraryContent data={item} />} />
                        })}
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Library;