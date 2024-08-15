import React, { Component } from 'react';
import '../ComponentStyles/regionsNearMeSectionComponent.css'

class RegionsNearMeSectionComponent extends Component {
    state = {}
    render() {
        return (
            <div className='regionsnearmesection'>

                <div className='titleregion'>
                    <h2>Quarters near me</h2>
                    <a href="">View all regions</a>
                </div>


                <div className='listregion'>
                    <table>
                        <tr>
                            <td>Adamawa</td>
                            <td>Centre</td>
                            <td>Adamaoua</td>
                            <td>Centre</td>

                        </tr>
                        <tr>

                            <td>East</td>
                            <td>Far North</td>
                            <td>Est</td>
                            <td>Extrême-Nord</td>
                        </tr>
                        <tr>
                            <td>Littoral</td>
                            <td>North</td>
                            <td>Littoral</td>
                            <td>Nord</td>
                        </tr>
                        <tr>
                            <td>Northwest</td>
                            <td>West</td>
                            <td>Nord-Ouest</td>
                            <td>Ouest</td>
                        </tr>
                        <tr>
                            <td>South</td>
                            <td>Southwest</td>
                            <td>Sud</td>
                            <td>Sud-Ouest</td>
                        </tr>


                    </table>
                </div>

            </div>
        );
    }
}

export default RegionsNearMeSectionComponent;