import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import './Blog.css';
import BlockContent from "@sanity/block-content-to-react";

export default function Blog() {
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "blog"]{
            title,
            place,
            date,
            body,
            tags,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setBlogData(data))
        .catch(console.error);
    }, []);

    return(

    <>

        <h1 className='pagetitle boldfont text-2xl md:text-3xl lg:text-4xl'>
                    Blog
                    </h1>
                    <br />
                    <br />

            <div className='grid md:grid-cols-1 lg:grid-cols-2'>

                {blogData && blogData.map((blog, index) => (

                <>
            
                    <div className='cards'>
                        <div className='cards__container'>
                            <div className='cards__wrapper'>
                                <ul className='cards__items'>

                                    <li className='cards__item'>
                                        <div className='cards__item__link'>
                                            <figure className='cards__item__pic-wrap' data-category={blog.date}>
                                                <img src={blog.mainImage.asset.url} alt="Blog"
                                                className='cards__item__img'/>
                                            </figure>
                                            <div className='cards__item__info'>

                                                <h1 className='boldfont text-2xl lg:text-3xl'>
                                                    {blog.title}
                                                </h1>
                                                <br />
                                                <BlockContent className='prose bodyfont text-sm md:text-base lg:text-lg'
                                                blocks={blog.body}
                                                prrojectId="fgis4mwp"
                                                dataset="production"
                                                />
                                                <br />
                                                <div>
                                                    <span className="tagfont">{blog.tags.join(", ")}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

            </>

                ))}

        </div>

    </>

    )}