import React, { useState, useEffect } from "react";
import sanityClient from "../client.js"
import { Link } from "react-router-dom";
import './Portfolio.css';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function Portfolio() {
    const [portfolioData, setPortfolio] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "portfolio"]{
            title,
            slug,
            areaofFocus,
            date,
            place,
            tags,
            projectType,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setPortfolio(data))
        .catch(console.error);
    }, []);

    return(
        <>

            <h1 className='pagetitle boldfont text-2xl md:text-3xl lg:text-4xl'>
                    Portfolio
                    </h1>
                    <br />
                    <br />

                    <div>
                    <h3 className='portfolio-margin bodyfont text-base md:text-lg lg:text-2xl'>View my portfolio of University, Personal and Freelance projects...</h3>  
                    </div>
            
                <div className='grid md:grid-cols-2 lg:grid-cols-3 align-self'>

                {portfolioData && portfolioData.map((portfolio, index) => (

            <>

            <div className='cards'>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>

                            <li className='cards__item'>
                                            <Link to={"/Portfolio/" + portfolio.slug.current} key={portfolio.slug.current} className='cards__item__link'>
                                                <figure className='cards__item__pic-wrap' data-category={portfolio.areaofFocus}>
                                                    <img src={portfolio.mainImage.asset.url} alt="Main Portfolio"
                                                    className='cards__item__img'/>
                                                </figure>
                                                <div className='cards__item__info'>

                                                    <h1 className='boldfont text-2xl lg:text-3xl'>
                                                        {portfolio.title}
                                                    </h1>
                                                    <br />

                                                    <div className='inline-flex text-base'>
                                                        <span className="boldfont">DATE&#160;</span>
                                                        <span className="bodyfont">{portfolio.date}</span>
                                                    </div>
                                                    <br />
                                                    <div className='inline-flex text-base'>
                                                        <span className="boldfont">LOCATION&#160;</span>
                                                        <span className="bodyfont">{portfolio.place}</span>
                                                    </div>
                                                    <br />
                                                    <div className='inline-flex text-base'>
                                                        <span className="boldfont">TYPE&#160;</span>
                                                        <span className="bodyfont">{portfolio.projectType}</span>
                                                    </div>

                                                    <br />
                                                    <br />

                                                    <div>
                                                        <span className="boldfont">TAGS{" "}</span>
                                                        <span className="tagfont">{portfolio.tags.join(", ")}</span>
                                                    </div>

                                                    
                                                </div>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                </div>
            </div>

            </>

        ))}

        </div>

        </>
    )
}