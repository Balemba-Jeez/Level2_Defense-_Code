import React, { Component } from 'react';
import '../ComponentStyles/quartersNearMeSectionComponent.css'

class QuartersNearMeSectionComponent extends Component {
    state = {
        //mapUrl: "" //defualt-map-url
    }
    /*componentDidMount() {
        // Check if Google Maps API is loaded
        if (window.google && window.google.maps) {
            this.initMap();
        } else {
            // Create a global function to initialize the map
            window.initMap = this.initMap;
        }
    }


    initMap = () => {
        const { google } = window;
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Map options
                const mapOptions = {
                    center: new google.maps.LatLng(latitude, longitude),
                    zoom: 13,
                };

                // Create a new map
                const map = new google.maps.Map(document.getElementById('map'), mapOptions);
            },
            (error) => {
                console.error("Error getting location:", error);
            }
        );
    };*/


    render() {
        return (
            <div className='quartersnearmesectioncomponent'>
                <div className='title'>
                    <h2>Quarters near me</h2>
                    <a href="">View all 20+ quarters</a>
                </div>

                <div className='map' id='map' /*style={{ height: '360px', width: '93%' }}*/>

                    <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Mballa2,%20Yaound%C3%A9,%20Cameroon+(My%20Business%20Name)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
                </div>

                <div className='list'>
                    <table>
                        <tr>
                            <td>Bastos</td>
                            <td>Essos</td>
                            <td>Messasi </td>
                            <td>Omnisport</td>
                        </tr>
                        <tr>
                            <td>Nlongkak</td>
                            <td>Djoungolo</td>
                            <td>Nsimalen</td>
                            <td>Yaoundé 6</td>
                        </tr>
                        <tr>
                            <td>Biyem-Assi</td>
                            <td>Etoa-Meki</td>
                            <td>Elig-Essono</td>
                            <td>Nkolbisson</td>
                        </tr>
                        <tr>
                            <td>Nkolondom </td>
                            <td>Mvan</td>
                            <td>Minfac</td>
                            <td>Ngousso</td>
                        </tr>
                        <tr>
                            <td>Soa </td>
                            <td>Ngolé</td>
                            <td>Titi Garage</td>
                            <td>Mbankomo</td>
                        </tr>
                        <tr>
                            <td>Emana</td>
                            <td>Biyemassi</td>
                            <td>Tsinga</td>
                            <td>Awae</td>
                        </tr>
                        <tr>
                            <td>Etoudi</td>
                            <td>Obili</td>
                            <td>Damas</td>
                            <td>Cité Verte</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default QuartersNearMeSectionComponent;