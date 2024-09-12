import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './Carousels.module.css';
import pro1 from '../../assets/pro1.png';
import pro2 from '../../assets/pro2.png';
import pro3 from '../../assets/pro3.png';
import pro4 from '../../assets/pro4.png';

function Carousels() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <h1 className={style.h1_tag}>Our Recent <span className={style.highlight}>Projects</span></h1>
            <div className={style.carouselContainer}>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={false}
                    showDots={false}
                    arrows={false}
                    customTransition="all 0.5s"
                    transitionDuration={500}
                    containerClass={style.sliderContainer}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className={style.project}>
                        <img src={pro1} alt="Project 1" className={style.projectImage} />
                        {/* <h3>Project 1</h3> */}
                    </div>
                    <div className={style.project}>
                        <img src={pro2} alt="Project 2" className={style.projectImage} />
                        {/* <h3>Project 2</h3> */}
                    </div>
                    <div className={style.project}>
                        <img src={pro3} alt="Project 3" className={style.projectImage} />
                        {/* <h3>Project 3</h3> */}
                    </div>
                    <div className={style.project}>
                        <img src={pro4} alt="Project 4" className={style.projectImage} />
                        {/* <h3>Project 4</h3> */}
                    </div>
                    <div className={style.project}>
                        <img src={pro1} alt="Project 5" className={style.projectImage} />
                        {/* <h3>Project 5</h3> */}
                    </div>
                    <div className={style.project}>
                        <img src={pro2} alt="Project 6" className={style.projectImage} />
                        {/* <h3>Project 6</h3> */}
                    </div>
                </Carousel>
            </div>
        </>

    );
}

export default Carousels;
