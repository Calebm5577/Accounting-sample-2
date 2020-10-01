import React from 'react'
// import BottomBanner from '../../images/BottomBanner.jpg'
import './BottomBanner.scss'
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

export const BottomBanner = () => {
    return (
        <div className="BottomBanner">
            <div className="BottomBanner-div1">
               
                <div className="BottomBanner-div1-div1">

                    <RoomIcon />
                    <span>
                        <p>Giged company name <br />9867 Mill Road, Cambridge, MG09 99HT</p>
                    </span>
                    
                </div>
                <div className="BottomBanner-div1-div2">

                    <span>
                          <PhoneIcon />
                          <p>501 419 740</p>
                    </span>

                    <span>
                        <EmailIcon />
                        <p>example@gmail.com</p>
                    </span>

                </div>
            </div>
        </div>
    )
}
