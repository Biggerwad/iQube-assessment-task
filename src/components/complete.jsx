import React from 'react'

function Complete({onClick}) {
    return (
        <div className='complete'>
            {/* Sorry I couldn't get the green-tick to be here*/}
            <span className='entire'>
                <h1 className=''>Purchase Completed</h1>
                <p>
                    Please check your email for details concerning
                    this transaction.
                </p>
                <a href="#" onClick={onClick}>
                    Return Home
                </a>
            </span>
        </div>
    )
}

export default Complete
