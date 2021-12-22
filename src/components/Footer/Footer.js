import React from 'react';
import './Footer.scss';

import FormComment from './FormComment';

function Footer({ email, phone,handleEventAction }) {
    const openMail = () => {
        window.open(`mailto:${email}`)
    }
    const openTel = () => {
        window.open(`tel:${phone}`)
    }
    return (
        <div className="footer">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className="logo" onClick={() =>handleEventAction({name:"library",key:"Home"})}>
                        <div className="logo-img"><img src={require('../../img/banner/logo.png').default} alt="" /></div>
                        <p className="logo-name">ASLI</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="contact" >
                        <div className="contact-about">
                            <i className="material-icons">supervisor_account</i> About
                        </div>
                        <div className="contact-phone"
                            onClick={() => openTel()}
                        >
                            <i className="material-icons">phone</i>
                            {"142.857.9999"}
                        </div>
                        <div className="contact-email"
                            onClick={() => openMail()}
                        >
                            <i className="material-icons">email</i>
                            {"Ausy.asli@gmai.com"}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <FormComment />
                </div>
            </div>
        </div>
    );
}

export default React.memo(Footer);      