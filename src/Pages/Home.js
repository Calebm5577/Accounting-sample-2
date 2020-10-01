import React from 'react'
import {HomeBanner} from '../Components/HomeComponents/HomeBanner/HomeBanner'
import {Body} from '../Components/HomeComponents/Body/Body'
import {Office} from './../Components/OurOffice/Office'
import {Call} from './../Components/CallUs/Call'


export const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Body />
            <Office />
            <Call />
        </div>
    )
}
