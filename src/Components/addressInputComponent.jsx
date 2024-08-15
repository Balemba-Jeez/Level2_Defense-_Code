import React, { Component } from 'react';
import AddressInputComponentInputItem from './addressInputComponent_inputitem';
import '../ComponentStyles/addressinputcomponent.css'

class AddressInputComponent extends Component {
    state = {}
    render() {
        return (
            <div className='addressinputcomponent'>
                <AddressInputComponentInputItem />
                <div>
                    <button type='button'>Search here</button>
                </div>
            </div>
        );
    }
}

export default AddressInputComponent;