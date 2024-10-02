import React from 'react';
import '../../PagesStyles/BusinessPageStyles/confirmationPageModal.css'

function ConfirmationPageModal() {
    return (
        <div className='confirmPageModalBackground'>
            <div className='confirmPageModal'>
                <div className='head'>
                    <p>GST Secure 1.0 Test Page</p>
                </div>

                <div className='tail'>
                    <p>
                        <span>
                            This is a test GST Secure V1.0
                            for a transaction with <span>gasSpace.DEV</span>
                        </span>In live mode, customers will be asked to verify
                        their identity with an authorization request or
                        push notification
                    </p>

                    <div className='buttons'>

                        <button className='btn'>Complete</button>
                        <button className='cancel'>Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ConfirmationPageModal
