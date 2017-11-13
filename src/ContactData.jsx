import React, { Component } from 'react';


class ContactData extends Component {
    render(){
        return(
            <div>
             <h2>Kontakt</h2>
                <div className="contact-data-container">
                    <i className="fa fa-address-card-o" aria-hidden="true"></i> Dane kontaktowe: 
                    <address>
                        <div>                    
                            <i className="fa fa-map-marker" aria-hidden="true"></i><span>
                                ul. Kozanowska 89/15 <br/>
                                54-152 Wrocław </span>
                        </div>    
                        <div> 
                            <i className="fa fa-map-marker" aria-hidden="true"></i><span>
                                ul. Kozanowska 89/15 <br/>
                                54-152 Wrocław </span>
                        </div>   
                    </address>
                </div>
            </div>
        );
    }
}

export default ContactData;