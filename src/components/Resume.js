import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import "./Resume.css";
import { NavLink } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function Resume(){
    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "resume"]{
            location,
            contact,
            email,
            role,
            profile,
            digitalskills,
            personalskills,
            industryexperience,
            cvimagecaption,
            education,
            experience,
            cvImage1{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setResumeData(data))
        .catch(console.error);
    }, []);

    return(
        <main>
        
            <body class="CvBackground">

                {resumeData && resumeData.map((resume, index) => ( 


                    <section>
                        <header>
                            <div>
                                <h1 className='pagetitle boldfont text-2xl md:text-3xl lg:text-4xl'>
                                        CV.
                                </h1>
                                <br />
                                <br />
                            </div>

                            <div className='cv-contain'>
                                <>
                                    <div className='cv-head'>
                                    <h1 className='boldfont text-2xl lg:text-3xl'>
                                        Ashley James Powell
                                    </h1>
                                    <h2 className='creamtitle text-2xl lg:text-3xl'>
                                        {resume.role}
                                    </h2>
                                    <br />
                                    </div>
                                </>

                                <div class='cv-content'>

                                    <div className='row'>
                                        <div className='cv-column'>
                                            <BlockContent className='prose bodyfont'
                                                blocks={resume.profile}
                                                prrojectId="fgis4mwp"
                                                dataset="production"
                                        />
                                        <br />
                                        <br />
                                        <div className='inline-flex text-base'>
                                            <span className="boldfont">LOCATION&#160;</span>
                                            <span className="bodyfont">{resume.location}</span>
                                        </div>
                                        <br />
                                        <div className='inline-flex text-base'>
                                            <span className="boldfont">CONTACT&#160;</span>
                                            <span className="bodyfont">{resume.contact}</span>
                                        </div>
                                        <br />
                                        <div className='inline-flex text-base'>
                                            <span className="boldfont">EMAIL&#160;</span>
                                            <span className="bodyfont">{resume.email}</span>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                    </div>
                                    <div className='cv-column cv-skills'>
                                        <h1 className='boldfont text-2xl lg:text-3xl'>
                                        Skills
                                        </h1>
                                        <br />
                                        <h2 className='creamtitle text-2xl lg:text-3xl'>
                                        Digital Skills
                                        </h2>
                                        <br />
                                            <BlockContent className='prose bodyfont leading-none'
                                            blocks={resume.digitalskills}
                                            prrojectId="fgis4mwp"
                                            dataset="production"
                                            />
                                        <br />
                                        <h2 className='creamtitle text-2xl lg:text-3xl'>
                                        Personal Skills
                                        </h2>
                                        <br />
                                            <BlockContent className='prose bodyfont leading-none'
                                            blocks={resume.personalskills}
                                            prrojectId="fgis4mwp"
                                            dataset="production"
                                            />
                                        <br />
                                    </div>
                                </div>

                            </div>
                            
                            <div className='cv-experience'>

                                <div className='row'>
                                    <div className='cv-column'>
                                        <h1 className='boldfont text-2xl lg:text-3xl'>
                                        Industry Experience
                                        </h1>
                                        <br />  
                                    </div>                      
                                    <div className='cv-column'>
                                        <BlockContent className='prose bodyfont'
                                            blocks={resume.industryexperience}
                                            prrojectId="fgis4mwp"
                                            dataset="production"
                                        />
                                    </div>
                                </div>
                                <br />
                                <br />
                            
                            </div>
                            <div className='cv-image-block'>

                                <div className='row'>
                                    <div className='cv-column'>
                                        <div className='cvimgcaption inline-flex text-base'>
                                            <span className="boldfont">IMAGE&#160;</span>
                                            <span className="bodyfont">{resume.cvimagecaption}</span>
                                        </div>
                                        <br />  
                                    </div>                      
                                    <div className='cv-column'>
                                        <img src={resume.cvImage1.asset.url}
                                            alt="showing my work"
                                        />
                                    </div>
                                </div>

                            <br />
                            <br />
                            <br />

                            </div>
                            <div className='cv-experience2'>

                                <div className='row'>
                                    <div className='cv-column'>
                                        <h1 className='boldfont text-2xl lg:text-3xl'>
                                        Work Experience
                                        </h1>
                                        <br />  
                                    </div>                      
                                    <div className='cv-column'>
                                        <BlockContent className='prose bodyfont'
                                            blocks={resume.experience}
                                            prrojectId="fgis4mwp"
                                            dataset="production"
                                        />
                                    </div>
                                </div>
                                <br />
                                <br />
                            
                            </div>
                            <div className='cv-education'>

                                <div className='row'>
                                    <div className='cv-column'>
                                        <h1 className='boldfont text-2xl lg:text-3xl'>
                                        Education
                                        </h1>
                                        <br />  
                                    </div>                      
                                    <div className='cv-column'>
                                        <BlockContent className='prose bodyfont'
                                            blocks={resume.education}
                                            prrojectId="fgis4mwp"
                                            dataset="production"
                                        />
                                    </div>
                                </div>
                                <br />
                                <br />
                            
                            </div>

                            <div className='button-options'>

                                <NavLink to="/contact" className='btn--primary'
                                >
                                <br />
                                <br />
                                <br />
                                <br />
                                Contact me {">"}
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

                        </header>
                    </section>

                ))}
            </body>

        </main>
    )}