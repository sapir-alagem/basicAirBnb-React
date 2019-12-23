import React, { Component } from 'react';
import './App.scss';
import GoogleMapReact from 'google-map-react';
import Flat from '../Flat';
import Marker from '../Marker';
import Search from '../Search';

class App extends Component {
  state = {
    flats: [],
    center: {
      lat: 48.856613,
      lng: 2.352222
    },
    selectedFlat: {},
    query: ""
  };

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => response.json())
    .then(data => {
      this.setState({ flats: data })
    })
  }

  selectFlat = (id) => {
    const { flats } = this.state;
    const selectedFlat = flats.find(flat => flat.id === id);
    
    const newCenter = {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    }

    this.setState({
      center: newCenter,
      selectedFlat: selectedFlat
    });
  }

  searchQuery = (value) => {
    this.setState({ query: value});
  }

  render() {
    const { flats, center, selectedFlat, query } = this.state;
    
    const filteredFlats = flats.filter(flat => flat.name.match(new RegExp(query, 'i')));

    return(
      <div className="app">
        <div className="main">
          <Search 
            placeholder="Search your next vacation home"
            onType={this.searchQuery} />
          
          <div className="flats">
            {filteredFlats.map(flat => {
              return(
                <Flat
                  onSelect={this.selectFlat}
                  key={flat.id}
                  id={flat.id}
                  price={flat.price}
                  name={flat.name}
                  currency={flat.priceCurrency}
                  img={flat.imageUrl} />
              )
            })}
          </div>
        </div>
        <div className="map">
            <GoogleMapReact center={center} zoom={14}>
              {flats.map(flat => {
                const { lat, lng, price } = flat;

                return(
                  <Marker 
                  key={flat.id}
                  price={flat.price}
                  selected={selectedFlat === flat} 
                  lat={lat}
                  lng={lng} />
                );
              })}
            </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
