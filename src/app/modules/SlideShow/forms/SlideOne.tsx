import React from "react"
import { motion } from 'framer-motion';
import { ISlideOneProps } from "../SlideShow.interfaces";
import ExpandArrow from "@assets/icons/expand-arrow.png";

function SlideOne(props:ISlideOneProps) {
const { state, setState } = props

return (
    <React.Fragment>
        {state.slide === 1 && 
            <motion.div
                className="main-container"
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration: 2}}
            >
            <div className="background-container">
                <div className="page-overlay"></div>
                <video autoPlay muted loop>
                    <source src={state.backgroudVideo} dns-prefetch="true" type="video/mp4" />
                </video>
            </div>
            <div className="body-container">
                <header>
                <div className="header-section-1">
                    <button className="btn-logo-dark">
                        LOGO
                    </button>
                </div>
                <div className="header-section-2"></div>
                </header>
                <div className="content">
                <main>
                    <h1>
                        LOREM <u>IPSUM</u> DOLOR
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.<br/>
                        Quisque volutpat mattis eros.
                    </p>
                </main>
                <aside className="left-sidebar"></aside>
                <aside className="right-sidebar">
                    <div className="indicator-selected"/>
                    <div 
                        className="indicator-unselected" 
                        onClick={()=> setState({...state, slide : 2})}
                    />
                </aside>
                </div>
                <footer>
                    <img className="img-expand-arrow" alt="expand error" src={ExpandArrow} onClick={()=> setState({...state, slide : 2})}/>
                </footer>  
            </div>
            </motion.div>
        }
    </React.Fragment>
    )
}
export default SlideOne;