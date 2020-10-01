import React from 'react'
import Phone from '../../images/phone.png'

import './Call.scss'

export const Call = () => {
    return (
        <div className="Call">
            <img src={Phone} alt="phone" className="Call-img"/>
            <h1>Feel free to call us</h1>
            <p>Maecenas metus nibh, varius eu pellentesque quis, scelerisque et nisso.
                Vivamus ultricies libero in sem blandit tincidunt.</p>
            <button>000 000 00</button>
        </div>
    )
}
