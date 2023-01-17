import React, { Component } from 'react'
import Slider from 'react-slick';

const settings = {
    autoplay: true,
    autoplaySpeed: 3000, 
    dots: false,
    slickArrow:false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrow:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:true
          }
        }
      ]

};


export default function MultiCarousel() {
    {
        return (
            <Slider {...settings} className='multi-slider'>
                <div>
                    <img src="https://frupro.com/wp-content/uploads/2022/10/Freshtalkdaily-header.webp" alt="" className='img-fluid' width={'152px'} height={'auto'}/>
                </div>
                <div>
                    <img src="https://frupro.com/wp-content/uploads/2022/10/fresh-produce-journal-logo.png" alt="" className='img-fluid' width={'152px'} height={'auto'}/>
                </div>
                <div>
                    <img src="https://frupro.com/wp-content/uploads/2022/10/Fresh-Plaza-Logo.png" alt="" className='img-fluid' width={'152px'} height={'auto'}/>
                </div>
                <div>
                    <img src="https://frupro.com/wp-content/uploads/2022/10/Horti-Daily-Logo.png" alt="" className='img-fluid' width={'152px'} height={'auto'}/>
                </div>
                <div>
                    <img src="https://frupro.com/wp-content/uploads/2022/10/Hortibiz-Daily.png" alt="" className='img-fluid' width={'152px'} height={'auto'}/>
                </div>
                <div>
                    <img src="https://frupro.com/wp-content/uploads/2022/10/Agrimetrics-Logo-1.png" alt="" className='img-fluid' width={'152px'} height={'auto'}/>
                </div>
                <div>
                    <img src="https://frupro.com/wp-content/uploads/2022/10/Verdict-logo.png" alt="" className='img-fluid' width={'152px'} height={'auto'}/>
                </div>
            </Slider>
        )
    }
}

