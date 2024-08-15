import React, { Component } from 'react';
import '../ComponentStyles/headerLeftItem.css'

class HeaderLeftItem extends Component {
    state = {}
    render() {
        return (
            <div className='header_leftitem'>
                <a className='Login'> Log in</a>
                <a className='Signup'> Sign up</a>

            </div>

        );
    }
}

export default HeaderLeftItem;