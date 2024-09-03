import React, { Component } from 'react';
import '../../../PagesStyles/BusinessPageStyles/merchantBusinessPageModal.css'
class MerchantBusinessPageModal extends Component {
    state = {}
    render() {
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
                            <h2>Tradex</h2>
                            <p>Reliable 6kg Tradex gas bottles, perfect for household use. Durable and efficient, ensuring consistent energy supply.</p>
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
                            <button>Add <span>1</span> to cart <span>6500</span>fcfa</button>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default MerchantBusinessPageModal;