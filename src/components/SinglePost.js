import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import './SinglePost.css';
import Slider from 'react-simple-slideshow';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            tags,
            place,
            date,
            projectType,
            areaofFocus,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            mainImagecaption,
            body,
            bodyImage{
                asset->{
                    _id,
                    url
                }
            },
            bodyImagetext,
            body2,
            brief,
            rationale,
            response,
            bodyImage2{
                asset->{
                    _id,
                    url
                }
            },
            bodyImage2text,
            galleryImage1{
                asset->{
                    _id,
                    url
                }
            },
            caption1,
            galleryImage2{
                asset->{
                    _id,
                    url
                }
            },
            caption2,
            galleryImage3{
                asset->{
                    _id,
                    url
                }
            },
            caption3,
            galleryImage4{
                asset->{
                    _id,
                    url
                }
            },
            caption4,
            }`
        )
        .then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div class="loader"></div>;

    return (

        <>
        <head>
                    <meta name="title" property="og:title" content={singlePost.title} />
                    <meta name="image" property="og:image" content={singlePost.mainImage.asset.url} />
        </head>

        <main>
            <body>

                    <section>
                    <header>

                        <div>
                            <h1 className='pagetitle boldfont text-2xl md:text-3xl lg:text-4xl'>
                                    {singlePost.title}
                            </h1>
                            <h2 className='bodyfont portfolio-margin bodyfont text-base md:text-lg lg:text-2xl'>{singlePost.date}</h2>
                            <br />
                            <br />
                        </div>
                        <div className='portfolio-margin'>
                                            
                                            <div className='inline-flex text-base'>
                                                <span className="boldfont">LOCATION&#160;</span>
                                                <span className="bodyfont">{singlePost.place}</span>
                                            </div>
                                            <br />
                                            <div className='inline-flex text-base'>
                                                <span className="boldfont">TYPE&#160;</span>
                                                <span className="bodyfont">{singlePost.projectType}</span>
                                            </div>
                                            <br />
                                            <div className='inline-flex text-base'>
                                                <span className="boldfont">AREA&#160;</span>
                                                <span className="bodyfont">{singlePost.areaofFocus}</span>
                                            </div>

                                            <br />
                                            <br />

                                            <div>
                                                <span className="boldfont">TAGS{" "}</span>
                                                <span className="tagfont">{singlePost.tags.join(", ")}</span>
                                            </div>

                        <br />
                        <br />

                        </div>

                    </header>

                        <div className='mainimage-block'>
                            
                                <img
                                    src={urlFor(singlePost.mainImage).url()} alt={singlePost.title}
                                    className='full-w-image'
                                />

                                <br />

                            <div className='row'>                  
                                <span className='portfolio-margin column'>
                                    <span className="boldfont">ABOVE&#160;</span>
                                    <span className="bodyfont">{singlePost.mainImagecaption}</span>
                                </span>
                            </div>

                            <br />
                            <br />
                        
                        </div>
                    
                    <article className='content-contain'>

                        <div className='project-overview-block'>

                                <div className='row'>
                                    <div className='column'>
                                        <h1 className='boldfont text-2xl lg:text-3xl'>
                                        Project Overview
                                        </h1>
                                        <br />  
                                    </div>                      
                                    <div className='column'>
                                        <BlockContent className='prose bodyfont'
                                            blocks={singlePost.body}
                                            prrojectId="fgis4mwp"
                                            dataset="production"
                                        />
                                    </div>
                                </div>
                                <br />
                                <br />
                            
                            </div>
                            <div className='body-image-block'>

                                <div className='row'>
                                    <div className='column'>
                                        <div className='cvimgcaption inline-flex text-base'>
                                            <span className="boldfont">IMAGE&#160;</span>
                                            <span className="bodyfont">{singlePost.bodyImagetext}</span>
                                        </div>
                                        <br />  
                                    </div>                      
                                    <div className='column'>
                                        <img src={singlePost.bodyImage.asset.url}
                                            alt={singlePost.bodyImagetext}
                                        />
                                    </div>
                                </div>

                            <br />
                            <br />

                            </div>

                            <div className='project-brief-block'>

                                <div className='row'>
                                    <div className='column'>
                                        <h1 className='boldfont text-2xl lg:text-3xl'>
                                        Project Brief
                                        </h1>
                                        <br />  
                                    </div>                      
                                    <div className='column'>
                                        <BlockContent className='prose bodyfont'
                                            blocks={singlePost.brief}
                                            prrojectId="fgis4mwp"
                                            dataset="production"
                                        />
                                    </div>
                                </div>
                                <br />
                                <br />
                            
                            </div>
                            <div className='project-rationale-block'>

                                <div className='row'>
                                    <div className='column'>
                                        <h1 className='boldfont text-2xl lg:text-3xl'>
                                        Design Rationale
                                        </h1>
                                        <br />  
                                    </div>                      
                                    <div className='column'>
                                        <BlockContent className='prose bodyfont'
                                            blocks={singlePost.rationale}
                                            prrojectId="fgis4mwp"
                                            dataset="production"
                                        />
                                    </div>
                                </div>
                                <br />
                                <br />
                            
                            </div>
                            <div className='project-response-block'>

                                <div className='row'>
                                    <div className='column'>
                                        <h1 className='boldfont text-2xl lg:text-3xl'>
                                        Design Response
                                        </h1>
                                        <br />  
                                    </div>                      
                                    <div className='column'>
                                        <BlockContent className='prose bodyfont'
                                            blocks={singlePost.response}
                                            prrojectId="fgis4mwp"
                                            dataset="production"
                                        />
                                    </div>
                                </div>
                                <br />
                                <br />
                            
                            </div>
                            <div className='body-image2-block'>

                                <div className='row'>
                                    <div className='column'>
                                        <div className='cvimgcaption inline-flex text-base'>
                                            <span className="boldfont">IMAGE&#160;</span>
                                            <span className="bodyfont">{singlePost.bodyImage2text}</span>
                                        </div>
                                        <br />  
                                    </div>                      
                                    <div className='column'>
                                        <img src={singlePost.bodyImage2.asset.url}
                                            alt={singlePost.bodyImage2text}
                                        />
                                    </div>
                                </div>

                            <br />
                            <br />

                            </div>
                            <div className='gallery-header'>
                                <div className='row'>
                                    <div className='column'>
                                        <h1 className='boldfont text-2xl lg:text-3xl'>
                                        Image Gallery
                                        </h1>
                                        <br />  
                                    </div> 
                                </div>
                            </div>

                            <br />

                            <div className='slideshow'>

                                <Slider width="100%" height="auto">
                                    <img src={singlePost.galleryImage1.asset.url} alt={singlePost.caption1} />
                                    <img src={singlePost.galleryImage2.asset.url} alt={singlePost.caption2} />
                                    <img src={singlePost.galleryImage3.asset.url} alt={singlePost.caption3} />
                                    <img src={singlePost.galleryImage4.asset.url} alt={singlePost.caption4} />
                                </Slider>

                            </div>

                    </article>

                </section>

            </body>
        </main>

    </>

    )
};