import React, { Component } from 'react';
import '../../PagesStyles/merchantPageStyles/translateComponent.css';

class TranslateComponent extends Component {
    state = {}
    render() {
        return (
            <div className='translatecomponent'>
                <button>
                    <img src="globeicomain1.png" alt="translate icon" />
                    <p>EN</p>
                </button>
            </div>
        );
    }
}

export default TranslateComponent;