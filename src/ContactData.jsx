import React, { Component } from 'react';


class ContactData extends Component {
    render(){
        const mapsLink = "https://www.google.pl/maps/dir//Kozanowska+89,+Wroc%C5%82aw/@51.1390959,16.9667123,17z/data=!4m16!1m7!3m6!1s0x470fea68e9d548ab:0xf34d4d3205fc3aad!2sKozanowska+89,+Wroc%C5%82aw!3b1!8m2!3d51.1390959!4d16.968901!4m7!1m0!1m5!1m1!1s0x470fea68e9d548ab:0xf34d4d3205fc3aad!2m2!1d16.968901!2d51.1390959?hl=pl"

        return(
            <div>
             <h2>Kontakt</h2>
                <div className="contact-data-container">
                    <i className="fa fa-address-card-o" aria-hidden="true"></i> Dane kontaktowe: 
                    <address>
                        <a href={mapsLink} target="_blank" className="address-container">                    
                            <i className="fa fa-map-marker" aria-hidden="true"></i><span>
                                ul. Kozanowska 89/15 <br/>
                                54-152 Wrocław </span>
                        </a>    
                        <a href="mailto:lgarden@gmail.com" className="address-container"> 
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span>lgarden@gmail.com</span>
                        </a>
                        <div className="address-container">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                            <span> +48 555 321 321</span>
                        </div>
                        <a href="https://facebook.com/languagegarden" target="_blank" className="address-container"> 
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            <span>Language Garden</span>
                        </a>   
                    </address>
                </div>
            </div>
        );
    }
}

export default ContactData;