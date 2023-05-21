import './Main_Header_Sticky.scss'
import { NavBarIndividualComponentNames, NavBarNames, Translation } from '../../static';
import * as BsIcons from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box';

import { TextField, Fade,  } from '@mui/material';
import { translation } from '../../static';
import Main_header_Sticky_Modal from '../Custom_Component/For_Main_Header/Modal';
import Main_header_Sticky_Popup from '../Custom_Component/For_Main_Header/PopUp';
import Main_header_Sticky_Redirect from '../Custom_Component/For_Main_Header/Redirect';
//Webpack=>join=>[react,babel,...]=>use
//Webpack=>join=>[eslint,babel]=>use

const Main_Header_Sticky = () => {
    const [isFirstScroll, setIsFirstScrollActive] = useState(false)
    const [isSecondScroll, setIsSecondScrollActive] = useState(false)
    const [langauge, setLanguage] = useState<keyof Translation>("en")
    const scrollCountRef = useRef(0)


    console.log(scrollCountRef);

    const isFirstScrollActive = () => {
        console.log(window.scrollY);
        window.scrollY > 0 && scrollCountRef.current === 0 && (scrollCountRef.current++, setIsFirstScrollActive(true), setIsSecondScrollActive(false));
        window.scrollY > 100 && window.scrollY < 300 && scrollCountRef.current === 1 && (scrollCountRef.current++, setIsSecondScrollActive(true))
        window.scrollY === 0 && (scrollCountRef.current = 0, setIsFirstScrollActive(false), setIsSecondScrollActive(false))
    }
    useEffect(() => {
        window.addEventListener('scroll', isFirstScrollActive)
        return () => window.removeEventListener('scroll', isFirstScrollActive)
    }, [])
    return (
        <>
            <div className="main-header-sticky">
                <div className={isFirstScroll ? 'white-navbar' : 'navbar'}>
                    <div className='container'>
                        <div className="logo">
                            <Box className="bambla">dddddd</Box>
                            <div>{translation[langauge]?.NavBarNames.heading.name}<span className='fiverdot'>.</span></div>
                            <Fade timeout={300} in={isSecondScroll}>
                                <div className='search-box'>
                                    <div><TextField id="outlined-basic" variant="outlined" /></div>
                                </div>
                            </Fade>
                        </div>
                        <div className="navbar-options">
                            {Object.values(translation[langauge]?.NavBarNames).map((data: NavBarIndividualComponentNames) =>
                                data.popupOrRedirectorModal?.type==="modal" ? 
                                    <Main_header_Sticky_Modal data={data}/>
                                :
                                data.popupOrRedirectorModal?.type==='popup'?
                                    <Main_header_Sticky_Popup/>
                                :
                                data.popupOrRedirectorModal?.type==="redirect"?
                                    <Main_header_Sticky_Redirect/>
                                :null
                            )}

                        </div>
                    </div>
                </div>
                <Fade timeout={300} in={isSecondScroll}>
                    <div className='below-navbar'>
                        <div className='scroll-container'>
                            {Object.values(translation[langauge].BelowNavBars).map((a: any) => (
                                <span id={a.id}>{a.name}</span>
                            ))}
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    )
}
export default Main_Header_Sticky