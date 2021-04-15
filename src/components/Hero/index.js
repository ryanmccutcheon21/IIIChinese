import React from 'react'
import NavBar from '../Navbar'
import { HeroContent, HeroContainer, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
    return (
        <HeroContainer>
            <NavBar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Chinese Food Ever</HeroH1>
                    <HeroP>Ready in minutes</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
