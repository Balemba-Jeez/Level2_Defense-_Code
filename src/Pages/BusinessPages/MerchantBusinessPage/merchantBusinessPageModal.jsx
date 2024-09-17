import React, { Component } from 'react';
import '../../../PagesStyles/BusinessPageStyles/merchantBusinessPageModal.css'

class MerchantBusinessPageModal extends Component {
    state = {}
    render() {

        const { bottle, closeModal } = this.props; // Destructure bottle from props

        console.log('bottleDetails:', bottle);
        return (
            <div className="modalbackground">
                <div className='modal'>
                    <div className='modalleft'>
                        <img src={require('../../../tradex-gazcrop1.jpg')} alt="" />
                    </div>

                    <div className='modalright'>
                        <div className='text'>
                            <div className='cancelbutton'>
                                <img src={require('../../../cancelicon1.jpg')} alt="cancel"
                                    onClick={this.props.closeModal} // Close modal on image click
                                //style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
                                />
                            </div>

                            {/* Display dynamic gas item information */}
                            <h2>{bottle.brand || 'Gas Item'}</h2>
                            <p>{`${bottle.weight} kg of ${bottle.brand}, priced at ${bottle.price} XAF`}</p>
                        </div>

                        <div className='button'>
                            <div className='quantitybox'>
                                <div className='minus'>
                                    -
                                </div>
                                <p>1</p>
                                <div className='plus'>
                                    +
                                </div>
                            </div>
                            <button>Add <span>1</span> to cart <span>{bottle.price}</span>fcfa</button>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default MerchantBusinessPageModal;