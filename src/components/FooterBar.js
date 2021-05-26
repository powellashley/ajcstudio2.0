import React from 'react';
import './Footer.css';

export default function FooterBar() {
    return (
            <section className='main-footer'>
                <div>
                    <h1 className='captionfont'>
                        Keep updated with what I'm up to!</h1>
                            <div className='socialItems inline-flex py-2'>
                                <div className='socialcolumn items-center p-1'>
                                <a href="https://www.instagram.com/ashleyjamescreative/" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/6096b485242ba59c1d1596e0_Instagram.png' alt="Link to my Instagram" width="30px" height="auto"/></a>
                                </div>
                                <div Class='socialcolumn items-center p-1'>
                                    <a href="https://www.pinterest.co.uk/ashleyjames_interiors/" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/6096b485e1a137f2f2f36096_Pinterest.png' alt="Link to my Pinterest" width="30px" height="auto"/></a>
                                </div>
                                <div Class='socialcolumn items-center p-1'>
                                    <a href="https://www.linkedin.com/in/ashley-powell-98000719a/" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/6096b485ec20c2b6b059ab44_LinkedIn.png' alt="Link to my LinkedIn" width="30px" height="auto"/></a>
                                </div>
                            </div>
                        <br />
                        <br />
                        <hr />

                        <div>
                            <br />
                            <p className='tagfont text-xs'>
                                &copy;{new Date().getFullYear()} Ashley James Creative | Web design + development by me
                            </p>
                            <br />
                        </div>
                
                </div>
            </section>
    )
};