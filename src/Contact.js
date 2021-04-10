import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

export default function Contact() {
    return (
        <div className = "container contact">
            <h1>Contact</h1>
            <hr />

            <LocationOnIcon className = "icons"/>
            <p>Navsari, Gujarat, India</p>
            <PhoneIcon className = "icons"/>
            <p>(+91) 9925973300</p>
            <EmailIcon className = "icons"/>
            <p>pritrojivadiya@gmail.com</p>
        </div>
    )
}
