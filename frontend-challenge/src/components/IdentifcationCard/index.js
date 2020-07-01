import React, { useEffect } from 'react'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { Link } from 'react-router-dom'

import './styles.css'

export default function IdentificationCard(props) {

    useEffect(() => {
        console.log('props ' + JSON.stringify(props.user.email))
    }, [props])

    function renderStatus(status) {
        if (status === 'Ativo') {
            return 'active-status'
        } else {
            return 'inactive-status'
        }
    }

    return (
        <div className="card-container">
            
            <div className="title">
                Informações gerais
            </div>

            <div className="picture-container">
                <AccountCircleIcon style={{ color: '#696969', fontSize: 70 }} fontSize="large"/>
                <div className="name-container">
                    <p>{props.user.name}</p>
                    <p>{props.user.company}</p>
                    <p className={renderStatus(props.user.status)}>{props.user.status}</p>
                </div>
            </div>

            <div className="contact-container">
                <div className="contact-item">
                    <PhoneIcon style={{fontSize: 20}} />
                    <div className="items-description">
                        <p>{props.user.phone !== undefined ? props.user.phone.number : ''}</p>
                        <p>{props.user.phone !== undefined ? props.user.phone.type : ''}</p>
                    </div>
                </div>
                <div className="contact-item">
                    <EmailIcon style={{fontSize: 20}}/>
                    <div className="items-description">
                        <p>{props.user.email !== undefined ? props.user.email.address : ''}</p>
                        <p>{props.user.email !== undefined ? props.user.email.type : ''}</p>
                    </div>
                </div>
            </div>

            <div className="social-media-container">
                <Link className="link" to={props.user.social_media ? props.user.social_media.whatsapp : ''}><WhatsAppIcon style={{margin: 5}} /></Link>
                <Link className="link" to={props.user.social_media ? props.user.social_media.facebook : ''}><FacebookIcon style={{margin: 5}} /></Link>
                <Link className="link" to={props.user.social_media ? props.user.social_media.instagram : ''}><InstagramIcon style={{margin: 5}} /></Link>
                <Link className="link" to={props.user.social_media ? props.user.social_media.twitter : ''}><TwitterIcon style={{margin: 5}} /></Link>
                <Link className="link" to={props.user.social_media ? props.user.social_media.linkedin : ''}><LinkedInIcon style={{margin: 5}} /></Link>
            </div>
           
            
        </div>
    )
}
