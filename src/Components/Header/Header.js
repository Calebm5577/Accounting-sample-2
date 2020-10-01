import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Header.scss';
/// http://flashboard.pl/themes/monefy/
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';


export const Header = () => {
    return (
        <div className="Header-wrapper">
        <div className="Header">
            <div className="Header-div1">
                <span>
                    <RoomIcon />
                    <p> 9867 Mill Road, Cambridge, MG09 99HT </p>
                </span>
                <span>
                    <PhoneIcon />
                    <p>000-000-000</p>
                </span>
                <span>
                    <EmailIcon />
                    <p>hello@thisdomain.com</p>
                </span>
            </div>
            <div className="Header-div2">
                <span>
                    <TwitterIcon className="icon"/>
                </span>
                <span>
                    <FacebookIcon className="icon"/>
                </span>
                <span>
                    <InstagramIcon className="icon"/>
                </span>
            </div>
        </div>
        </div>
    )
}
