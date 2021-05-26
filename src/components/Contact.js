import React, { useState, useEffect } from "react"
import './Contact.css';
import sanityClient from "../client.js";
import { NavLink } from "react-router-dom";

export default function Contact() {
    const [contactData, setContactData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "contact"]{
            email,
            phone,
            contactImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setContactData(data))
        .catch(console.error);
    }, []);

    return (
        <main>

            {contactData && contactData.map((contact, index) => (

            <>
                <h1 className='pagetitle boldfont text-2xl md:text-3xl lg:text-4xl'>
                                Contact
                    </h1>
                    <br />
                    <br />

                <div className='contactpagecontainer'>

                    <img
                        src={contact.contactImage.asset.url}
                        alt="building in Berlin"
                        className='contactpageimage'
                    />

                    <div>
                        <br />
                        <h3 className='bodyfont text-base md:text-lg lg:text-2xl'>Contact me today via social media, email or give me a call</h3>
                        <br />
                        <h1 className='boldfont text-1xl md:text-2xl lg:text-3xl'>
                            Email: {contact.email}
                        </h1>
                        <br />
                        <h1 className='boldfont text-1xl md:text-2xl lg:text-3xl'>
                            Phone: {contact.phone}
                        </h1>
                        <br />
                        <h1 className='boldfont text-1xl md:text-2xl lg:text-3xl'>
                            Social Links:
                        </h1>
                        <br />
                        <div className="inline-flex">
                                    <div className='socialcolumn p-1'>
                                    <a href="https://www.instagram.com/ashleyjamescreative/" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/6096b485242ba59c1d1596e0_Instagram.png' alt="Link to my Instagram" width="35px" height="auto"/></a>
                                    </div>
                                    <div Class='socialcolumn p-1'>
                                        <a href="https://www.pinterest.co.uk/ashleyjames_interiors/" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/6096b485e1a137f2f2f36096_Pinterest.png' alt="Link to my Pinterest" width="35px" height="auto"/></a>
                                    </div>
                                    <div Class='socialcolumn p-1'>
                                        <a href="https://www.linkedin.com/in/ashley-powell-98000719a/" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/6096b485ec20c2b6b059ab44_LinkedIn.png' alt="Link to my LinkedIn" width="35px" height="auto"/></a>
                                    </div>
                        </div>
                    </div>

                    <br />

                    <div className='button-options'>

                        <NavLink to="/resume" className='btn--primary'
                        >
                        <br />
                        <br />
                        <br />
                        <br />
                        View my CV {">"}
                        </NavLink>

                        <NavLink to="/portfolio" className='btn--primary'
                        >
                        <br />
                        <br />
                        <br />
                        <br />
                        View my Portfolio {">"}
                        </NavLink>

                    </div>

                </div>
            </>
            ))}
        </main>
    )
};