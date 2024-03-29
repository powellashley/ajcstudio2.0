import React, { useState, useEffect } from "react";
import './Home.css';
import sanityClient from "../client.js";
import { NavLink } from "react-router-dom";

export default function Home() {
    const [homeData, setHomeData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "home"]{
            hometxt,
            homepgImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setHomeData(data))
        .catch(console.error);
    }, []);

    return (

    <>
        <main className='homepage'>

            {homeData && homeData.map((home, index) => (
            
            <>             

                <h1 className='pagetitle boldfont text-2xl md:text-3xl lg:text-4xl'>
                            Hello, I'm Ashley.
                </h1>
                <br />
                <br />



                <div className='home-container'>
                    <div className='row'>
                        <div className='column'>
                            <div className='homepgimage'>
                                <img
                                    src={home.homepgImage.asset.url}
                                    alt="of me"
                                />
                            </div>
                        </div>
                        <div className='column'>
                            <div className='hometextbox'>
                                <h1 className='boldfont text-2xl md:text-3xl lg:text-4xl'>
                                    Junior Interior Designer + full time creative
                                </h1>
                                <br />
                                <h2 className='creamtitle text-2xl md:text-3xl lg:text-4xl'>
                                    Visualisation
                                </h2>
                                <br />
                                <h2 className='creamtitle text-2xl md:text-3xl lg:text-4xl'>
                                    User-Focused Design
                                </h2>
                                <br />
                                <h2 className='creamtitle text-2xl md:text-3xl lg:text-4xl'>
                                    Graphics
                                </h2>
                                <br />
                                <p class="bodyfont text-base lg:text-lg">
                                    {home.hometxt}
                                </p>

                                <br />
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
                        </div>
                    </div>
                </div>
            </>
            ))}
        </main>

    </>

    )
};