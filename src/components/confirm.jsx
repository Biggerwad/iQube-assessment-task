import React from 'react'

function Confirm({ onClick }) {
    return (
        <div className='confirmBox'>
            <span className='confirm'>
                <div className='box1 box'>
                    <h3>Item Name</h3>
                    <span className='price'>
                        {/* Naira symbol comes here */}
                        Price
                    </span>
                </div>

                <div className='items'>
                    <span className='box2 box'>
                        <p>Data science and usability</p>
                        <p>50,000.00</p>
                    </span>
                    <span className='box'>
                        <p>Shipping</p>
                        <p>0.00</p>
                    </span>
                </div>
                {/* border-bottom commes here */}

                <div className='box3 box'>
                    <p>Total</p>
                    <p>50,000.00</p>
                </div>
            </span>

            <div className='special-effect pay'>
                <button className='next' onClick={onClick}>
                    Pay
                </button>
                <button className='cancel-p'>
                    Cancel Payment
                </button>
            </div>


        </div>
    )
}

export default Confirm
