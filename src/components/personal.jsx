import React from 'react'
import App from '../App'
import Billing from './billing'

function Personal({ onClick }) {
    return (
        <div className='personal'>
            <form className='main'>
                <div>
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" id='name' placeholder='Opera Linus Ahmed' />
                </div>

                <div>
                    <label className='email' htmlFor="email">Email Address</label> <em>*</em><br /> <br />
                    <span className='info'>The purchase receipt would be sent to this address</span>
                    <input type="text" id='email' placeholder='OperaLinusAhmed@devmail.com' />
                </div>

                <div>
                    <label htmlFor="address1">Address 1</label>  <br />
                    <input type="text" id='address1' placeholder='The address of the user goes here' />
                </div>

                <div>
                    <label htmlFor="address2">Address 2</label> <br />
                    <input type="text" id='address2' placeholder='The address of the user goes here' />
                </div>

                <div className='location'>
                    <span>
                        <label htmlFor="local-g">Local Government</label> <br />
                        <input type="text" id='local-g' placeholder='Surulere' />
                    </span>
                    <span>
                        <label htmlFor="state">State</label> <br />
                        <input type="text" id='state' placeholder='Lagos' />
                    </span>
                </div>

                <div className='special-effect'>
                    <button type='button' className='next' onClick={onClick}>
                        Next
                    </button>
                    <button type="button" className='cancel'>
                        Cancel Payment
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Personal
