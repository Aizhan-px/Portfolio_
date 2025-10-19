
import {Icon} from "../icon/Icon.tsx";
// import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";
import * as React from "react";



export  const Logo: React.FC = () => {
    return (
            <a onClick={() => {scroll.scrollToTop()}}>
                <Icon iconId={'git'} />
            </a>
    );
};


