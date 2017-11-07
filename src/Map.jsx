import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import logo from './logo.svg';
import '../node_modules/flat-ui/bootstrap/css/bootstrap.css';
import '../node_modules/flat-ui/css/flat-ui.css';
import './App.css';

class MapLabel extends Component{
    render(){
        return(
            <div className="tip">
                <div><strong>Language Garden</strong></div>
                <div>Kozanowska 89/15</div>
                <div>54-152 Wrocław</div>
                <div>Tel: 695366430</div>
                <div>E-mail: lgarden@gmail.com</div>
            </div>
        
        )
    }
}

class Map extends Component {
    static defaultProps = {
    center: {lat: 51.1390959, lng: 16.96890099999996},
    zoom: 16,
    apiKey: 'AIzaSyDS9EtyHVGuBMfo15ofBmgNCSIWpnkvi_U'
  };

  render() {
    return (
        <div className='map-container'>
            <h2>Kontakt</h2>
            <h4>Mapa dojazdu</h4>
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                bootstrapURLKeys={{key: this.props.apiKey}}
            >
                <MapLabel lat={51.1390959} lng={16.96890099999996}/>
            </GoogleMapReact>
      </div>
    );
  }
}

export default Map;