import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import './About.css';
import { NavLink } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function About() {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "about"]{
            aboutintro,
            aboutpara1,
            interesttitle1,
            interestbody1,
            interesttitle2,
            interestbody2,
            interesttitle3,
            interestbody3,
            aboutpgImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setAboutData(data))
        .catch(console.error);
    }, []);

    return (

        <main>

                {aboutData && aboutData.map((about, index) => (
                
                <>
                    <h1 className='pagetitle boldfont text-2xl md:text-3xl lg:text-4xl'>
                    A bit about me
                    </h1>
                    <br />
                    <br />

                    <div className='aboutcontainer clearfix'>
                        <div className='row'>
                            <div className='aboutcolumn'>
                                <div className='aboutpgimage'>
                                    <img
                                        src={about.aboutpgImage.asset.url}
                                        alt="of me"
                                    />
                                </div>
                            </div>
                            <div className='aboutcolumn'>
                                <div className='aboutbox center'>
                                    <p className='captionfont md:text-sm lg:text-xl'>
                                        {about.aboutintro}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='aboutme--main'>
                        <div className='row'>
                            <div className='column'>
                                <h1 className='boldfont text-2xl lg:text-3xl'>
                                Background
                                </h1>
                                <br />  
                            </div>                      
                            <div className='column'>
                                <BlockContent className='prose bodyfont'
                                    blocks={about.aboutpara1}
                                    prrojectId="fgis4mwp"
                                    dataset="production"
                                />
                            </div>
                        </div>

                        <br />
                        <br />
                        <h1 className='boldfont text-2xl lg:text-3xl'>
                                Interests
                        </h1>

                        <br />

                        <div className='row'>
                            <div className='column'>
                                <h2 className='aboutcreamtitle text-2xl lg:text-3xl'>
                                    {about.interesttitle1}
                                </h2>
                            </div>
                            <div className='column'>
                                <p className='prose bodyfont'>
                                    {about.interestbody1}
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='column'>
                                <h2 className='aboutcreamtitle text-2xl lg:text-3xl'>
                                    {about.interesttitle2}
                                </h2>
                            </div>
                            <div className='column'>
                                <p className='prose bodyfont'>
                                    {about.interestbody2}
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='column'>
                                <h2 className='aboutcreamtitle text-2xl lg:text-3xl'>
                                    {about.interesttitle3}
                                </h2>
                            </div>
                            <div className='column'>
                                <p className='prose bodyfont'>
                                    {about.interestbody3}
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className='btncontainer'>
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

                    </div>

                </>
        ))}

        </main>
    )
};