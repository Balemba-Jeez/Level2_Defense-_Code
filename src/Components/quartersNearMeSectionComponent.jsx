import React, { Component } from 'react';
import '../ComponentStyles/quartersNearMeSectionComponent.css'
class QuartersNearMeSectionComponent extends Component {
    state = {}
    render() {
        return (
            <div className='quartersnearmesectioncomponent'>
                <div className='title'>
                    <h2>Quarters near me</h2>
                    <a href="">View all 20+ quarters</a>
                </div>

                <div className='map'>


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