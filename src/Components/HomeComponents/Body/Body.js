import React from 'react'
import icon1 from '../../../images/icon1.png'
import icon2 from '../../../images/icon2.png'
import icon3 from '../../../images/icon3.png'
import './Body.scss'

export const Body = () => {
    return (
        <div className="HomeBody">
            <div className="HomeBody-div">
                <img src={icon1} alt="icon1" />
                <h1>Proximity</h1>
                <p>Vivamus posuere ex lorem, non maximus nisi fermentum quis. Morbi ac tempor nibh, et aliquet eros. Praesent vel imper.</p>
            </div>
            <div className="HomeBody-div">
                <img src={icon2} alt="icon1" />
                <h1>Good Prices</h1>
                <p>Vivamus posuere ex lorem, non maximus nisi fermentum quis. Morbi ac tempor nibh, et aliquet eros. Praesent vel imper.</p>
            </div>
            <div className="HomeBody-div">
                <img src={icon3} alt="icon1" />
                <h1>Your Security</h1>
                <p>Vivamus posuere ex lorem, non maximus nisi fermentum quis. Morbi ac tempor nibh, et aliquet eros. Praesent vel imper</p>
            </div>
        </div>
    )
}
