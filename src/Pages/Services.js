import React from 'react'
import {ServicesBody} from '../Components/ServicesComponents/ServicesBody/ServicesBody'
import {ServicesBanner} from '../Components/ServicesComponents/ServicesBanner/ServicesBanner'

export const Services = () => {
    return (
        <div>
            <ServicesBanner />
            <ServicesBody />
        </div>
    )
}
