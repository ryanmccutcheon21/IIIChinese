import React, { useState } from 'react'
import NavBar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContent, HeroContainer, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <NavBar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
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
