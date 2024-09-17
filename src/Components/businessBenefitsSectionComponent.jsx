import React, { Component } from 'react';
import '../ComponentStyles/businessBenefitsSectionComponent.css';


class BusinessBenefitsSectionComponent extends Component {
    state = {}
    render() {
        return (
            <div className='businessbenefitssectioncomponent'>
                <a href="">
                    <img src={require('../keeponcooking2.jpeg')} alt="Keep your home cooking img" />
                    <p className='text'>Keep your home cooking</p>
                    <p className='link'>Enter your address to begin</p>
                </a>

                <a href="/merchant">
                    <img src={require('../gasstore1.jpeg')} alt="Keep your home cooking img" />
                    <p className='text'>Your bottles, delivered to homes</p>
                    <p className='link'>Add your store</p>
                </a>

                <a href="/delivery">
                    <img src={require('../deliveryman1.jpeg')} alt="Keep your home cooking img" />
                    <p className='text'>Join our delivery network</p>
                    <p className='link'>Sign up to deliver</p>
                </a>
            </div>
        );
    }
}

export default BusinessBenefitsSectionComponent;