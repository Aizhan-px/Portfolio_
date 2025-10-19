import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll } from "react-scroll";
import {useEffect, useState} from "react";

export const GoTopBtn= () => {

    const [showBtn,setShowBtn] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 400) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
        },
        []);

    return (

        <>
            {showBtn && (
                <StyleGoToTopBtn onClick={()=>{scroll.scrollToTop()}}>
                    <Icon iconId={'arrowGoTop'} height={'15'} width={'16'} viewBox={'0 0 16 15'} />
                </StyleGoToTopBtn>
            )}

        </>

    )
}

const StyleGoToTopBtn = styled.button`
    background-color: rgba(124, 120, 120, 0.27);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`