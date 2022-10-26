import React, { useLayoutEffect, useState } from "react"
import { motion } from 'framer-motion';
import { ICarouselContent, ISlideTwoProps } from "../SlideShow.interfaces";

import Swiper from 'react-id-swiper';
import SwiperCore, {Pagination, Navigation} from 'swiper';
import 'swiper/css/bundle';

SwiperCore.use([Pagination, Navigation]);

function SlideTwo(props: ISlideTwoProps) {
const { state, setState } = props
const swiperSetting = {
    freemode: true,
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
}

useLayoutEffect(()=>{
    const carouselItems = [] as Array<JSX.Element>;
    const carouselContent:Array<ICarouselContent> = [
        {
            title: "Lorem ipsum #1",
            content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttior mauris sit amet orci"
        },
        {
            title: "Lorem ipsum #2",
            content: "Aenean dignissim pellentesque felis sed egestas, ante et vulputate volupat."
        },
        {
            title: "Lorem ipsum #3",
            content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttior mauris sit amet orci"
        },
        {
            title: "Lorem ipsum #4",
            content: "Aenean dignissim pellentesque felis sed egestas, ante et vulputate volupat."
        },
        {
            title: "Lorem ipsum #5",
            content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttior mauris sit amet orci"
        }
    ];

    carouselContent.forEach((item: ICarouselContent, index: number)=>{
        carouselItems.push(
            <div key={`slide-${index}`}>
                <div className="slide">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </div>
            </div>
        );
    })

    setState({
        ...state,
        carouselItems
    })
},[])

return (
    <React.Fragment>
        {state.slide === 2 && 
            <motion.div 
                className="main-container"
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration: 2}}
            >
            <img className="background-image"/> 
            <div className="body-container">
                <header>
                    <div className="header-section-1">
                        <button className="btn-logo-light">
                            LOGO
                        </button>
                    </div>
                    <div className="header-section-2">
                        <a 
                            href="https://www.linkedin.com/in/foo-thin-chun-9b8605105" 
                            className="btn-more"
                        >
                            DISCOVER MORE
                        </a>
                    </div>
                </header>
                <div className="content">
                <main className="main-flex">
                    <h1>
                        DONEC NEC JUSTO
                    </h1>
                    <div className="main-carousel">
                        <Swiper {...swiperSetting}>
                            {state.carouselItems}
                        </Swiper>
                    </div>
                </main>
                <aside className="left-sidebar"></aside>
                <aside className="right-sidebar">
                    <div 
                        className="indicator-unselected" 
                        onClick={()=> setState({...state, slide : 1})}
                    />
                    <div className="indicator-selected"></div>
                </aside>
                </div>
                <footer></footer>  
            </div>
            </motion.div>
        }
    </React.Fragment>
    )
}
export default SlideTwo;