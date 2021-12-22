import React, { useState, useEffect, useCallback } from 'react';
import './Library.scss';

import { libraryData } from '../../../data/libraryData'

import LibraryNavbar from './LibraryNavbar';
import LibraryData from './LibraryData';




function Library({ action,itemKey }) {
    const data = libraryData.find(item => item.product_id === action)
    const [keyId, setKeyId] = useState(data.product__data[0].product_item_id);
    const [dataContent, setDataContent] = useState(data.product__data.find(d => d.product_item_id === keyId));
    
    useEffect(() => {
        setKeyId(data.product__data[0].product_item_id);
    }, [data])

    useEffect(() => {

        itemKey && setKeyId(itemKey);
    },[itemKey])

    useEffect(() => {
        setDataContent(data.product__data.find(d => d.product_item_id === keyId))
    }, [keyId])

    const handleKey = useCallback((key) => {
        setKeyId(key);
        window.scrollTo(0, 0)
    },[])

    return (
        <div className="library">
            <div className="row">
                <div className="col-md-4 ">
                    <LibraryNavbar data={data} handleKey={handleKey} />
                </div>
                <div className="col-md-8 ">
                    <LibraryData data={dataContent} />
                </div>
            </div>
        </div>
    );
}

export default Library;