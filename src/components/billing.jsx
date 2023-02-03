import React from 'react'

// Passing onClick as a props so I can handle the state from app.js
function Billing({onClick}) {
    return (
        <div>
            <form action="#">
                <div>
                    <label htmlFor="cardName">Name of Card <em>*</em> </label> <br />
                    <input type="text" id='cardName' placeholder='Opera Linus Ahmed' />
                </div>

                <div>
                    <label htmlFor="card-type">Card Type <em>*</em> </label> <br />
                    <span className='info'>The purchase receipt would be sent to this address</span>
                    <input type="text" id='card-type' placeholder='OperaLinusAhmed@devmail.com' />
                </div>

                <div className='location cardDetails'>
                    <span>
                        <label htmlFor="cardDetails">Card details <em>*</em> </label> <br />
                        <input type="text" id='cardDetails' placeholder='44960  44960 44960 44960' />
                    </span>
                    <span>
                        <label htmlFor="eDate">Expiry date <em>*</em> </label> <br />
                        <input type="text" id='eDate' placeholder='04 / 23' />
                    </span>
                    <span className='cvv'>
                        <label htmlFor="cvv">CVV <em>*</em> </label> <br />
                        <input type="text" id='cvv' placeholder='923' />
                    </span>
                </div>

                <div className='special-effect'>
                    <button className='next' onClick={onClick}>
                        Next
                    </button>
                    <button className='cancel-p'>
                        Cancel Payment
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Billing
