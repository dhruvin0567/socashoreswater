import React from 'react'
import Hero from '../Component/Home/Hero'
import Partner from './sections/Partner'
import Distribution from './sections/Distributin-network'
import CTA from './sections/CTA'


const page = () => {
    return (
        <div>
            <Hero />
            <Partner />
            <Distribution />
            <CTA/>
        </div>
    )
}

export default page;