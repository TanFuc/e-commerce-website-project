// eslint-disable-next-line no-unused-vars
import React from 'react'
import Heading from '../Shared/Heading'

// import images
import Img1 from '/src/assets/blogs/blog-1.jpg';
import Img2 from '/src/assets/blogs/blog-2.jpg';
import Img3 from '/src/assets/blogs/blog-3.jpg';

const BlogData = [
    {
        title : "How to choose perfect smartwatch",
        subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos, modi labore odio laboriosam alias pariatur numquam quasi vel dolorem culpa voluptate provident, velit vitae reprehenderit magnam cum! Quam, ipsa!",
        published: "Jan 20, 2024 by Dilshad",
        image: Img1,
        aosDelay:"0",
    },
    {
        title : "How to choose perfect smartwatch",
        subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos, modi labore odio laboriosam alias pariatur numquam quasi vel dolorem culpa voluptate provident, velit vitae reprehenderit magnam cum! Quam, ipsa!",
        published: "Jan 20, 2024 by Dilshad",
        image: Img2,
        aosDelay:"200",
    },
    {
        title : "How to choose perfect smartwatch",
        subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos, modi labore odio laboriosam alias pariatur numquam quasi vel dolorem culpa voluptate provident, velit vitae reprehenderit magnam cum! Quam, ipsa!",
        published: "Jan 20, 2024 by Dilshad",
        image: Img3,
        aosDelay:"400",
    },
];


const Blogs = () => {
  return (
    <div className='my-12'>
      <div className='container'>
        {/* Header section */}
        <Heading title='Recent News' subtitle={"Explore Our Blogs"} />

        {/* Blog section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-6 gap-y-8 sm:gap-4 md:gap-7'>
        {/* Blog card */}
        {BlogData.map((data) =>
            (
            <div data-aos="fade-up"
            data-aos-delay={data.aosDelay} key={data} className='bg-white dark:bg-gray-900'>
                {/* image section */}
                <div className='overflow-hidden rounded-2xl mb-2'>
                    <img src={data.image} alt=""  className='w-full h-[220px] object-cover
                    rounded-2xl hover:scale-105 duration-500'/>
                </div>
                {/* content section */}
                <div className='space-y-2'>
                    <p className='text-xs text-gray-500'>{data.published}</p>
                    <p className='font-bold line-clamp-1'>{data.title}</p>
                    <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
