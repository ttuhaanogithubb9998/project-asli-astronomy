import React, { useEffect } from 'react';
import { latestNewsData } from '../../data/latestNewsData'
import { libraryData } from '../../data/libraryData';



function Search({ email, phone, handleEventAction }) {
    const openMail = () => {
        window.open(`mailto:${email}`)
    }

    const openTel = () => {
        window.open(`tel:${phone}`)
    }

    const filter = (e) => {
        e.target.parentElement.children[2].style.display = 'block'
        let list = Array.from(e.target.parentElement.children[2].children)
        let last = list.pop();
        let listFilter = list.filter((item) => {
            item.style.display = 'none'
            return item.innerText.toString().toUpperCase().indexOf(e.target.value.toString().toUpperCase()) > -1
        })
        listFilter.forEach((item) => {
            item.style.display = 'block'
        })
        last.style.display = 'none';
        if (listFilter.length === 0) {
            last.style.display = 'block'
        }
    }
    useEffect(() => {
        window.addEventListener('click', e => {
            !e.target.closest('.search-box') && document.querySelector('.search-box-group') && (document.querySelector('.search-box-group').style.display = 'none')
        })
        if (window.innerWidth < 940) {
            window.addEventListener('click', e => {
                if (!e.target.closest('.search-box')) {
                    document.querySelector('.search-box-input').style.width = "0px";
                    document.querySelector('.search-box-input').style.padding = "0px";
                    document.querySelector('.search-box-input').style.transform = "translateX(0)";
                    document.querySelector('.search-box-group').style.transform = "translateX(0)";
                    document.querySelector('.search-box-icon i').style.display = "block";
                }
            })
        }
    }, []);

    const showSearch = (e) => {
        if (window.innerWidth < 940) {
            e.target.parentElement.parentElement.children[0].style.width = "300px";
            e.target.parentElement.parentElement.children[0].style.padding = "10px";
            e.target.parentElement.parentElement.children[0].style.transform = "translateX(-150px)";
            e.target.parentElement.parentElement.children[2].style.transform = "translateX(-150px)";
            e.target.style.display = "none";
        }
    }

    return (
        <div className="search"
        >
            <div className="logo" onClick={() => handleEventAction({ name: "library", key: "Home" })}>
                <div className="logo-img"><img src={require('../../img/banner/logo.png').default} alt="" /></div>
                <p className="logo-name">ASLI</p>
            </div>
            <div className="contact">
                <div className="contact-email" onClick={() => openMail()}>Email: {email}</div>
                <div className="contact-phone" onClick={() => openTel()}>Phone: {phone}</div>
            </div>
            <div className="search-box">
                <input
                    className="search-box-input"
                    onChange={e => filter(e)}
                />
                <p className="search-box-icon"><i className="material-icons" onClick={e => showSearch(e)}>search</i></p>
                <div className="search-box-group">
                    {latestNewsData.map((item, i) => {
                        return <p key={i} onClick={() => handleEventAction({ name: "news", key: item.latest_new_item_id })}>{item.latest_new_item_title}</p>
                    })}
                    {libraryData.map(item => {
                        return item.product__data.map((p) => {
                            return <p key={p.product_item_id} onClick={() => handleEventAction({ name: "library", key: item.product_id }, p.product_item_id)}>{p.product_item_title}</p>
                        })
                    })}
                    <span>Dose not exist!</span>
                </div>
            </div>
        </div>
    );
}

export default Search;  