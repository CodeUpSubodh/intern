import React, { Component } from 'react';
import { Map, GoogleApiWrapper,Marker,InfoWindow } from 'google-maps-react';
import Geocode from "react-geocode";



const mapStyles = {
  width: '30%',
  height: '30%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };
      onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
    
    
    
  
  render() {
     
    return (
       
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 28.704060,
            lng: 77.102493
          }
        }>
            <Marker
          onClick={this.onMarkerClick}
          name={"You are here"}
          draggable={true}
          
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      
    );
  }
  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAKhUdd_hMCpCuHvYwGt4SVovaZjXQrdwE'
})(MapContainer);